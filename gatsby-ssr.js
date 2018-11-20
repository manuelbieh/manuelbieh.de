// @flow
import React from 'react';
import { PageContext } from './src/components/PageContext';

type Props = {
    element: React.Element,
    props: any,
};

export const wrapPageElement = ({ element, props }: Props) => (
    <PageContext.Provider value={{ ...props }}>{element}</PageContext.Provider>
);
