import { test } from '@playwright/test';

test('fill input box', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').fill('tomsmith');

  await page.locator('#password').fill('SuperSecretPassword!');
});