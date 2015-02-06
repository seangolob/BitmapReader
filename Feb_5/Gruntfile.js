'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: true
        },
        src: ['Gruntfile.js', 'index.js', 'test/**/*.js', 'lib/**/*.js']
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
};
