module.exports = {
  options: {
    includePaths: ['src/bower_components/bourbon/app/assets/stylesheets']
  },
  dev: {
    options: {
      outputStyle: 'uncompressed'
    },
   	files: {
      'demo/css/app.css': 'src/scss/app.scss'
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