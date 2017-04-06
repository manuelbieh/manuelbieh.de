module.exports = function(grunt) {

    grunt.config('copy', {
        dev: {
            files: [
                {
                    expand: true,
                    cwd: '<%= config.dirs.src %>/assets/',
                    src: [
                        '**'
                    ],
                    dest: '<%= config.dirs.dist %>/assets/'
                },
            ],
        },
        prod: {
            expand: true,
            cwd: '<%= config.dirs.src %>/assets/',
            src: [
                '**'
            ],
            dest: '<%= config.dirs.dist %>/assets/'
        }
    });

};
