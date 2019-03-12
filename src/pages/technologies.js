// @flow
import React from 'react';
import { Column, Grid, TechLogos } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (string) => string | string[],
};

const Technologies = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('technologies.title')} {...context}>
        <Grid>
            <Column xs={12} lg={6}>
                {t('technologies.intro').map((text) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
            <Column xs={12} lg={6}>
                <TechLogos />
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Technologies);
