module.exports = function(grunt) {

    grunt.config('postcss', {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: 'last 3 versions'
                }),
                require('cssnano')()
            ]
        },
        prod: {
            src: '<%= config.dirs.dist %>/assets/css/*.css'
        },
        dev: {
            src: '<%= config.dirs.dist %>/assets/css/*.css'
        }
    });

};
