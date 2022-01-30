const { Client, Collection } = require("discord.js");
const {DisTube} = require("distube"); 
const { SpotifyPlugin } = require("@distube/spotify");
const { YouTubeDLPlugin } = require(`@distube/yt-dlp`)


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

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    youtubeDL: false,
    plugins: [new YouTubeDLPlugin({
        updateYouTubeDL: true
    }), new SpotifyPlugin()]
    

}) 

module.exports = client;

// Initializing the project
require("./handler")(client);

//keepAlive(); 
client.login(process.env.BOTTOKEN);

