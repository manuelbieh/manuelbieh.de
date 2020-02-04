import React from 'react';
import { Grid, Column, Footer, SocialMediaIcons } from '@manuel-bieh/ui/dist/es';
import { withIntl, Link } from '../i18n';

type Props = {
    t: (key: string) => string;
};

const PageFooter = ({ t }: Props) => (
    <Footer>
        <Grid centered>
            <Column xs={12} textAlign="center">
                <p>
                    © 2001-
                    <span>{new Date().getFullYear()}</span> Manuel Bieh –{' '}
                    <Link to="/legal">{t('footer.legal')}</Link> |{' '}
                    <Link to="/contact">{t('footer.contact')}</Link>
                </p>
                <SocialMediaIcons />
            </Column>
        </Grid>
    </Footer>
);

export default withIntl()(PageFooter);
