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
                '<%= config.dirs.dist %>/assets/css/main.css': '<%= config.dirs.src %>/scss/main.scss',
                '<%= config.dirs.dist %>/assets/css/portfolio.css': '<%= config.dirs.src %>/scss/portfolio.scss'
            },
        },
        prod: {
            options: {
                outputStyle: 'compressed',
            },
            files: {
                '<%= config.dirs.dist %>/assets/css/main.css': '<%= config.dirs.src %>/scss/main.scss',
                '<%= config.dirs.dist %>/assets/css/portfolio.css': '<%= config.dirs.src %>/scss/portfolio.scss'
            },
        }
    });

};
