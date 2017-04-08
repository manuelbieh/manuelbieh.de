module.exports = function(grunt) {

    grunt.config('concurrent', {
        'prod': [
            'imagemin:prod',
            'copy:prod',
            'assemble',
            'sass:prod',
        ],
    });

};
