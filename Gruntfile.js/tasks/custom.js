module.exports = function(grunt) {

    grunt.registerTask('dev', 'Quickly build site files for development.', () => {
        grunt.task.run(['clean:pre', 'copy:dev', 'assemble', 'sass:dev']);
    });

    grunt.registerTask('build', 'Builds everything for production.', () => {
        grunt.task.run([
            'clean:pre',
            // 'imagemin:prod',
            // 'copy:prod',
            // 'assemble',
            // 'sass:prod',
            'concurrent:prod',
            'cacheBust:prod',
            'compress'
        ]);
    });

    grunt.registerTask('serve', 'Starts a static webserver with livereload', (target) => {

        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive', 'watch']);
        }

        grunt.task.run(['dev', 'connect:livereload', 'watch']);

    });

};
