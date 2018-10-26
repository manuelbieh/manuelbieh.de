module.exports = {
    plugins: [
        // require('postcss-import')({
        //     path: [paths.srcShared],
        // }),
        require('postcss-nested')(),
        require('postcss-custom-media')({
            importFrom: 'node_modules/@manuel-bieh/ui/es/media.css',
        }),
        // require('postcss-custom-properties')(),
        // require('postcss-flexbugs-fixes')(),
        // require('autoprefixer')({
        //     browsers: ['last 3 versions', 'ie >= 9', 'Edge <= 15'],
        // }),
        // require('postcss-custom-properties')(),
        // require('postcss-assets')({
        //     basePath: './assets',
        // }),
        // require('postcss-normalize')(),
    ],
    sourceMap: true,
};
