module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        jest: true,
        mocha: true,
    },
    extends: [
        'wiremore',
        'wiremore/react',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
        'plugin:flowtype/recommended',
    ],
    plugins: ['security', 'prettier', 'flowtype'],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    rules: {
        'import/named': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'import/namespace': [2, { allowComputed: true }],
        'import/prefer-default-export': 0,
        'prettier/prettier': 'error',
        'no-alert': 1,
        'react/jsx-no-bind': 1,
    },
};
