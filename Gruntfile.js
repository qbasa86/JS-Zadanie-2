module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'css/style.sass'
        }
      }
    },

  jshint: {
      all: ['js/*.js']
    }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint']);
};