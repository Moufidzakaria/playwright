import { chromium } from "@playwright/test";

(async () => {
    var proxy = 'gate.smartproviy.com:1000';
  // api de name
    var username = 'your_username';
  // api de password 
    var password = 'your_password';

    const launchOption = {
        proxy: {
            server: `http://${username}:${password}@${proxy}`
        },
        headless: false
    };

    const browser = await chromium.launch(launchOption);
    
    try {
        const page = await browser.newPage();
        await page.goto("https://smartproxy.com/");
        console.log(await page.textContent("body")); // Afficher le contenu du site
    } catch (error) {
        console.error("Erreur lors du chargement de la page :", error);
    } finally {
        await browser.close(); // Fermer le navigateur proprement
    }
})();
