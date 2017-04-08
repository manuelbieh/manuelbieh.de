'use strict';

const path = require('path');

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON(path.join(__dirname, 'config.json'))
    });

    grunt.loadTasks(path.join(__dirname, 'tasks'));

    grunt.registerTask('default', ['assemble']);

};
