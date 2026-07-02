import {test,expect} from '@playwright/test';

test('Login with invalid  id and password test', async ({ page }) => {
  await page.goto('https://qa.taltektc.com/index.html');
  await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('tempdata');
  await page.getByRole('textbox', { name: 'Password' }).fill('tempdata');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.getByText('Invalid student ID')).toBeVisible();
});


test('Login validation test', async ({ page }) => {
  await page.goto('https://qa.taltektc.com/index.html');
  await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('kazihossain355@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Arif1234');
  await page.getByRole('button', { name: 'Log in' }).click();

});


test('Login validation test with logout', async ({ page }) => {
  await page.goto('https://qa.taltektc.com/index.html');
  await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('kazihossain355@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Arif1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#nav_logout').click();
});

test('Switch to New Message Window', async ({ page }) => {
  await page.goto('https://qa.taltektc.com/index.html');
  await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('kazihossain355@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Arif1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Switching windows' }).click();
  await page.locator('#newMessageWindow').click();
});
