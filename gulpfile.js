var gulp  = require('gulp');
var gutil = require('gulp-util');

// utils
var validateConfig = require('./gulp/utils/validateConfig');
var lazyQuire      = require('./gulp/utils/lazyQuire');

// config
var project = require('./package.json');

// validate the project
// configuration
validateConfig(project);

// gulpfile booting message
gutil.log(gutil.colors.green('Starting to Gulp! Please wait...'));



/**
 * Grouped
 */
gulp.task('default', [
	  'fonts:watch',
	 'images:watch',
	'scripts:watch',
	 'styles:watch',
	  'theme:watch',
	'browser:sync'
]);

gulp.task('build', [
	  'fonts:prod',
	 'images:prod',
	'scripts:prod',
	 'styles:prod',
	  'theme:prod'
]);


/**
 * Browser
 */
gulp.task('browser:sync', [], lazyQuire(require, './gulp/recipes/browser-sync'));


/**
 * Fonts
 */
gulp.task('fonts:clean', [],              lazyQuire(require, './gulp/recipes/fonts/clean'));
gulp.task('fonts:dev',   ['fonts:clean'], lazyQuire(require, './gulp/recipes/fonts/dev'));
gulp.task('fonts:prod',  ['fonts:clean'], lazyQuire(require, './gulp/recipes/fonts/prod'));
gulp.task('fonts:watch', ['fonts:dev'],   lazyQuire(require, './gulp/recipes/fonts/watch'));


/**
 * Images
 */
gulp.task('images:clean', [],               lazyQuire(require, './gulp/recipes/images/clean'));
gulp.task('images:dev',   ['images:clean'], lazyQuire(require, './gulp/recipes/images/dev'));
gulp.task('images:prod',  ['images:clean'], lazyQuire(require, './gulp/recipes/images/prod'));
gulp.task('images:watch', ['images:dev'],   lazyQuire(require, './gulp/recipes/images/watch'));


/**
 * Scripts
 */
gulp.task('scripts:clean', [],                lazyQuire(require, './gulp/recipes/scripts/clean'));
gulp.task('scripts:dev',   ['scripts:clean'], lazyQuire(require, './gulp/recipes/scripts/dev'));
gulp.task('scripts:prod',  ['scripts:clean'], lazyQuire(require, './gulp/recipes/scripts/prod'));
gulp.task('scripts:watch', ['scripts:clean'], lazyQuire(require, './gulp/recipes/scripts/watch'));


/**
 * Styles
 */
gulp.task('styles:clean', [],               lazyQuire(require, './gulp/recipes/styles/clean'));
gulp.task('styles:dev',   ['styles:clean'], lazyQuire(require, './gulp/recipes/styles/dev'));
gulp.task('styles:prod',  ['styles:clean'], lazyQuire(require, './gulp/recipes/styles/prod'));
gulp.task('styles:watch', ['styles:dev'],   lazyQuire(require, './gulp/recipes/styles/watch'));


/**
 * Theme
 */
gulp.task('theme:clean', [],              lazyQuire(require, './gulp/recipes/theme/clean'));
gulp.task('theme:dev',   ['theme:clean'], lazyQuire(require, './gulp/recipes/theme/dev'));
gulp.task('theme:prod',  ['theme:clean'], lazyQuire(require, './gulp/recipes/theme/prod'));
gulp.task('theme:watch', ['theme:dev'],   lazyQuire(require, './gulp/recipes/theme/watch'));
