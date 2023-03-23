import { SlashCommandBuilder } from "discord.js";

export default {
	data: new SlashCommandBuilder()
		.setName("hello")
		.setDescription("Say hello"),
	async execute(interaction) {
		await interaction.reply("Hello there! 👋");
	},
};