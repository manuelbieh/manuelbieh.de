// @flow
import React from 'react';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import Layout from '../components/Layout';

type PropsT = {
    t: (string) => string | string[],
};

const Profile = ({ t }: PropsT) => (
    <Layout>
        <h1>{t('profile.title')}</h1>
        {(t('profile.intro') || []).map((text) => (
            <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
    </Layout>
);

export default setContext(withIntl(Profile));
