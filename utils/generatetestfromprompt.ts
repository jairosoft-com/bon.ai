//Uses ChatGPT to generate script and save it to gpt-test.spc.ts
// utils/generateTestFromPrompt.ts
import { config } from "dotenv";
import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

config(); // Load .env

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTestCode(prompt: string): Promise<void> {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // or "gpt-3.5-turbo"
    messages: [
      {
        role: "system",
        content: "You are an expert at writing Playwright tests in TypeScript. Output only Playwright test code inside a test block."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.2
  });

  const code = response.choices[0].message.content;

  const testFilePath = path.resolve("tests/gpt-test.spec.ts");
  fs.writeFileSync(testFilePath, code || "", "utf8");

  console.log(`✅ Generated test written to: ${testFilePath}`);
}
