// const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

    grunt.config('imagemin', {
        options: {
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }],
            // use: [mozjpeg()]
        },
        prod: {
            expand: true,
            cwd: '<%= config.dirs.src %>/assets/img/',
            src: [
                '**'
            ],
            dest: '<%= config.dirs.dist %>/assets/img/'
        }
    });

};
