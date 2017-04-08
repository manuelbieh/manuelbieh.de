module.exports = function(grunt) {

    grunt.config('concurrent', {
        'dev': [
            'copy:dev',
            'assemble',
            'sass:dev'
        ],
    });

};
