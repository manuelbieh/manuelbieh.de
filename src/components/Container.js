// @flow
import * as React from 'react';
import css from './Container.module.css';

type PropsT = {
    children: any,
};

const Container = ({ children }: PropsT) => {
    return <div className={css.wrapper}>{children}</div>;
};

export default Container;
