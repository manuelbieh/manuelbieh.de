module.exports = function(grunt) {

    const fileTypes = [
        'css',
        'js',
        'jpg',
        'png',
        'svg',
        'woff',
        'eot',
        'ttf'
    ];

    const taskConfig = {};
    const fileConfig = {};

    const fileConfigDefaults = {
        expand: true,
        cwd: '<%= config.dirs.dist %>/',
        dest: '<%= config.dirs.dist %>/',
    };

    fileTypes.forEach((type) => {

        fileConfig[type] = Object.assign({}, fileConfigDefaults, {
            src: `**/*.${type}`,
            extDot: 'last',
            ext: `.${type}.gz`
        });

        taskConfig[type] = {
            options: {
                mode: 'gzip'
            },
            files: [fileConfig[type]]
        };

    });

    grunt.config('compress', taskConfig);

    // const fileConfig = {
    //     svg: [Object.assign({}, fileConfigDefaults, {
    //         src: ['**/*.svg'],
    //         ext: '.svg.gz'
    //     })],
    //     js: [Object.assign({}, fileConfigDefaults, {
    //         src: ['**/*.js'],
    //         ext: '.js.gz'
    //     })],
    //     css: [Object.assign({}, fileConfigDefaults, {
    //         src: ['**/*.css'],
    //         ext: '.css.gz'
    //     })],
    // };

    // grunt.config('compress', Object.assign({}, taskConfig, {
    //     gzip: {
    //         options: {
    //             mode: 'gzip'
    //         },
    //         files: (function(fileConfig) {
    //             const all = [];
    //             Array.prototype.forEach.call(Object.keys(fileConfig), (key) => {
    //                 Array.prototype.forEach.call(fileConfig[key], (data) => {
    //                     all.push(data);
    //                 });
    //             });
    //             return all;
    //         }(fileConfig))
    //     }
    // }));

};
