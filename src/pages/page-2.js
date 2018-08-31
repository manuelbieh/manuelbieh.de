import React from 'react';
import { Link } from 'gatsby';
import withIntl from '../i18n/withIntl';
import { PageContext } from '../components/PageContext';
import Layout from '../components/Layout';

const SecondPage = (props) => (
    <PageContext.Provider value={{ ...props }}>
        <Layout>
            Test: {props.t('test')}
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    </PageContext.Provider>
);

export default withIntl(SecondPage);
