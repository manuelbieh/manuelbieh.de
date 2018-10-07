// @flow
import React from 'react';
import { Column } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (string) => string | string[],
};

const Profile = ({ t, ...props }: PropsT) => (
    <PageWrapper title={t('profile.title')} {...props}>
        <>
            <Column xs={12} lg={8}>
                {(t('profile.intro') || []).map((text) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
            <Column xs={12} lg={4}>
                <img
                    src={require('../../assets/img/manuel-portrait-01.jpg')}
                    alt="Photo Manuel Bieh"
                />
            </Column>
        </>
    </PageWrapper>
);

export default setContext(withIntl(Profile));
