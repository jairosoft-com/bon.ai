import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { generateStepsAndCode } from "./utils/openAI";

// === Manila timestamp helper ===
const now = new Date();
const pad = (n: number) => n.toString().padStart(2, "0");
const manilaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
const runLabel = `Run-${manilaTime.getFullYear()}-${pad(manilaTime.getMonth() + 1)}-${pad(manilaTime.getDate())}_${pad(manilaTime.getHours())}-${pad(manilaTime.getMinutes())}`;

const rootDir = __dirname;
const testCasesPath = path.join(rootDir, "./data/testcase.json");
const outputTestPath = path.join(rootDir, "./tests/all-tests.spec.ts");
const allureResultsDir = path.join(rootDir, "allure-results");
const allureReportDir = path.join(rootDir, "allure-report");
const allureHistoryDir = path.join(rootDir, "allure-history");
const runReportDir = path.join(allureHistoryDir, runLabel);

// === Step 1: Clean old results/reports ===
console.log("🧹 Cleaning old Allure results and reports...");
[allureResultsDir, allureReportDir].forEach((dir) => {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
});
fs.mkdirSync(allureResultsDir, { recursive: true });

// === Step 2: Load test cases and generate test file ===
(async () => {
  const testCases = JSON.parse(fs.readFileSync(testCasesPath, "utf-8"));
  const allTests: string[] = [`import { test, expect } from "@playwright/test";`];

  for (const testCase of testCases) {
    console.log(`🧠 Generating: ${testCase.id} — ${testCase.title}`);
    try {
      const { code } = await generateStepsAndCode(testCase.title, testCase.steps, testCase.id);
      if (code) {
        const cleaned = code
          .replace(/import\s+\{[^}]+\}\s+from\s+['"]@playwright\/test['"];?/g, "")
          .replace(/\\"/g, '"')
          .replace(/\\n/g, '\n')
          .replace(/\\t/g, '  ')
          .trim();
        allTests.push(cleaned);
      } else {
        console.warn(`⚠️ No code generated for ${testCase.id}`);
      }
    } catch (err) {
      console.error(`❌ Failed to generate ${testCase.id}:`, err);
    }
  }

  fs.writeFileSync(outputTestPath, allTests.join("\n\n"), "utf-8");
  console.log(`✅ Written to: ${outputTestPath}`);

  // === Step 3: Run tests ===
  try {
    console.log("🚀 Running all-tests.spec.ts with Playwright...");
    execSync(`npx playwright test tests/all-tests.spec.ts`, { stdio: "inherit" });
  } catch (err) {
    console.error("❌ Playwright test run failed:", String(err));
  }

  // === Step 4: Generate Allure report ===
  try {
    console.log("📊 Generating Allure report...");
    execSync(`npx allure generate ${allureResultsDir} --clean -o ${allureReportDir}`, { stdio: "inherit" });

    // Move to historical folder
    fs.mkdirSync(allureHistoryDir, { recursive: true });
    fs.renameSync(allureReportDir, runReportDir);

    console.log(`✅ Allure report saved to: ${runReportDir}`);
    execSync(`npx allure open "${runReportDir}"`, { stdio: "inherit" });

  } catch (err) {
    console.error("❌ Error during Allure report generation:", String(err));
  }
})();
