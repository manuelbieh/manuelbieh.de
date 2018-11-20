import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        de: {
            translations: require('./locales/de/translations.json'),
            cv: {
                work: require('@manuel-bieh/cv/data/de/work.json'),
                education: require('@manuel-bieh/cv/data/de/education.json'),
                qualifications: require('@manuel-bieh/cv/data/de/qualifications.json'),
                skills: require('@manuel-bieh/cv/data/de/skills.json'),
            },
        },
        en: {
            translations: require('./locales/en/translations.json'),
            cv: {
                work: require('@manuel-bieh/cv/data/en/work.json'),
                education: require('@manuel-bieh/cv/data/en/education.json'),
                qualifications: require('@manuel-bieh/cv/data/en/qualifications.json'),
                skills: require('@manuel-bieh/cv/data/en/skills.json'),
            },
        },
    },
    // have a common namespace used around the full app
    ns: ['translations', 'cv'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    react: {
        wait: true,
    },
});

export default i18next;
