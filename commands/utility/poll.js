const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "starts a poll",

    async execute (client, message, args) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;
        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor(member.displayHexColor || 'BLUE')
        .setTitle("POLL TIME")
        .setDescription(theDescription)
        .setFooter({text: "Poll started by: "+ message.author.username +'#'+ message.author.discriminator}) //optional

        let msgEmbed = await channelID.send({embeds:[embed]})
        await msgEmbed.react('👍') //👎👍
        await msgEmbed.react('👎')
    }
}