module.exports = {
	options: {
		livereload: true
	},
	
	grunt: { 
		files: ['Gruntfile.js'] 
	},
  	
  sass: {
    files: 'src/scss/*.scss',
    tasks: ['sass:dev'],
    options: { livereload: true }
  },

  html: {
    files: ['src/html/*.html'],
    tasks: ['copy:watchHtml'],
    options: { livereload: true }
  },

  scripts: {
    files: 'src/js/*.js',
    tasks: ['copy:watchJs'],
    options: { livereload: true }
  }
}