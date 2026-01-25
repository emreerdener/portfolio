import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { ElevenLabsClient } from 'elevenlabs';
import { CASE_STUDIES } from '../src/components/content/case-studies/data/case-studies';

dotenv.config();
if (!process.env.ELEVENLABS_API_KEY) {
  dotenv.config({ path: '.env.local' });
}

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'NNl6r8mD7vthiJatiJt1';

function cleanText(text: string) {
  return text
    .replace(/<[^>]*>?/gm, '')
    .replace(/\{.*\}/gm, '')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitTextIntoChunks(text: string, maxLength: number = 4000): string[] {
  if (text.length <= maxLength) return [text];
  const chunks: string[] = [];
  let currentChunk = '';
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g) || [text];

  for (const sentence of sentences) {
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

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

async function generateAudio() {
  const outputDir = path.join(process.cwd(), 'public/audio-temp');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  console.log(`🚀 Starting batch generation for ${CASE_STUDIES.length} case studies...`);

  for (const study of CASE_STUDIES) {
    const fileName = `${study.id}.mp3`;
    const filePath = path.join(outputDir, fileName);

    // 🔴 SKIP LOGIC: If file exists, don't pay to generate it again
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skipping ${study.id} (Already exists)`);
      continue;
    }

    const pagePath = path.join(process.cwd(), `src/app${study.href}/page.tsx`);

    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️ Skipping ${study.id}: Page file not found.`);
      continue;
    }

    console.log(`🎙️ Processing: ${study.title}...`);

    const fileContent = fs.readFileSync(pagePath, 'utf-8');
    const contentMatches = fileContent.matchAll(/<(Title|Text|Blockquote)[^>]*>([\s\S]*?)<\/\1>/g);

    let bodyText = '';
    for (const match of contentMatches) {
      const clean = cleanText(match[2]);
      if (clean && !clean.includes('study.') && clean.length > 15) {
        bodyText += clean + '.\n\n';
      }
    }

    const statsScript = study.stats
      ? study.stats
          .map((s) => {
            const val = s.value ? `${s.value} ` : '';
            return `${val}${s.label}. ${s.description}.`;
          })
          .join(' ')
      : '';

    const impactSection = study.statsDescription
      ? `Impact and outcomes. ${study.statsDescription}`
      : '';

    const fullScript = `
      ${study.title}.
      ${study.metadata || ''}.
      ${study.heading || ''}.
      ${study.description}
      The Problem. ${study.problem}
      The Proposal. ${study.proposal}
      ${impactSection}
      ${statsScript}
      ${bodyText}
    `.trim();

    const textChunks = splitTextIntoChunks(fullScript);
    const audioBuffers: Buffer[] = [];

    try {
      for (let i = 0; i < textChunks.length; i++) {
        process.stdout.write(`   ↳ Part ${i + 1}/${textChunks.length}... `);

        const audioStream = await client.textToSpeech.convert(VOICE_ID, {
          text: textChunks[i],
          model_id: 'eleven_turbo_v2_5',
          output_format: 'mp3_44100_128',
        });

        const buffer = await streamToBuffer(audioStream);
        audioBuffers.push(buffer);
        console.log('Done.');
      }

      const finalBuffer = Buffer.concat(audioBuffers);
      await fs.promises.writeFile(filePath, finalBuffer); // Save to filePath
      console.log(`✅ Generated: ${fileName}`);
    } catch (error) {
      console.error(`❌ Failed ${study.id}:`, error);
    }
  }
}

generateAudio();
