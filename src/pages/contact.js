// @flow
import React from 'react';
import { Column, Row } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type PropsT = {
    t: (string) => string | string[],
};

const Contact = ({ t, ...props }: PropsT) => (
    <PageWrapper title={t('contact.title')} {...props}>
        <Row>
            <Column xs={12}>
                {t('contact.text').map((text) => (
                    <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </Column>
        </Row>
    </PageWrapper>
);

export default withIntl()(Contact);
