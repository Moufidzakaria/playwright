import { test, expect } from '@playwright/test';


test('Verifiy Google has', async ({ page }) => {
  await page.goto('https://google.com');

  const url = await page.url()
  console.log("title" + url)

  const title = await page.title()
  console.log("Ttile isd " + title)

  await expect(page).toHaveTitle("Google")
});


