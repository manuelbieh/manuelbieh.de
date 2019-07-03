// @flow
import * as React from 'react';
import { Grid, Column } from '@manuel-bieh/ui/es';
import { Link, withIntl } from '../../i18n';
import css from './publications.module.css';

type Props = {
    image: string;
    title: string;
    description: string;
    meta?: string;
    url?: string;
};

const Publication = ({ image, title, description, meta, url }: Props) => {
    return (
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={image} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>{title}</h3>
                <section>{description}</section>
                {meta && (
                    <p>
                        <strong>{meta}</strong>
                    </p>
                )}
                {url && (
                    <p>
                        <Link to={url}>Weiterlesen</Link>
                    </p>
                )}
            </Column>
        </Grid>
    );
};

export default withIntl()(Publication);
