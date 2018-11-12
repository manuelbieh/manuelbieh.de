// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Column } from '@manuel-bieh/ui/es';
import Layout from './Layout';

type PropsT = {
    children: any,
    title: string,
};

const PageWrapper = ({ children, title }: PropsT) => (
    <Layout>
        {title && <Helmet title={title} />}
        <Grid>
            <Row>
                <Column>
                    <h1>{title}</h1>
                </Column>
            </Row>
            {children}
        </Grid>
    </Layout>
);

export default PageWrapper;
