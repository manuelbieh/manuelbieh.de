// @flow
import React from 'react';
import { Column } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';
import techLogos from '../data/techLogos';

type PropsT = {
    t: (string) => string | string[],
};

const Technologies = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('technologies.title')} {...context}>
        <>
            <Column xs={12} lg={6}>
                {t('technologies.intro').map((text) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
            <Column xs={12} lg={6}>
                {techLogos.map((tech) => (
                    <img
                        key={tech.name}
                        src={require(`../../assets/img/tech/${tech}`)}
                        style={{ width: 96 }}
                    />
                ))}
            </Column>
        </>
    </PageWrapper>
);

export default setContext(withIntl(Technologies));
