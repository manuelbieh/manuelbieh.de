import React from 'react';
import { Column } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
import PageWrapper from '../components/PageWrapper';

const IndexPage = ({ t, ...context }) => (
    <PageWrapper title={t('home.title')} {...context}>
        <>
            <Column xs={12} lg={8}>
                {t('home.text').map((text) => (
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

export default withIntl(IndexPage);
