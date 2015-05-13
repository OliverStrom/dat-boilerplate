module.exports = {
  options: {
    livereload: true
  },

  grunt: { 
    files: ['Gruntfile.js'] 
  },
    
  sass: {
    files: 'src/scss/*.scss',
    tasks: ['sass:dev']
  },
/*
  scripts: {
    files: 'src/js/*',
    tasks: ['browserify']
  }
*/
}