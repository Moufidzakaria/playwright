
import { test, expect } from '@playwright/test';


test('Mouse Hover has', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  const desktop  = await page.locator('//a[normalize-space()="Desktops"]')
  const macbokk = await page.locator('//a[normalize-space()="Mac (1)')

  //mouse Hover
  await desktop.hover()
  await macbokk.hover()

 
});

