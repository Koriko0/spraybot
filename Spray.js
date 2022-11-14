const Discord = require('discord.js');
require("dotenv").config();


const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

client.once("ready", () => {
    console.log("SprayBot is online!")
})


client.login(process.env.TOKEN);








