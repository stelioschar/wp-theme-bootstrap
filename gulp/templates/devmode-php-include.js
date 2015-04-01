module.exports = function (filename, definitions) {

	var preservedDefs = definitions && definitions.length
		? ' * ' + definitions.join('\n * ') + '\n *'
		: '';
	
	return [
		'<?php',
		'/**',
		preservedDefs,
		' * DEVELOPMENT MODE ONLY',
		' *',
		' * Includes and Runs php files directly',
		' * from the dev theme to enable debugging',
		' * php from within the dev theme!',
		' *',
		' * Run "gulp build" to generate the theme',
		' * for production before deploying!',
		' *',
		' */',
		'include_once \'' + filename + '\';'
	].join('\n');
};