// @ts-check
import { test, expect } from '@playwright/test';


test("Locator" , async ({page}) => {
    await page.goto("https://www.demoblaze.com/")
    await page.click('id=login2')

    //provide username
    await page.locator('#loginusername').fill('pavanol')

    //provide password

    await page.fill("input[id='loginpassword']" , "test@123")

    // button login
    await page.click("//button[normalize-space()='Log in']")

    // button de logaut
   // await page.click("//a[normalize-space()='Log out']")
   // const logautLink = await page.click("//a[normalize-space()='Log out']")

    //await expect(logautLink).toBeVisible()



   //link produi

    const products =  await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products) {
        const podNmae = await product.textContent()
        console.log(podNmae)
    }

   //close page

   await page.close()
})