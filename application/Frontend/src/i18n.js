import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enNavbar from './locales/en/navbar.json';
import esMXNavbar from './locales/es-MX/navbar.json';
import jaNavbar from './locales/ja/navbar.json';
import enApp from './locales/en/app.json';
import esMXApp from './locales/es-MX/app.json';
import jaApp from './locales/ja/app.json';

const resources = {
  en: {
    navbar: enNavbar,
    app: enApp,
  },
  'es-MX': {
    navbar: esMXNavbar,
    app: esMXApp,
  },
  ja: {
    navbar: jaNavbar,
    app: jaApp,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['navbar', 'app'],
    defaultNS: 'app',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
