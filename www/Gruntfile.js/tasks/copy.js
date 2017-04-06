module.exports = function(grunt) {

    grunt.config('copy', {
        dev: {
            files: [
                // // includes files within path
                // {
                //     expand: true,
                //     src: ['<%= config.dirs.src %>/assets/**'],
                //     dest: '<%= config.dirs.dist %>/assets/',
                //     filter: 'isFile'
                // },

                // includes files within path and its sub-directories
                {
                    expand: true,
                    cwd: '<%= config.dirs.src %>/assets/',
                    src: [
                        '**'
                    ],
                    dest: '<%= config.dirs.dist %>/assets/'
                },

                // // makes all src relative to cwd
                // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
                //
                // // flattens results to a single level
                // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
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
