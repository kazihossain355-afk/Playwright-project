import { test, expect } from '@playwright/test';

test('open github', async ({ page }) => {
  await page.goto('https://github.com');

  await expect(page).toHaveTitle(/GitHub/);
});