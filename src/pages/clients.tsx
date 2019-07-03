import React from 'react';
import { ClientLogos, Column, Grid } from '@manuel-bieh/ui/dist/es';
import { withIntl } from '../i18n';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: any;
};

const Clients = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('clients.title')} {...context}>
        <Grid>
            <Column xs={12}>
                {t('clients.intro').map((text: string) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
                <section className="client-logos">
                    <ClientLogos />
                </section>
                <p>
                    <small>{t('clients.note')}</small>
                </p>
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Clients);
