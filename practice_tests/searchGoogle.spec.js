import { test, expect } from '@playwright/test';

test('search google', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.locator('textarea[name="q"]').fill('Playwright');

  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);

});