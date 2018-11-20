import React from 'react';
import { Column, Row } from '@manuel-bieh/ui/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage = ({ t, ...context }) => (
    <PageWrapper title={t('404.title')} {...context}>
        <Row>
            <Column>
                <p>{t('404.text.0')}</p>
            </Column>
        </Row>
    </PageWrapper>
);

export default withIntl()(NotFoundPage);
