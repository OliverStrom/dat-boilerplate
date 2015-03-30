module.exports = {
	    bsFiles: {
	        src : [
	        	'demo/css/*.css',
	        	'demo/*.html',
	        	'demo/js/*.js'
	        ]
	    },
	    options: {
	    		watchTask: true,
	        server: {
	            baseDir: "./demo"
	        }
	    }
}