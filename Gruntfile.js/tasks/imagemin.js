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
        }
    });

};
