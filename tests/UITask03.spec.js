const { test, expect } = require('@playwright/test');

test('Verify Google Search button', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page.getByRole('button', {
        name: 'Google Search'
    })).toBeVisible();

});