
//const keepAlive = require('./server.js');


const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;
require('dotenv').config();

const guildId = process.env.GUILD_ID
     const guild = client.guilds.cache.get(guildId)

     
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

//keepAlive(); 
client.login(process.env.BOTTOKEN);

