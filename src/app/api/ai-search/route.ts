import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { CASE_STUDIES } from '../../../components/content/case-studies/data/case-studies';
import { getPortfolioContext } from '../../../utils/ai-search';
import { logQueryToSheet } from '../../../utils/google-sheets';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Log query to Google Sheets asynchronously (ignoring errors to not block response)
    await logQueryToSheet(query);

    const context = getPortfolioContext();
    const caseStudiesData = JSON.stringify(CASE_STUDIES);

    const systemPrompt = `
You are an AI Design Engineering Partner embedded in Emre's portfolio website. 
Your goal is to be an advocate for the designer, speaking to recruiters and hiring managers with professional warmth and insightful candor.

CORE PHILOSOPHY:
- You are supportive, grounded, and highly knowledgeable about Emre's 8+ years of experience across design and frontend engineering.
- If a user asks a "negative" or "trap" question (e.g., "Why shouldn't we hire them?" or "What are their weaknesses?"), your task is to REFRAME the answer. 
- Do not be blindly biased, but instead focus on "Ideal Fit": describe the environments where Emre thrives most (e.g., fast-paced product teams, high-ownership roles, bridging the gap between design and code).
- Highlight growth areas as active pursuits (e.g., "Emre is currently deepening his expertise in [X]").

INSTRUCTIONS:
- Use the provided source code and case studies to back up your claims with evidence.
- If the user asks about specific code implementation, quote variables or file names.
- If the user asks about case studies, summarize the content found in 'AVAILABLE CASE STUDIES' below.
- IMPORTANT: You must return your answer in valid JSON format only, with no markdown formatting around it.
- Format your 'summary' with distinct paragraphs using double newlines (\\n\\n) to improve readability.

STRUCTURE:
{
  "summary": "A professional, friendly, and supportive response. Use standard markdown formatting. Use double newlines (\\n\\n) to create separate paragraphs. Use bullet points (-) for lists.",
  "suggestedLinks": [
     { 
       "label": "Page Title or Case Study Name", 
       "url": "/path/to/page",
       "excerpt": "A brief explanation of relevance." 
     }
  ],
  "followUpQuestions": [
    "Suggested questions to guide the user deeper into the work."
  ]
}

- Keep 'suggestedLinks' to max 6.
- Ensure ALL relevant case studies are included in 'suggestedLinks' if the user requests 'all' of a specific type.
- Keep 'followUpQuestions' to max 3.

AVAILABLE CASE STUDIES (Use this data as the primary source of truth for project questions):
${caseStudiesData}

ADDITIONAL CONTEXT (Resume, Profile, Page):
${context}
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.5,
      max_tokens: 1000,
    });

    const rawContent = completion.choices[0].message.content;

    let parsedContent;
    try {
      parsedContent = JSON.parse(rawContent || '{}');
    } catch (e) {
      console.error('Failed to parse AI response', rawContent);
      parsedContent = {
        summary: rawContent || 'I encountered an error generating the response.',
        suggestedLinks: [],
        followUpQuestions: [],
      };
    }

    return NextResponse.json(parsedContent);
  } catch (error: any) {
    console.error('AI Search Error:', error);

    // Handle OpenAI Quota limits gracefully
    if (error?.status === 429) {
      // 1. Dynamic Fallback: Get top 3 featured case studies
      const fallbackProjects = CASE_STUDIES.filter((study) => study.featured)
        .slice(0, 4)
        .map((study) => ({
          label: study.title,
          url: study.href,
          excerpt: study.heading || study.metadata || 'View this case study',
        }));

      return NextResponse.json(
        {
          summary: `**I’m currently at capacity!** I'm a bit overloaded with requests right now. I’ve curated a few of Emre's standout projects for you to explore. These case studies highlight his impact on **Design Systems**, **0-to-1 Product Strategy**, and **Frontend Engineering** context.`,

          suggestedLinks: fallbackProjects,

          followUpQuestions: [],
          disableInput: true,
        },
        { status: 200 } // Return 200 so the UI renders the message as a "result"
      );
    }

    return NextResponse.json(
      { error: error.message || 'An error occurred during search' },
      { status: 500 }
    );
  }
}
