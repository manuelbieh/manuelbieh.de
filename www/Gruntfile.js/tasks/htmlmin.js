module.exports = function(grunt) {

    grunt.config('htmlmin', {
        options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
        },
        prod: {
            expand: true,
            cwd: '<%= config.dirs.dist %>/',
            src: [
                '**/*.html'
            ],
            dest: '<%= config.dirs.dist %>/'
        }
    });

};
