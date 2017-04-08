module.exports = function(grunt) {

    grunt.config('filerev', {
        options: {
            algorithm: 'md5',
            length: 6
        },
        prod: {
            src: [
                '<%= config.dirs.dist %>/assets/img/**/*.{png,svg,jpg,jpeg,gif}',
                '<%= config.dirs.dist %>/assets/css/**/*.{css,map}',
                '<%= config.dirs.dist %>/assets/fonts/*.*'
            ]
        }
    });

};
