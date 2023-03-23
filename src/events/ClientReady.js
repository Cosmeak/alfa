import { Events } from "discord.js";

// When the client is ready, run this code (only once)
export default {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};