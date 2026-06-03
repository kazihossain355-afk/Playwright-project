import { test } from '@playwright/test';

test('fill text box', async ({ page }) => {
  await page.goto('https://playwright.dev');

  console.log('Learning fill command');
});