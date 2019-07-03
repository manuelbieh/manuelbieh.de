import React from 'react';
import { Column, Grid } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: any;
};

const Contact = ({ t, ...props }: PropsT) => (
    <PageWrapper title={t('contact.title')} {...props}>
        <Grid>
            <Column xs={12}>
                {t('contact.text').map((text: string) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Contact);
