const { test, expect } = require('@playwright/test');

test('Search Playwright in Google', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.locator('textarea').fill('Playwright');

    await page.keyboard.press('Enter');

    await expect(page.locator('body')).toContainText('Playwright');

});