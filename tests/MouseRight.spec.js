import {test , expect} from "@playwright/test"

test("Mouse right click" , async function ({page}) {
   await page.goto("https://swisnl.github.io/jQuery-contextMenu/")

   const button = await page.locator('//span[normalize-space()="right click me"]')

   await button.click({button: 'right'})

   await page.waitForEvent(5000)

})