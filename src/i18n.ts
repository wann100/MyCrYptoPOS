import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import translation from './locales/en/translation.json';
export const resources = {
  en: {
    translation,

  },
} as const;
const userLanguage = window.navigator.language;

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || userLanguage || 'en',
    fallbackLng: 'en',

    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    resources
  });

export default i18n;



