module.exports = function(grunt) {
  // Utility to load the different option files
  // based on their names
  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }
  // Initial config
  var config = {
    pkg: grunt.file.readJSON('package.json')
  }

  // Load tasks from the tasks folder
  grunt.loadTasks('tasks');

  // Load all the tasks options in tasks/options base on the name:
  // watch.js => watch{}
  grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['copy:dev', 'sass:dev']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('prod', ['sass:prod', 'concat:prod', 'copy:prod', 'uglify:prod']); // don't use this
  grunt.registerTask('watcher', ['build', 'watch']);
};