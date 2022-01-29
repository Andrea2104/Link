const Discord = require('discord.js')

module.exports = {
    name: "ping", //command name, e.g. of what you would send in chat: .ping
    description: "ping command",

    async execute (message, args) {

        const ping = new Discord.MessageEmbed()
        .setTitle('Bot Ping')
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
        .setImage("https://media1.tenor.com/images/554fe667327ff013023fc80e2d9595ef/tenor.gif");
        
        message.channel.send({embeds:[ping]}); //so it replys to the `.ping` command
    }
}