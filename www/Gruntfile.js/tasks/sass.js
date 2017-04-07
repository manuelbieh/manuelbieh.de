module.exports = function(grunt) {

    grunt.config('sass', {
        options: {
            sourceMap: true,
            includePaths: ['node_modules']
        },
        dev: {
            options: {
                outputStyle: 'extended'
            },
            files: {
                '<%= config.dirs.dist %>/assets/css/main.css': '<%= config.dirs.src %>/scss/main.scss'
            },
        },
        prod: {
            options: {
                outputStyle: 'compressed',
            },
            files: {
                '<%= config.dirs.dist %>/assets/css/main.css': '<%= config.dirs.src %>/scss/main.scss'
            },
        }
    });

};
