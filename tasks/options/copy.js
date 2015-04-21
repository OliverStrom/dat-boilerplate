module.exports = {
  dev: {
    files: [
      {expand: true, flatten: true, src: ['src/bower_components/modernizr/modernizr.js'], dest: 'demo/js/', filter: 'isFile'},
      {expand: true, flatten: true, src: ['src/bower_components/jquery/dist/*'], dest: 'demo/js/', filter: 'isFile'},
      {expand: true, flatten: true, src: ['src/bower_components/normalize.css/normalize.css'], dest: 'demo/css/', filter: 'isFile'},
      {expand: true, flatten: true, src: ['src/img/*'], dest: 'demo/img/', filter: 'isFile'},
      {expand: true, flatten: true, src: ['src/js/*'], dest: 'demo/js/', filter: 'isFile'},
      {expand: true, flatten: true, src: ['src/html/*'], dest: 'demo/', filter: 'isFile'}
    ]
  },

  watchJs: {
    files: [
      {expand: true, flatten: true, src: ['src/js/*'], dest: 'demo/js/', filter: 'isFile'}
    ]
  },
  
  watchHtml: {
    files: [
      {expand: true, flatten: true, src: ['src/html/*'], dest: 'demo/', filter: 'isFile'}
    ]
  },

  watchImg: {
    files: [
      {expand: true, flatten: true, src: ['src/img/*'], dest: 'demo/img', filter: 'isFile'}
    ]
  }
}