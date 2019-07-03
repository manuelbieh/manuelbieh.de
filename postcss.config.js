const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [path.resolve('src'), path.resolve('node_modules')],
        }),
        require('postcss-nested')(),
        require('postcss-custom-media')({
            importFrom: 'node_modules/@manuel-bieh/ui/es/media.css',
        }),
        require('autoprefixer')(),
    ],
    sourceMap: true,
};
