module.exports = function(grunt) {

    grunt.config('concurrent', {
        'prod': [
            'imagemin',
            'copy:prod',
            'assemble',
            'sass:prod',
        ],
    });

};
