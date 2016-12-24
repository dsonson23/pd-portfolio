module.exports = function(grunt) {

// configure task(s)
grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
 uglify: {
  build: {
  	src: 'src/js/*.js'
  	dest: 'js/script.min.js'
  }
 }
});

// Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

// Register task(s).
   grunt.registerTask('default', ['uglify:build']);

};
