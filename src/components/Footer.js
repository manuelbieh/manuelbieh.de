// @flow
import React from 'react';
import { withIntl, Link } from '../i18n';
import { Grid, Column, Footer, SocialMediaIcons } from '@manuel-bieh/ui/es';

type PropsT = {
    t: (string) => string,
};

const PageFooter = ({ t }: PropsT) => (
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
