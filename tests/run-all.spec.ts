import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { generateStepsAndCode } from "../utils/generatetestfromprompt"; // updated utility

// Load test cases from JSON
const testCasesPath = path.resolve(__dirname, "../data/testcase.json");

if (!fs.existsSync(testCasesPath)) {
  throw new Error("Test case JSON file not found at " + testCasesPath);
}

const testCases = JSON.parse(fs.readFileSync(testCasesPath, "utf-8"));

type Step = {
  action: string;
  selector?: string;
  value?: string;
};

for (const testCase of testCases) {
  test(`${testCase.id}: ${testCase.title}`, async ({ page }) => {
    console.log(`\n Running test: ${testCase.id} — ${testCase.title}`);

    let steps: Step[] = [];
    let code = "";

    try {
      // NEW: use title and steps array
      const result = await generateStepsAndCode(testCase.title, testCase.steps);
      steps = result.steps;
      code = result.code;

      if (!steps || steps.length === 0) {
        throw new Error(`No steps returned by AI for: ${testCase.id}`);
      }

      // Execute each step
      for (const [index, step] of steps.entries()) {
        console.log(`Step ${index + 1}:`, JSON.stringify(step));

        switch (step.action) {
          case "goto":
            await page.goto(step.value!, { timeout: 10000 });
            expect(page.url()).toContain(new URL(step.value!).hostname);
            break;

          case "click":
            await page.waitForSelector(step.selector!, { timeout: 10000 });
            await page.click(step.selector!);
            break;

          case "fill":
            await page.waitForSelector(step.selector!, { timeout: 10000 });
            await page.fill(step.selector!, step.value!);
            expect(await page.inputValue(step.selector!)).toBe(step.value!);
            break;

          case "expect":
            if (step.selector === "title") {
              const title = await page.title();
              expect(title).toContain(step.value!);
            } else {
              await page.waitForSelector(step.selector!, { timeout: 10000 });
              const content = await page.textContent(step.selector!);
              expect(content).toContain(step.value!);
            }
            break;

          default:
            console.warn(`Unknown action: ${step.action}`);
        }
      }
    } catch (err) {
      console.error(`Error in test case ${testCase.id}:`, err);
      throw err;
    } finally {
      // Save the generated .spec.ts code
      try {
        const outputDir = path.resolve("tests/generated");
        fs.mkdirSync(outputDir, { recursive: true });

        const filePath = path.join(outputDir, `${testCase.id}.spec.ts`);
        fs.writeFileSync(filePath, code.trim(), "utf8");

        console.log(`Saved AI-generated test to: ${filePath}`);
      } catch (writeErr) {
        console.error("Failed to write test file:", writeErr);
      }
    }
  });
}
