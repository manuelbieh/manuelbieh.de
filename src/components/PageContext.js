// This file is used by Gatsby and must therefor (?) be in plain JS
import React from 'react';
import '@manuel-bieh/ui/es/index.module.css';

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export const PageContext = React.createContext({
    t: () => null,
    language: 'en',
    pageContext: {
        originalPath: '',
    },
});

export const withContext = (WrappedComponent) => {
    return class PageContextWrapper extends React.Component {
        render() {
            return (
                <PageContext.Consumer>
                    {(values) => <WrappedComponent {...this.props} {...values} />}
                </PageContext.Consumer>
            );
        }
    };
};

export const setContext = (WrappedComponent) => {
    return class extends React.Component {
        static displayName = `${getDisplayName(WrappedComponent)}Context`;
        render() {
            return (
                <PageContext.Provider value={this.props}>
                    <WrappedComponent {...this.props} />
                </PageContext.Provider>
            );
        }
    };
};

export default PageContext;
