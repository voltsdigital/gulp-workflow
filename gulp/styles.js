var gulpCSS = (function() {

return {

	/**
	 * Init module
	 */
	init : function() {

		var self = gulpCSS;

		exports.compileSASS = self.compileSASS;
		exports.minifyCSS   = self.minifyCSS;

	}, // init





	/**
	 * Modules
	 */
	m : {

		gulp      : require( 'gulp' ),
		compass   : require( 'gulp-compass' ),
		assets    : require( './assets-src' ),
		minifyCSS : require( 'gulp-minify-css' )

	}, // m





	/**
	 * Compile SASS files
	 */
	compileSASS : function() {

		var self = gulpCSS,
			m = self.m,
			stream;


		stream = m.gulp.src( m.assets().css.src + '/**/*' )
			.pipe( m.compass({
				css    : m.assets().css.build,
				sass   : m.assets().css.src,
				images : m.assets().img.src,
				style : 'expanded'
			}) )
			.pipe( m.gulp.dest( m.assets().css.build ) );

		return stream;

	}, // compileSASS





	/**
	 * Minify Styles
	 */
	minifyCSS : function() {

		var self = gulpCSS,
			m = self.m,
			stream;

		stream = m.gulp.src( m.assets().css.build + '/*.css' )
			.pipe( m.minifyCSS() )
			.pipe( m.gulp.dest( m.assets().css.build ) );

		return stream;

	} // minifyCSS

}; // return

})(); // gulpCSS


gulpCSS.init();