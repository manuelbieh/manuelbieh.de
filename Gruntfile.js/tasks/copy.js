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
            files: [
                {
                    expand: true,
                    cwd: '<%= config.dirs.src %>/assets/',
                    src: [
                        '**',
                        '!**/*.{svg,jpg,png,gif}' // processed by imagemin
                    ],
                    dest: '<%= config.dirs.dist %>/assets/'
                },
                {
                    expand: true,
                    cwd: '<%= config.dirs.src %>',
                    dot: true,
                    src: '*',
                    dest: '<%= config.dirs.dist %>/',
                    filter: 'isFile'
                },
            ]
        }
    });

};
