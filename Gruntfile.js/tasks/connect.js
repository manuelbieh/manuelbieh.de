module.exports = function(grunt) {

    grunt.config('connect', {

        options: {
            port: 9191,
            livereload: 35731,
            useAvailablePort: true,
            hostname: '*' // use 0.0.0.0 to make it available to public. Note: 0.0.0.0 might be fucked up on windows machines.
        },
        // rules: [
        //     {
        //         // from: '/(.*)',
        //         from: '^/[^(de|en)]/(.*)',
        //         to: '/de/$1'
        //     }
        // ],
        livereload: {

            options: {

                open: 'http://localhost:9191/',
                base: [
                    '.tmp',
                    '<%= config.dirs.dist %>/'
                ]
            },

        },

        dist: {
            options: {
                open: true,
                base: '<%= config.dirs.dist %>/',
                livereload: false,
                // middleware: '<%= connect.livereload.options.middleware %>'
            },
        }

    });

    //grunt.loadNpmTasks('grunt-contrib-connect');

};
