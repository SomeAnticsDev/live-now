const chalk = require('chalk');

/**
 * Prints an active stream in a pretty way!
 * @param {import('@twurple/api/lib/api/helix/stream/HelixStream').HelixStream} stream
 */
module.exports = function print(stream) {
	const {userDisplayName, gameName, title} = stream;

	if (userDisplayName === 'SomeAnticsDev') return;

	console.log(
		chalk.gray.italic('/raid') +
		' ' +
		chalk.cyan.bold(userDisplayName)
	);
	
	console.log(chalk.greenBright(title));
	console.log(gameName);
	console.log();
}