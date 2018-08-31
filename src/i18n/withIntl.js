import React, { Component } from 'react';
import i18next from 'i18next';
import { I18nextProvider, translate } from 'react-i18next';

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

export default (WrappedComponent) => {
    WrappedComponent = translate()(WrappedComponent);
    class withIntl extends Component {
        render() {
            const { locale } = this.props.pageContext || 'en';
            i18next.changeLanguage(locale);
            console.log('LOCALE:', locale);
            return (
                <I18nextProvider i18n={i18next}>
                    <WrappedComponent {...this.props} language={i18next.language} />
                </I18nextProvider>
            );
        }
    }
    return withIntl;
};
