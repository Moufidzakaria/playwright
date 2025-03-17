import {test , expect} from "@playwright/test"

test('Assersion' , async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register")

    //1} expct page tohaveURL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

  
    //3 expext(locator)
    const logElement = await page.locator(".header-logo")
    await expect(logElement).toBeVisible()

    //4 expext(locator).toBeEnland
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //chekBox
    const newsLeterButon = await page.locator('#Newsletter')
    await expect(newsLeterButon).toBeChecked()

    //email locator
    const emailInput = await page.locator('#Email')
    emailInput.fill('test@gmail.com')

})