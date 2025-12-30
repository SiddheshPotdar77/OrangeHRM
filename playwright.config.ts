import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  timeout: 5000,
  outputDir: 'results',
  reporter: [['list'], ['html']],
  projects: [
    {
      name: 'Chrome',
       ...devices['Desktop Chrome'],
      use: {
        baseURL: 'https://www.webdriveruniversity.com/',
    headless: false,               // Run with UI so you can see maximized window
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: null,   
        channel: 'chrome',          // Use system-installed Chrome
        launchOptions: {
          args: ['--start-maximized'], // ✅ correct place for args
        },
      },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
