// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Column } from '@manuel-bieh/ui/es';
import { PageContext } from '../components/PageContext';
import Layout from './Layout';

type PropsT = {
    children: any,
    subtitle?: string,
    title: string,
};

const PageWrapper = ({ children, subtitle, title, ...props }: PropsT) => {
    return (
        <PageContext.Provider value={{ ...props }}>
            <Layout>
                {title && <Helmet title={title} />}
                <Grid>
                    <Row>
                        <Column>
                            <h1>{title}</h1>
                            {subtitle && <h2>Buch</h2>}
                        </Column>
                    </Row>
                    <Row>{children}</Row>
                </Grid>
            </Layout>
        </PageContext.Provider>
    );
};

export default PageWrapper;
