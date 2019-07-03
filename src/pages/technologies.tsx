import React from 'react';
import { Column, Grid, TechLogos } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type Props = {
    t: any;
};

const Technologies = ({ t, ...context }: Props) => (
    <PageWrapper title={t('technologies.title')} {...context}>
        <Grid>
            <Column xs={12} lg={6}>
                {t('technologies.intro').map((text: string) => (
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
