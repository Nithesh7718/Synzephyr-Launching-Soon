const BING_ENDPOINT = 'https://www.bing.com/indexnow';
const YANDEX_ENDPOINT = 'https://yandex.com/indexnow';
const SEZNAM_ENDPOINT = 'https://search.seznam.cz/indexnow';
const NAVER_ENDPOINT = 'https://searchadvisor.naver.com/indexnow';

const payload = {
  host: 'synzephyrtechnologies.web.app',
  key: '9e3a6c11f4d84c62b5d7e82b7c6c4493',
  keyLocation: 'https://synzephyrtechnologies.web.app/9e3a6c11f4d84c62b5d7e82b7c6c4493.txt',
  urlList: [
    'https://synzephyrtechnologies.web.app/',
    'https://synzephyrtechnologies.web.app/services',
    'https://synzephyrtechnologies.web.app/seo-services-pollachi',
    'https://synzephyrtechnologies.web.app/seo-services-coimbatore',
    'https://synzephyrtechnologies.web.app/digital-marketing-pollachi',
    'https://synzephyrtechnologies.web.app/digital-marketing-coimbatore',
    'https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi',
    'https://synzephyrtechnologies.web.app/graphic-design-services-pollachi',
    'https://synzephyrtechnologies.web.app/about',
    'https://synzephyrtechnologies.web.app/portfolio',
    'https://synzephyrtechnologies.web.app/blog',
    'https://synzephyrtechnologies.web.app/contact',
    'https://synzephyrtechnologies.web.app/connect',
    'https://synzephyrtechnologies.web.app/privacy-policy',
    'https://synzephyrtechnologies.web.app/terms'
  ]
};

async function notify(engineName, endpoint) {
  console.log(`Notifying ${engineName} (${endpoint})...`);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log(`Successfully notified ${engineName} (Status: ${response.status})`);
    } else {
      console.error(`Failed to notify ${engineName} (Status: ${response.status})`);
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error(`Error notifying ${engineName}:`, error.message);
  }
}

async function run() {
  await notify('Bing', BING_ENDPOINT);
  await notify('Yandex', YANDEX_ENDPOINT);
  await notify('Seznam', SEZNAM_ENDPOINT);
  await notify('Naver', NAVER_ENDPOINT);
}

run();
