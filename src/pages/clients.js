// @flow
import React from 'react';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import Layout from '../components/Layout';
import clientLogos from '../data/clientLogos';

type PropsT = {
    t: (string) => string | string[],
};

const Clients = ({ t }: PropsT) => (
    <Layout>
        <div className="clients">
            <h1>{t('clients.title')}</h1>
            <div className="row">
                <div className="col col-xs-12">
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
                </div>
            </div>
        </div>
    </Layout>
);

export default setContext(withIntl(Clients));
