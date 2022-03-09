const apiClient = require('./utils/twitch');
const print = require('./utils/print');

(async function() {
	const me = await apiClient.users.getMe();
	const {id} = me;

	const followedData = await apiClient.streams.getFollowedStreams(id);
	const followed = followedData.data.flat();
	followed.forEach(print);
})();

module.exports = apiClient;