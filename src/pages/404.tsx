import React from 'react';
import { Column, Grid } from '@manuel-bieh/ui/dist/es';
import { withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';

type Props = {
    t: (key: string) => string;
};

const NotFoundPage = ({ t, ...context }: Props) => (
    <PageWrapper title={t('404.title')} {...context}>
        <Grid>
            <Column>
                <p>{t('404.text.0')}</p>
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(NotFoundPage);
