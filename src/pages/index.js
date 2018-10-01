import React from 'react';
import { Grid, Row, Column } from '@manuel-bieh/ui/es';
import { Link, withIntl } from '../i18n';
import { PageContext } from '../components/PageContext';
import Layout from '../components/Layout';

const IndexPage = ({ t, ...props }) => {
    return (
        <PageContext.Provider value={{ ...props }}>
            <Layout>
                <Grid className="home">
                    <Row>
                        <Column>
                            <h1>{t('home.title')}</h1>
                        </Column>
                    </Row>
                    <Row>
                        <Column xs={12} lg={8}>
                            {t('home.text').map((text) => (
                                <p key={text} dangerouslySetInnerHTML={{ __html: text }} />
                            ))}
                        </Column>
                        <Column xs={12} lg={4}>
                            <img
                                src={require('../../assets/img/manuel-portrait-01.jpg')}
                                alt="Photo Manuel Bieh"
                            />
                        </Column>
                    </Row>
                </Grid>
            </Layout>
        </PageContext.Provider>
    );
};

export default withIntl(IndexPage);
