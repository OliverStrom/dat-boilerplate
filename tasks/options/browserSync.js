module.exports = {
	bsFiles: {
	    src : [
	    	'src/css/*.css',
	    	'src/*.html',
	    	'src/js/*.js'
	    ]
	},
	options: {
			watchTask: true,
	    server: {
	        baseDir: "./src"
	    }
	}
}