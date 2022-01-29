const {MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    type: 'USER',
    
    async execute(client, interaction) {
        
      const guildId = process.env.GUILD_ID
      const guild = client.guilds.cache.get(guildId)

      const target = await interaction.guild.members.fetch(interaction.targetId);

      let pfp = target.user.displayAvatarURL({size: 4096, dynamic: true});
    
      const init = new MessageEmbed()
      .setTitle(`${target.user.tag} avatar`)
      .setDescription(`avatar URL of **${target.user.tag}**`)
      .setColor(target.displayHexColor || 'BLUE')
      .setImage(pfp);

      
      await interaction.followUp({ embeds : [init]});
   
    },
};