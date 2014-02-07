var gulpWatch = (function() {

return {

	/**
	 * Init module
	 */
	init : function() {

		var self = gulpWatch;

		exports.watchJS  = self.watchJS;
		exports.watchCSS = self.watchCSS;
		exports.watchAll = self.watchAll;

	}, // init





	/**
	 * Modules
	 */
	m : {

		gulp   : require( 'gulp' ),
		assets : require( './assets-src' )

	},





	/**
	 * Watch Default
	 */
	watchDefault : function( args ) {

		var self = gulpWatch;
		var m = self.m;
		var watcher = m.gulp.watch( args.src, args.tasks );

		watcher.on( 'change', function( e ) {
			// Get just filename
			var filename = e.path.split( '/' ).pop();
			var bars = '\n================================================';

			console.log( ( bars + '\nFile ' + filename + ' was ' + e.type + ', runing tasks...' + bars ).toUpperCase() );
		});

	}, // watchDefault





	/**
	 * Watch JS files
	 */
	watchJS : function() {

		var self = gulpWatch,
			m = self.m;

		self.watchDefault({
			src : m.assets().js.src + '/**/*.js',
			tasks : [ 'concat-scripts' ]
		});

	}, // watchJS





	/**
	 * Watch CSS files
	 */
	watchCSS : function() {

		var self = gulpWatch,
			m = self.m;

		self.watchDefault({
			src : m.assets().css.src + '/**/*.{sass,scss}',
			tasks : [ 'compile-sass' ]
		});

	}, // watchCSS





	/**
	 * Watch All files
	 */
	watchAll : function() {

		var self = gulpWatch,
			m = self.m;

		self.watchDefault({
			src : [
				m.assets().css.src + '/**/*.{sass,scss}',
				m.assets().js.src + '/**/*.js'
			],
			tasks : [ 'compile-sass', 'concat-scripts' ]
		});

	}, // watchAll

}; // return

})(); // gulpWatch


gulpWatch.init();