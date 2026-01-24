import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { CASE_STUDIES } from '../src/components/content/case-studies/data/case-studies';

// Load environment variables (tries .env first, then .env.local)
dotenv.config();
if (!process.env.OPENAI_API_KEY) {
  dotenv.config({ path: '.env.local' });
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper to clean scraped text
function cleanText(text: string) {
  return text
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/\{.*\}/gm, '') // Remove dynamic JS like {study.title}
    .replace(/&quot;/g, '"') // Fix quotes
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim();
}

// Helper to split long text into safe chunks (<4096 chars)
function splitTextIntoChunks(text: string, maxLength: number = 4000): string[] {
  if (text.length <= maxLength) return [text];

  const chunks: string[] = [];
  let currentChunk = '';

  // Split by sentence endings (.?!) followed by space
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g) || [text];

  for (const sentence of sentences) {
    // If adding the next sentence exceeds the limit, push the current chunk and start a new one
    if ((currentChunk + sentence).length > maxLength) {
      if (currentChunk) chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += sentence;
    }
  }
  if (currentChunk) chunks.push(currentChunk.trim());

  return chunks;
}

async function generateAudio() {
  const outputDir = path.join(process.cwd(), 'public/audio-temp');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const study of CASE_STUDIES) {
    const pagePath = path.join(process.cwd(), `src/app${study.href}/page.tsx`);

    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️ Skipping ${study.id}: Page file not found.`);
      continue;
    }

    console.log(`🎙️ Processing: ${study.title}...`);

    const fileContent = fs.readFileSync(pagePath, 'utf-8');

    // Scrape content
    const contentMatches = fileContent.matchAll(/<(Title|Text|Blockquote)[^>]*>([\s\S]*?)<\/\1>/g);

    let bodyText = '';
    for (const match of contentMatches) {
      const clean = cleanText(match[2]);
      if (clean && !clean.includes('study.') && clean.length > 15) {
        bodyText += clean + '.\n\n';
      }
    }

    const fullScript = `
      Case Study: ${study.title}.
      Overview. ${study.description}
      The Problem. ${study.problem}
      The Proposal. ${study.proposal}
      Deep Dive. ${bodyText}
    `.trim();

    // 1. Split text if it's too long
    const textChunks = splitTextIntoChunks(fullScript);
    const audioBuffers: Buffer[] = [];

    try {
      // 2. Generate audio for each chunk
      for (let i = 0; i < textChunks.length; i++) {
        if (textChunks.length > 1) {
          process.stdout.write(`   ↳ Part ${i + 1}/${textChunks.length}... `);
        }

        const mp3 = await openai.audio.speech.create({
          model: 'tts-1',
          voice: 'alloy',
          input: textChunks[i],
        });

        const buffer = Buffer.from(await mp3.arrayBuffer());
        audioBuffers.push(buffer);

        if (textChunks.length > 1) console.log('Done.');
      }

      // 3. Combine buffers and save
      const finalBuffer = Buffer.concat(audioBuffers);
      const fileName = `${study.id}.mp3`;
      await fs.promises.writeFile(path.join(outputDir, fileName), finalBuffer);
      console.log(`✅ Generated: ${fileName}`);
    } catch (error) {
      console.error(`❌ Failed ${study.id}:`, error);
    }
  }
}

generateAudio();
