// @flow
import React from 'react';
import { Column } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import clientLogos from '../data/clientLogos';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (string) => string | string[],
};

const Clients = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('clients.title')} {...context}>
        <Column xs={12}>
            {t('clients.intro').map((text) => (
                <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
            <section className="client-logos">
                {clientLogos.map((client) => (
                    <img
                        key={client.name}
                        src={require(`../../assets/img/clients/${client.image}`)}
                    />
                ))}
            </section>
            <p>
                <small>{t('clients.note')}</small>
            </p>
        </Column>
    </PageWrapper>
);

export default setContext(withIntl(Clients));
