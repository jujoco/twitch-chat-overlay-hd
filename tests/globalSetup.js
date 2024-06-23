import { vi } from "vitest";

/** @type {Configs} */
const configs = {
	settings: {
		showUsernameColor: true, // true or false
		testMode: false, // true or false - for testing purposes
	},
	styles: {},
};

vi.stubGlobal("configs", configs);
