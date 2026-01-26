import fs from 'fs';
import path from 'path';

// Limit per file (chars). 4500 chars ~= 1125 tokens.
// 18 files * 1125 = 20,250 tokens. + 5k JSON = 25k. + System Prompt = 26k.
// Leaves 4k buffer for output and variance.
const MAX_FILE_CHARS = 4500;

function cleanContent(content: string) {
  // Remove imports
  let text = content.replace(/^import .*? from .*?$/gm, '');
  text = text.replace(/^import .*?$/gm, '');
  text = text.replace(/['"]use client['"];?/g, '');

  // Strip JSX/HTML tags to extract pure text
  // This removes <Component ...> and </Component>, leaving inner text
  text = text.replace(/<[^>]+>/g, '\n');

  // Collapse whitespace
  text = text.replace(/\n\s*\n/g, '\n');
  text = text.replace(/[ \t]+/g, ' ');

  if (text.length > MAX_FILE_CHARS) {
    return text.slice(0, MAX_FILE_CHARS) + '\n...[TRUNCATED]...';
  }
  return text;
}

export function getPortfolioContext() {
  const rootDir = process.cwd();
  const RELEVANT_FILES = [
    'src/app/page.tsx',
    'src/app/resume/page.tsx',
    'src/app/profile/page.tsx',
  ];

  let context = '';

  // 1. Read High-Level Pages
  for (const relativePath of RELEVANT_FILES) {
    try {
      const fullPath = path.join(rootDir, relativePath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        context += `\n--- START FILE: ${relativePath} ---\n`;
        context += cleanContent(content);
        context += `\n--- END FILE: ${relativePath} ---\n`;
      }
    } catch (e) {
      console.error(`Error reading file ${relativePath}:`, e);
    }
  }

  // 2. Read Deep Case Study Content
  try {
    const caseStudyDir = path.join(rootDir, 'src/app/case-study');
    if (fs.existsSync(caseStudyDir)) {
      const slugs = fs.readdirSync(caseStudyDir);

      for (const slug of slugs) {
        // Avoid .DS_Store or other non-directories
        const slugPath = path.join(caseStudyDir, slug);
        if (fs.statSync(slugPath).isDirectory()) {
          const pagePath = path.join(slugPath, 'page.tsx');
          if (fs.existsSync(pagePath)) {
            const content = fs.readFileSync(pagePath, 'utf-8');
            context += `\n--- START CASE STUDY: ${slug} ---\n`;
            context += cleanContent(content);
            context += `\n--- END CASE STUDY: ${slug} ---\n`;
          }
        }
      }
    }
  } catch (e) {
    console.error('Error reading case studies:', e);
  }

  return context;
}
