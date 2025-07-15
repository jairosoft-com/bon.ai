import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// === Generate Manila timestamp ===
const now = new Date();
const pad = (n: number) => n.toString().padStart(2, "0");
const manilaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
const runLabel = `Run-${manilaTime.getFullYear()}-${pad(manilaTime.getMonth() + 1)}-${pad(manilaTime.getDate())}_${pad(manilaTime.getHours())}-${pad(manilaTime.getMinutes())}`;

// === Define paths ===
const rootDir = __dirname;
const allureResultsDir = path.join(rootDir, "allure-results");
const allureReportDir = path.join(rootDir, "allure-report");
const allureHistoryDir = path.join(rootDir, "allure-history");
const runReportDir = path.join(allureHistoryDir, runLabel);

// === Step 1: Clean previous results ===
console.log("🧹 Cleaning old Allure results and reports...");
[allureResultsDir, allureReportDir].forEach((dir) => {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
});
fs.mkdirSync(allureResultsDir, { recursive: true });

// === Step 2: Run existing Playwright test file ===
try {
  console.log("🚀 Running all-tests.spec.ts with Playwright...");
  execSync(`npx playwright test tests/all-tests.spec.ts`, { stdio: "inherit" });
} catch (err) {
  console.error("❌ Playwright test run failed:", String(err));
}

// === Step 3: Generate Allure report ===
try {
  console.log("📊 Generating Allure report...");
  execSync(`npx allure generate ${allureResultsDir} --clean -o ${allureReportDir}`, { stdio: "inherit" });

  // Move report into /allure-history
  fs.mkdirSync(allureHistoryDir, { recursive: true });
  fs.renameSync(allureReportDir, runReportDir);

  console.log(`✅ Allure report saved to: ${runReportDir}`);

  // Open the report
  execSync(`npx allure open "${runReportDir}"`, { stdio: "inherit" });

} catch (err) {
  console.error("❌ Error during Allure report generation:", String(err));
}
