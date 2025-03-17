import { test, expect } from '@playwright/test';

test('Valide Login', async ({ page }) => {
 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log('Page loaded');

  await page.getByPlaceholder("Username").fill("Admin");
  console.log('Username filled');

  await page.getByPlaceholder("Password").fill("admin123");
  console.log('Password filled');

  await page.locator("button[type='submit']").click();
  console.log('Login button clicked');

  await page.getByRole('listitem').filter({hasText: "Leave"}).click()

});