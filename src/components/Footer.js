import React from 'react';
import { withIntl, Link } from '../i18n';

const social = {
    github: {
        url: 'https://www.github.com/manuelbieh',
        img: require('../../assets/img/socialmedia/github.svg'),
    },
    twitter: {
        url: 'https://www.twitter.com/manuelbieh',
        img: require('../../assets/img/socialmedia/twitter.svg'),
    },
    xing: {
        url: 'https://www.xing.com/profile/Manuel_Bieh',
        img: require('../../assets/img/socialmedia/xing.svg'),
    },
    linkedin: {
        url: 'https://www.linkedin.com/in/manuelbieh/',
        img: require('../../assets/img/socialmedia/linkedin.svg'),
    },
    instagram: {
        url: 'https://www.instagram.com/manuelbieh/',
        img: require('../../assets/img/socialmedia/instagram.svg'),
    },
    quora: {
        url: 'https://www.quora.com/profile/Manuel-Bieh',
        img: require('../../assets/img/socialmedia/quora.svg'),
    },
    angel: {
        url: 'https://angel.co/manuelbieh',
        img: require('../../assets/img/socialmedia/angellist.svg'),
    },
};

const Footer = ({ t }) => (
    <footer>
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col col-xs-12 center">
                        <p>
                            © 2001-
                            <span id="footer--year">{new Date().getFullYear()}</span> Manuel Bieh –
                            <Link to="/legal.html">{t('footer.legal')}</Link> |{' '}
                            <Link to="/contact.html">{t('footer.contact')}</Link>
                        </p>
                        <p>
                            {Object.values(social).map((site) => (
                                <a key={site.url} href={site.url}>
                                    <img src={site.img} className="social-media-icon" />
                                </a>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default withIntl(Footer);
