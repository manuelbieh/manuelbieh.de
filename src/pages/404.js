import React from 'react';
import { withIntl } from '../i18n';
import { PageContext } from '../components/PageContext';
import Layout from '../components/Layout';

const NotFoundPage = (props) => (
    <PageContext.Provider value={props}>
        <Layout>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    </PageContext.Provider>
);

export default withIntl()(NotFoundPage);
