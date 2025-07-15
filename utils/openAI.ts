import { OpenAI } from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateStepsAndCode(
  title: string,
  steps: string[],
  id: string
): Promise<{ steps: string[]; code: string }> {
  const formattedSteps = steps.map((s, i) => `${i + 1}. ${s}`).join("\n");

  const prompt = `
You are a test generation assistant.

You will be given:
- Test ID: ${id}
- Test Title: ${title}
- A list of test steps written in natural language

You must return a **valid JSON object** in this exact format:

{
  "steps": [string[]],
  "code": "import { test, expect } from '@playwright/test';\\ntest('${id} - ${title}', async ({ page }) => {\\n  // Playwright steps here\\n});"
}

Strict output rules:
- NO markdown, NO explanation.
- The JSON must be valid and escaped.
- The "code" string must escape newlines (\\\\n) and quotes (\\\\") and use **double quotes** on keys and string values.
- NEVER use ellipses (...) in the code.
- ALWAYS generate complete, properly formatted Playwright code.
- Indent every line in the test body with 2 spaces.
- If the step includes "index" or "nth", use \`.nth(N)\` in the selector.
- If the step includes \`[selector=.class1.class2]\`, use \`page.locator('.class1.class2')\`.
- ALWAYS use \`await expect(page.locator(...)).toBeVisible();\` for visibility checks.
- NEVER use \`.isVisible()\` inside \`expect(...)\`.
- ALWAYS use \`await locator.click();\` for click actions, no visibility conditionals.
- If matching element by visible text inside a selector, use :has-text("TEXT") inside the selector string. NEVER use .withText().

Assertion rules:
- ONLY use \`await expect(page.locator(...)).toBeVisible();\` for visibility checks.
- NEVER use \`expect(...).toBe(true)\`, \`.toBeTruthy()\`, \`.toHaveText()\`, or \`.withText()\`.
- DO NOT use \`expect(...).toHaveText(...)\` under any circumstance.
- DO NOT use \`.withText('...')\` — instead, use exact locators like \`page.getByText('TEXT')\` or \`page.locator('text=TEXT')\`.

Locator rules:
- Use \`page.getByRole('link', { name: 'TEXT' })\` for nav links.
- Use \`page.getByRole('heading', { name: 'TEXT' })\` for section headings.
- Use \`page.getByText('TEXT')\` for plain visible text.

Steps:
${formattedSteps}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  const raw = completion.choices[0].message.content?.trim() || "{}";

  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("❌ Failed to parse full JSON response. Attempting fallback extraction...");

    const stepsMatch = raw.match(/"steps"\s*:\s*(\[[\s\S]*?\])\s*,?/);
    const codeMatch = raw.match(/"code"\s*:\s*"([^]*)"\s*}$/);

    let steps: string[] = [];
    let code = "";

    try {
      steps = stepsMatch ? JSON.parse(stepsMatch[1]) : [];
    } catch (_) {
      console.warn("⚠️ Failed to parse steps array.");
    }

    if (codeMatch) {
      code = codeMatch[1]
        .replace(/\\"/g, '"')
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '  ')
        .replace(/\\r/g, '');

      // Patch: expect() without closing )
      code = code.replace(
        /(await expect\(page\.locator\([^)]+)\.toBeVisible\(\);/g,
        '$1)).toBeVisible();'
      );

      // Patch: .withText => :has-text(...)
      code = code.replace(
        /page\.locator\(\s*["'`]([^"'`]+?)["'`]\s*\)\.withText\(\s*["'`]([^"'`]+?)["'`]\s*\)/g,
        (_, base, text) => `page.locator("${base}:has-text(\\"${text}\\")")`
      );

      // Inject Manila timestamp for test.describe
      const date = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).replace(/[^\d]/g, '-').replace(/-$/, '');

      const formatted = date.slice(0, 10).replace(/-/g, '-') + ' ' + date.slice(11);

      code = `test.describe("Run - ${formatted}", () => {\n${code}\n});`;
    }

    return { steps, code };
  }
}
