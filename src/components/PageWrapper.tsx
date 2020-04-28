import { Grid, Column } from '@manuel-bieh/ui/dist/es';
import * as React from 'react';
import Helmet from 'react-helmet';
import { setContext } from '../components/PageContext';
import Layout from './Layout';

type PropsT = {
    children: any;
    title: string;
};

const PageWrapper = ({ children, title }: PropsT) => (
    <Layout>
        {title && <Helmet title={title} />}
        <Grid>
            <Column>
                <h1>{title}</h1>
            </Column>
        </Grid>
        {children}
    </Layout>
);

export default setContext(PageWrapper);
