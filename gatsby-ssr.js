import React from 'react';
import { PageContext } from './src/components/PageContext';

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element, props }) => (
    <PageContext.Provider value={{ ...props }}>{element}</PageContext.Provider>
);
