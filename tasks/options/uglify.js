module.exports = {
  options: {
    mangle: true
  },
  prod: {
    files: {
      'prod/js/app.js': ['prod/js/app.js'],
      'prod/js/modernizr.js': ['prod/js/modernizr.js']
    }
  }
}