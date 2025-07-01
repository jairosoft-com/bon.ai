import { OpenAI } from "openai";
import { config } from "dotenv";

config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateStepsAndCode(
  title: string,
  stepsArray: string[]
): Promise<{ steps: any[]; code: string }> {
  const stepsText = stepsArray.map((s, i) => `${i + 1}. ${s}`).join("\n");

  const userPrompt = `You are a test generation assistant. 

Use the following information to generate:
1. A JSON array of structured test steps for execution.
2. A complete Playwright test written in TypeScript (no markdown formatting, no extra explanation).

## Test Case
Title: ${title}
Steps:
${stepsText}

## Output format (MUST be valid JSON):
{
  "steps": [
    { "action": "goto", "value": "https://example.com" },
    { "action": "click", "selector": "text=Login" },
    ...
  ],
  "code": "import { test, expect } from '@playwright/test';\\n\\ntest('...', async ({ page }) => { ... });"
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125", // or gpt-3.5-turbo
    messages: [
      { role: "system", content: "You are an expert Playwright automation generator." },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.3
  });

  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error("No content returned from OpenAI");

  try {
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed.steps) || typeof parsed.code !== "string") {
      throw new Error("Invalid structure in AI output");
    }

    return parsed;
  } catch (err) {
    console.error(" Failed to parse AI output as JSON:\n", content);
    throw err;
  }
}
