// @flow
import React from 'react';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import Layout from '../components/Layout';
import techLogos from '../data/techLogos';
import { SocialMediaIcons } from '@manuel-bieh/ui/es';

type PropsT = {
    t: (string) => string | string[],
};

const Technologies = ({ t }: PropsT) => (
    <Layout>
        <div className="technologies">
            <h1>{t('technologies.title')}</h1>
            <div className="row">
                <SocialMediaIcons />
                <div className="col col-xs-12 col-lg-6">
                    {t('technologies.intro').map((text) => (
                        <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                </div>
                <div className="col col-xs-12 col-lg-6">
                    {techLogos.map((tech) => (
                        <img
                            key={tech.name}
                            src={require(`../../assets/img/tech/${tech}`)}
                            style={{ width: 96 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </Layout>
);

export default setContext(withIntl(Technologies));
