import React from 'react';
import { Link, withIntl } from '../i18n';
import { PageContext } from '../components/PageContext';
import Layout from '../components/Layout';

const IndexPage = (props) => {
    return (
        <PageContext.Provider value={{ ...props }}>
            <Layout>
                {props.t('test')}
                <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(props, null, 2) }} />
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
            </Layout>
        </PageContext.Provider>
    );
};

export default withIntl(IndexPage);
