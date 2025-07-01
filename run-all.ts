// Execute everything from initializing GPT to Generation of Script Report
// run-all.ts
import { generateTestCode } from "./utils/generatetestfromprompt";
import { execSync } from "child_process";
import { testScenarios } from "./test-scenario";

async function runEverything() {
  for (const scenario of testScenarios) {
    console.log(`🧠 Generating test for: ${scenario.name}`);
    await generateTestCode(scenario.prompt);
  }

  console.log("🎭 Running Playwright tests...");
  execSync("npx playwright test", { stdio: "inherit" });

  console.log("📊 Generating HTML report...");
  execSync("allure generate playwright-report --clean -o allure-report", {
    stdio: "inherit",
  });

  console.log("🌐 Opening HTML report...");
  execSync("allure open allure-report", { stdio: "inherit" });
}

runEverything();
