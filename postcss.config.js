const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [
                path.resolve('src'),
                path.resolve('node_modules'),
                path.resolve('node_modules/@manuel-bieh/ui/dist/es'),
            ],
        }),
        require('postcss-nested')(),
        require('postcss-custom-media')({
            importFrom: 'node_modules/@manuel-bieh/ui/dist/es/media.css',
        }),
        require('autoprefixer')({
            browsers: ['last 3 versions', 'ie >= 9', 'Edge >= 13'],
        }),
    ],
    sourceMap: true,
};
