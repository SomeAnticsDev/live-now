const path = require('path');
const env = path.join(__dirname, '../.env');
require('dotenv').config({path: env});

const {StaticAuthProvider} = require('@twurple/auth');
const {ApiClient} = require('@twurple/api');

// Initialize Twitch API
const authProvider = new StaticAuthProvider(
	process.env.CLIENT_ID,
	process.env.TOKEN,
);

const apiClient = new ApiClient({authProvider});

module.exports = apiClient;