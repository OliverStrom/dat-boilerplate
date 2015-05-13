module.exports = {
  options: {
    includePaths: [
      'src/bower_components/bourbon/app/assets/stylesheets',
      'src/bower_components/foundation/scss/foundation'
    ]
  },
  dev: {
    options: {
      outputStyle: 'uncompressed'
    },
   	files: {
      'src/css/app.css': 'src/scss/app.scss'
    }        
  },
  prod: {
    options: {
      outputStyle: 'compressed'
    },
    files: {
      'prod/css/app.css': 'src/scss/app.scss'
    }        
  }
}