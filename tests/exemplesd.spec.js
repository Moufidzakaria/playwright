const { chromium } = require('playwright');

(async () => {
  // Lancer le navigateur
  const browser = await chromium.launch({ headless: false }); // headless: false pour voir ce qui se passe
  const page = await browser.newPage();

  // Accéder à la page du formulaire
  await page.goto('https://example.com/signup'); // Remplace avec l'URL de ton site

  // Remplir le formulaire
  await page.fill('input[name="username"]', 'testuser'); // Remplir le champ 'username'
  await page.fill('input[name="email"]', 'testuser@example.com'); // Remplir le champ 'email'
  await page.fill('input[name="password"]', 'securepassword'); // Remplir le champ 'password'

  // Soumettre le formulaire
  await page.click('button[type="submit"]'); // Cliquer sur le bouton 'submit'

  // Attendre une réponse ou une redirection
  await page.waitForNavigation();

  // Vérifier le succès de l'enregistrement (par exemple, une page de confirmation)
  const pageTitle = await page.title();
  console.log(`Page après soumission: ${pageTitle}`);

  // Fermer le navigateur
  await browser.close();
})();
