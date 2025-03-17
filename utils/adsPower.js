import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ADSP_API_URL = process.env.ADSP_API_URL;

export async function getAdsPowerSession(profileId) {
  try {
    const response = await axios.post(`${ADSP_API_URL}/api/v1/browser/start`, { id: profileId });
    if (response.data.code === 0) {
      console.log(`✅ Session AdsPower démarrée: ${response.data.data.ws.puppeteer}`);
      return response.data.data.ws.puppeteer; 
    } else {
      console.error('❌ Erreur lors du démarrage de la session:', response.data.msg);
      return null;
    }
  } catch (error) {
    console.error('❌ Erreur API AdsPower:', error.message);
    return null;
  }
}
