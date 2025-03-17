import {test , expect} from "@playwright/test"

test('Moude double click' , async ({page}) => {
   await page.goto("https://testautomationpractice.blogspot.com/")
   const buttonHover = await page.locator('//button[normalize-space()="Copy Text"]')
   //double click
   await buttonHover.dblclick()

   const f2 = await page.locator("#field2")
   await expect(2).toHaveValue('Hello World')
   
})