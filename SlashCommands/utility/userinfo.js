const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "userinfo",
    type: "USER",
    
    
    async execute(client, interaction){
    
    const guildId = process.env.GUILD_ID
    const guild = client.guilds.cache.get(guildId)
  
    const target = await interaction.guild.members.fetch(interaction.targetId);

    const response  = new MessageEmbed()
    .setColor(target.displayHexColor || 'BLUE')
		.setAuthor({name: `${target.user.tag}`, iconURL: target.user.displayAvatarURL({dynamic: true, size: 512})})
		.setThumbnail(target.user.displayAvatarURL({dynamic: true, size: 1024}))
		.addField("ID: ", `${target.user.id}`)
		.addField("Member Since: ", `<t:${parseInt(target.joinedTimestamp / 1000)}>`, true)
		.addField("Account Created: ", `<t:${parseInt(target.user.createdTimestamp / 1000)}>`, true)
		.addField('Roles: ', `${target.roles.cache.map(r => r).join(" ").replace("@everyone", "") || "NIL"}`)
		.addField("Hoist Role: ", `${target.roles.hoist ? target.roles.hoist.name : 'None'}`, true)
		
    interaction.followUp({embeds: [response], ephemeral: true})
    }
}