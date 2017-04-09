// const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

    grunt.config('imagemin', {
        options: {
            optimizationLevel: 4,
            svgoPlugins: [{
                removeViewBox: false
            }],
        },
        prod: {
            expand: true,
            cwd: '<%= config.dirs.src %>/assets/img/',
            src: [
                '**'
            ],
            dest: '<%= config.dirs.dist %>/assets/img/'
        },
        // allbutjpg: {
        //     expand: true,
        //     cwd: '<%= config.dirs.src %>/assets/img/',
        //     src: [
        //         '**',
        //         '!**/*.jpg'
        //     ],
        //     dest: '<%= config.dirs.dist %>/assets/img/'
        // },
        // jpg: {
        //     options: {
        //         optimizationLevel: 7,
        //         use: [
        //             mozjpeg({
        //                 quality: 75
        //             })
        //         ]
        //     },
        //     files: [{
        //         expand: true,
        //         cwd: '<%= config.dirs.src %>/assets/img/',
        //         src: [
        //             '**/*.jpg'
        //         ],
        //         dest: '<%= config.dirs.dist %>/assets/img/'
        //     }]
        // }
    });

};
