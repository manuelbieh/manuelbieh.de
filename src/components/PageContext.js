import React from 'react';

export const PageContext = React.createContext({
    t: () => null,
    language: 'en',
    pageContext: {},
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

export default PageContext;
