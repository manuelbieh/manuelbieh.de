import React, { Component } from 'react';
import i18next from './config';
import { I18nextProvider, translate } from 'react-i18next';

export default (ns = 'translations') => (WrappedComponent) => {
    WrappedComponent = translate(ns)(WrappedComponent);
    class withIntl extends Component {
        render() {
            const { pageContext } = this.props;

            if (pageContext) {
                const { locale } = pageContext;
                if (locale && locale !== i18next.language) {
                    i18next.changeLanguage(locale);
                }
            }

            return (
                <I18nextProvider i18n={i18next}>
                    <WrappedComponent {...this.props} language={i18next.language} />
                </I18nextProvider>
            );
        }
    }
    return withIntl;
};
