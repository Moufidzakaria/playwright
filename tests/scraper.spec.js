import { chromium } from 'playwright';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement

// Configurer OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log("🔍 Scraping des titres...");
    await page.goto('https://news.ycombinator.com/');

    // Récupérer les titres
    const titles = await page.$$eval('.titleline > a', links => links.map(link => link.innerText));

    console.log("📌 Titres extraits :", titles);

    // Résumer avec OpenAI
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: `Résume ces titres d'actualités : ${titles.join(", ")}` }]
    });

    console.log("🤖 Résumé AI :", response.choices[0].message.content);

    await browser.close();
})();
