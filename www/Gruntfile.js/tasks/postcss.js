module.exports = function(grunt) {

    grunt.config('postcss', {
        options: {
            map: true, // inline sourcemaps
            processors: [
                require('autoprefixer')({
                    browsers: 'last 3 versions'
                }), // add vendor prefixes
                require('cssnano')() // minify the result
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
