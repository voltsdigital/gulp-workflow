var gulpJS = (function() {

return {

	/**
	 * Init module
	 */
	init : function() {

		var self = gulpJS;

		// Export functions
		exports.concatScripts = self.concatScripts;
		exports.uglifyScripts = self.uglifyScripts;
		exports.lintScripts   = self.lintScripts;
		exports.JSCodeStyle   = self.JSCodeStyle;

	}, // init






	/**
	 * Modules
	 */
	m : {

		gulp    : require( 'gulp' ),
		assets  : require( './assets-src' ),
		concat  : require( 'gulp-concat' ),
		uglify  : require( 'gulp-uglify' ),
		jshint  : require( 'gulp-jshint' ),
		jscs    : require( 'gulp-jscs' )

	}, // m





	/**
	 * Variables
	 */
	v : {

		head_scripts : [ '/lib/modernizr', '/lib/ga' ],

		main_scripts :  [
			// Todos os arquivos de /lib listados na ordem abaixo
			'/lib/jquery',
			'/lib/jquery.plugins',
			'/lib/socialite.min',

			// O script principal, que conterá as funções usadas em todas as páginas
			'/scripts',

			// Os scripts que serão usados para páginas específicas
			'/app/*'
		] // main_scripts

	}, // v





	/**
	 * Build scripts URLs
	 */
	buildScripts : function( el ) {

		return gulpJS.m.assets().js.src + el + '.js';

	}, // buildScripts





	/**
	 * Lint scripts
	 */
	lintScripts : function() {

		var self = gulpJS,
			m = self.m,
			stream;

		stream = m.gulp.src([ m.assets().js.src + '/scripts.js', m.assets().js.src + '/app/*.js' ])
			.pipe( m.jshint( '../.jshintrc' ) )
			.pipe( m.jshint.reporter( 'default' ) );

		return stream;

	}, // lintScripts





	/**
	 * Check JS code style with jscs
	 */
	JSCodeStyle : function() {

		var self = gulpJS,
			m = self.m,
			stream;

		stream = m.gulp.src( m.assets().js.src + '/**/*.js' )
			.pipe( m.jscs( '../.jscs.json' ) );

		return stream;

	}, // JSCodeStyle





	/**
	 * Concatenate scripts
	 */
	concatScripts : function() {

		var self = gulpJS,
			m = self.m,
			v = self.v,
			stream;


		// Head script
		m.gulp.src( v.head_scripts.map( self.buildScripts ) )
			.pipe( m.concat( 'head-scripts.js' ) )
			.pipe( m.gulp.dest( m.assets().js.build ) );


		// Main scripts
		stream = m.gulp.src( v.main_scripts.map( self.buildScripts ) )
			.pipe( m.concat( 'main.js' ) )
			.pipe( m.gulp.dest( m.assets().js.build ) );

		return stream;

	}, // concatScripts





	/**
	 * Uglify scripts
	 */
	uglifyScripts : function() {

		var self = gulpJS,
			m = self.m,
			v = self.v,
			stream;

		stream = m.gulp.src( m.assets().js.build + '/*.js' )
			.pipe( m.uglify() )
			.pipe( m.gulp.dest( m.assets().js.build ) );

		return stream;

	} // uglifyScripts

}; // return

})(); // gulpJS


gulpJS.init();