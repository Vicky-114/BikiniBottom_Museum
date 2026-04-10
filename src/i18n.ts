import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';
import translationKO from './locales/ko/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';
import translationRU from './locales/ru/translation.json';
import translationZH_CN from './locales/zh-CN/translation.json';
import translationZH_TW from './locales/zh-TW/translation.json';

const resources = {
    en: { translation: translationEN },
    ja: { translation: translationJA },
    ko: { translation: translationKO },
    es: { translation: translationES },
    fr: { translation: translationFR },
    de: { translation: translationDE },
    ru: { translation: translationRU },
    'zh-CN': { translation: translationZH_CN },
    'zh-TW': { translation: translationZH_TW },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
