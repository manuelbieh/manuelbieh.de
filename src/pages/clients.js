// @flow
import React from 'react';
import { ClientLogos, Column, Row } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (string) => string | string[],
};

const Clients = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('clients.title')} {...context}>
        <Row>
            <Column xs={12}>
                {t('clients.intro').map((text) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
                <section className="client-logos">
                    <ClientLogos />
                </section>
                <p>
                    <small>{t('clients.note')}</small>
                </p>
            </Column>
        </Row>
    </PageWrapper>
);

export default setContext(withIntl()(Clients));
