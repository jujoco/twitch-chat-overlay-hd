/** @type {Configs} */
const configs = {
	// ========================================
	// Authentication and channel - Required
	// Before you start modifying these settings,
	// get your oauth token from https://twitchapps.com/tmi
	// ========================================
	auth: {
		twitch_oauth: "OAUTHTOKEN", // Replace OAUTHTOKEN with your Twitch oauth token
		twitch_channel: "CHANNEL", // Replace CHANNEL with a Twitch channel name
		twitch_username: "USERNAME", // Replace USERNAME with your Twitch username
	},
	// ========================================
	// Bot Behavior Settings
	// ========================================
	settings: {
		showUsernameColor: true, // true or false
		testMode: false, // true or false - for testing purposes
	},

	// ========================================
	// Styles Settings
	// ========================================
	styles: {
		// Font Family: available @ https://fonts.google.com
		fontFamily: "Roboto Mono",
		appBorderRadius: "5px", // px value
		appPadding: "6px", // px value
		appBackgroundColor: "rgba(0, 0, 0, 0)", // rgba value https://rgbcolorpicker.com
	},
};
