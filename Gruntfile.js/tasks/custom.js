module.exports = function(grunt) {

    grunt.registerTask('dev', 'Quickly build site files for development.', () => {
        grunt.task.run(['clean:pre', 'copy:dev', 'assemble', 'sass:dev']);
        // grunt.task.run(['clean:pre', 'concurrent:dev']);
    });

    grunt.registerTask('serve', 'Starts a static webserver with livereload', (target) => {

        grunt.task.run(['dev', 'connect:livereload', 'watch']);

        if (target === 'dist') {
            // return grunt.task.run(['build', 'connect:dist:keepalive', 'watch']);
        }

        // grunt.task.run(['dev', 'configureRewriteRules', 'connect:livereload', 'watch']);

    });

    grunt.registerTask('build', 'Builds everything for production', () => {
        grunt.task.run([
            'clean:pre',
            'imagemin:prod',
            'copy:prod',
            'assemble',
            'sass:prod',
            'cacheBust:prod',
            'compress'
        ]);
    });

};
