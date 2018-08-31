import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        de: {
            translations: require('./locales/de/translations.json'),
        },
        en: {
            translations: require('./locales/en/translations.json'),
        },
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    react: {
        wait: true,
    },
});

export default i18next;
