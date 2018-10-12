// @flow
import React from 'react';
import { withIntl, Link } from '../i18n';
import { Grid, Row, Column, Footer, SocialMediaIcons } from '@manuel-bieh/ui/es';

type PropsT = {
    t: (string) => string,
};

const PageFooter = ({ t }: PropsT) => (
    <Footer>
        <Grid centered>
            <Row>
                <Column xs={12} textAlign="center">
                    <p>
                        © 2001-
                        <span id="footer--year">{new Date().getFullYear()}</span> Manuel Bieh –{' '}
                        <Link to="/legal.html">{t('footer.legal')}</Link> |{' '}
                        <Link to="/contact.html">{t('footer.contact')}</Link>
                    </p>
                    <p>
                        <SocialMediaIcons />
                    </p>
                </Column>
            </Row>
        </Grid>
    </Footer>
);

export default withIntl(PageFooter);
