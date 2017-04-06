module.exports = function(grunt) {

    grunt.config('assemble', {
        options: {
            flatten: true,
            assets: '<%= config.dirs.dist %>/assets',
            helpers: [
                'helper-moment',
                '<%= config.dirs.src %>/helpers/*.js'
            ],
            layout: 'default.hbs',
            layoutdir: '<%= config.dirs.src %>/templates/layouts',
            partials: '<%= config.dirs.src %>/templates/partials/*.hbs',
            data: '<%= config.dirs.src %>/data/*.{json,yml}',
            year: (new Date()).getFullYear(),
            // plugins: [
            //     'grunt-assemble-permalinks'
            // ],
            // permalinks: {
            //     structure: ':file.html',
            //     replacements: [{
            //         pattern: ':file',
            //         replacement: function() {
            //             return this.file || this.basename;
            //         }
            //     }]
            // }
        },
        de: {
            options: {
                language: 'de',
                data: [
                    'node_modules/@manuel-bieh/cv/data/de/*.json',
                    '<%= config.dirs.src %>/data/generic/*.{json,yml}',
                    '<%= config.dirs.src %>/data/de/*.{json,yml}',
                ]
            },
            files: {
                '<%= config.dirs.dist %>/de/': [
                    '<%= config.dirs.src %>/pages/*.hbs'
                ]
            }
        },
        en: {
            options: {
                language: 'en',
                data: [
                    'node_modules/@manuel-bieh/cv/data/en/*.json',
                    '<%= config.dirs.src %>/data/generic/*.{json,yml}',
                    '<%= config.dirs.src %>/data/en/*.{json,yml}',
                ]
            },
            files: {
                '<%= config.dirs.dist %>/en/': [
                    '<%= config.dirs.src %>/pages/*.hbs'
                ]
            }
        }
    });

};
