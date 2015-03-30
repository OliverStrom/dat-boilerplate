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

  html: {
    files: ['src/html/*.html'],
    tasks: ['copy:watchHtml']
  },

  img: {
    files: ['src/img/*'],
    tasks: ['copy:watchImg']
  },

  scripts: {
    files: 'src/js/*.js',
    tasks: ['copy:watchJs']
  }

}