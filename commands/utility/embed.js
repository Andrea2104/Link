const discord = require("discord.js")

module.exports = {
    name: "embed",
    description: "sends an embed message through the bot",
    
    async execute(client, message, args) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;  
        oy = args;
        channelid = oy.splice(0,1).join(` `);
        console.log(channelid)
        console.log(args);
        channelid = channelid.replace(/[^0-9]/g, '');
        GetText = oy.join(` `);
        const embed = new discord.MessageEmbed()

        .setAuthor({name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
        .setDescription(GetText)
        .setTimestamp()
        .setColor(member.displayHexColor || 'BLUE');

        if(!message.guild.channels.cache.has(channelid)) return;
        channelsend = await message.guild.channels.cache.get(channelid)
        message.guild.channels.cache.get(channelid).send({embeds:[embed]})
    }   
}






