// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [
    ["list"],
    ["allure-playwright"]
  ],
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    video: "on-first-retry",
  }
});
