import { test, expect } from '@playwright/test';


test("Select Value For dropdown" , async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.getByPlaceholder("Name").fill("Admin");
    console.log('Zakaria');

    await page.getByPlaceholder("Email").fill("Admin23@gmail.com");
    console.log('Username filled');

    await page.getByPlaceholder("Password").fill("admin123");
    console.log('Password filled');

    
    await page.locator("#state").selectOption(
        {
            label: "Goa"
        }
    )

    await page.locator("#state").selectOption(
        {
            value: "Assam"
        }
    )
    await page.waitForTimeout(3000)

    

})