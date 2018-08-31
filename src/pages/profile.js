import React from 'react';
import { Link, withIntl } from '../i18n';
import { PageContext } from '../components/PageContext';
import Layout from '../components/Layout';

const Profile = (props) => {
    return (
        <PageContext.Provider value={props}>
            <Layout>Profile</Layout>
        </PageContext.Provider>
    );
};

export default withIntl(Profile);
