module.exports = function(grunt) {

    grunt.config('watch', {

        html: {

            options: {
                livereload: '<%= connect.options.livereload %>'
            },

            files: [
                '<%= config.dirs.src %>/**/*.{html,hbs,json,yml,md}',
            ],

            tasks: [
                'assemble',
            ]

        },

        scss: {

            options: {
                livereload: '<%= connect.options.livereload %>'
            },

            files: [
                '<%= config.dirs.src %>/**/*.{scss,css}',
                'node_modules/@manuel-bieh/layout/scss/**/*.scss'
            ],

            tasks: [
                'sass:dev',
            ]

        },

        assets: {

            options: {
                livereload: '<%= connect.options.livereload %>'
            },

            files: [
                '<%= config.dirs.src %>/assets/**',
            ],

            tasks: [
                'newer:copy:dev',
            ]

        },

        // imagemin: {
        //
        //     options: {
        //         //livereload: true,
        //         livereload: '<%= connect.options.livereload %>'
        //     },
        //
        //     files: [
        //         '<%= config.dirs.src %>/img/**/*'
        //     ],
        //
        //     tasks: [
        //         'newer:imagemin'
        //     ]
        //
        // },

        livereload: {

            options: {
                livereload: '<%= connect.options.livereload %>'
            },

            files: [
                '<%= config.dirs.src %>/{,*/}*.html',
                '<%= config.dirs.src %>/{,*/}*.{css,scss,sass,less,styl}',
                '<%= config.dirs.src %>/{,*/}*.js',
                '.tmp/styles/{,*/}*.css',
                '<%= config.dirs.src %>/img/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
            ]

        }

    });

};
