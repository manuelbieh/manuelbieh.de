import React from 'react';
import { Column, Grid } from '@manuel-bieh/ui/es';
import { Trans } from 'react-i18next';
import { Link, withIntl } from '../i18n';
import PageWrapper from '../components/PageWrapper';

const IndexPage = ({ t, ...context }) => (
    <PageWrapper title={t('home.title')} {...context}>
        <Grid>
            <Column xs={12} lg={8}>
                <p dangerouslySetInnerHTML={{ __html: t('home.text.0') }} />
                <p>
                    <Trans i18nKey="home.text.1">
                        0<Link to="/clients">1</Link>2<Link to="/technologies">3</Link>4
                        <Link to="/publications">5</Link>.
                    </Trans>
                </p>
                <p>{t('home.text.2')}</p>
                <ul>
                    {t('home.services').map((item) => (
                        <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
                <p>{t('home.text.3')}</p>
            </Column>
            <Column xs={12} lg={4}>
                <img
                    src={require('../../assets/img/manuel-portrait-01.jpg')}
                    alt="Photo Manuel Bieh"
                />
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(IndexPage);
