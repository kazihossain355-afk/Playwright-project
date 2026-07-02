const {test, expect} = require('@playwright/test');

test('verify Google page UI', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google/');
    await expect(page.locator('textarea')).toBeVisible();
    
});