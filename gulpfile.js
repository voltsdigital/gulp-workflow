var gulp    = require( 'gulp' );
var gulp_folder = './gulp';
var assets  = require( gulp_folder + '/assets-src' );
var scripts = require( gulp_folder + '/scripts' );
var styles  = require( gulp_folder + '/styles' );
var watch   = require( gulp_folder + '/watch' );

// Compile SASS files
gulp.task( 'compile-sass', styles.compileSASS );

// MinifyCSS
gulp.task( 'minify-css', styles.minifyCSS );

// Lint Scripts
gulp.task( 'lint-scripts', scripts.lintScripts );

// Check JS code style with jscs
gulp.task( 'js-code-style', scripts.JSCodeStyle );

// Concatenate Scripts
gulp.task( 'concat-scripts', [ 'lint-scripts' ], scripts.concatScripts );

// Uglify Scripts
gulp.task( 'uglify-scripts', [ 'concat-scripts' ], scripts.uglifyScripts );

// Watch tasks
gulp.task( 'wjs', watch.watchJS );
gulp.task( 'wcss', watch.watchCSS );
gulp.task( 'w', watch.watchAll );

// Default task
gulp.task( 'default', [ 'minify-css', 'uglify-scripts' ] );