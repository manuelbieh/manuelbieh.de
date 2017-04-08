module.exports = function(grunt) {

    grunt.config('cacheBust', {
        options: {
            length: 6,
            // jsonOutput: true,
            baseDir: '<%= config.dirs.dist %>/',
            assets: [
                'assets/**'
            ]
        },
        prod: {
            // src: [
            //     '<%= config.dirs.dist %>/{de,en}/**/*.html'
            // ]
            files: [{
                expand: true,
                cwd: '<%= config.dirs.dist %>/',
                src: [
                    '**/*.html'
                ]
            }]
        }
    });

};
