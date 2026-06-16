import { test, expect } from '@playwright/test';

test('failed login', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').fill('wronguser');

  await page.locator('#password').fill('wrongpassword');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

});