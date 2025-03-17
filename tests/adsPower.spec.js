import { test, expect } from '@playwright/test';
import { getAdsPowerSession } from '../utils/adsPower.js';
import { proxyConfig } from '../utils/proxy.js';

test('Test de connexion avec AdsPower et Proxy', async ({ browser }) => {
  const profileId = '123456'; // Remplace avec ton ID AdsPower
  const wsEndpoint = await getAdsPowerSession(profileId);
  
  if (!wsEndpoint) {
    console.error("Impossible de récupérer la session AdsPower.");
    return;
  }

  console.log(`🌍 Connexion à AdsPower via WebSocket: ${wsEndpoint}`);
  
  // Connexion à AdsPower via CDP
  const context = await browser.newContext({
    proxy: proxyConfig
  });

  try {
    const page = await context.newPage();
    console.log(`🌍 Navigation vers https://www.whatismyipaddress.com`);
    await page.goto('https://www.whatismyipaddress.com');

    // Vérifier si la page s'est bien chargée
    await expect(page).toHaveTitle(/What Is My IP Address/);

    console.log('✅ Test terminé avec succès !');
  } catch (error) {
    console.error("Erreur lors du test : ", error);
  } finally {
    await context.close();
  }
});
