import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withIntl } from '../i18n';

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ t, children }) => (
    <>
        <Helmet title={t('meta.title')}>
            <html lang="en" />
        </Helmet>
        <Header />
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >
            {children}
        </div>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withIntl(Layout);
