import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withIntl } from '../i18n';
import { Grid, Row, Column } from '@manuel-bieh/ui/es';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ t, i18n, children }) => (
    <>
        <Helmet title={t('meta.title')} titleTemplate={t('meta.titleTemplate')}>
            <html lang={i18n.language} />
        </Helmet>
        <Header />
        <Grid centered>
            <Row>
                <Column>
                    <main>{children}</main>
                </Column>
            </Row>
        </Grid>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withIntl()(Layout);
