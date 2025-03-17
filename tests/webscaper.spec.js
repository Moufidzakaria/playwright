import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Search for anything' }).click();
  await page.getByRole('combobox', { name: 'Search for anything' }).fill('snak');
  await page.getByRole('option', { name: 'snake skin cowboy boots' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByAltText('New Men’s Brown Snake Skin').click();
  const page1 = await page1Promise;
  await page1.getByTestId('x-photos-min-view').getByTestId('ux-image-carousel-container').getByRole('button', { name: 'Next image - Item images' }).click();
  await page1.getByTestId('x-photos-min-view').getByTestId('ux-image-carousel-container').getByRole('button', { name: 'Next image - Item images' }).click();
  await page1.getByTestId('x-photos-min-view').getByTestId('ux-image-carousel-container').getByRole('button', { name: 'Next image - Item images' }).click();
  await page1.getByTestId('x-photos-min-view').getByTestId('ux-image-carousel-container').getByRole('button', { name: 'Next image - Item images' }).click();
});