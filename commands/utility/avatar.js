const {
    Client,
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageSelectMenu
  } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "displays the avatar of a specified member",
    aliases: ["pfp", "av", "icon"],
    cooldown: 5,
    
    async execute(client, message, args){
        let user;
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;
        if (message.mentions.users.first()){
            user = message.mentions.users.first();
        } else if (args[0]){
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
        
        const embed = new MessageEmbed()
      .setTitle(`${user.tag} avatar`)
      .setDescription(`avatar URL of **${user.tag}**`)
      .setColor(member.displayHexColor || 'BLUE')
      .setImage(avatar);

      



      const components = (state) => [
        new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId("size-menu")
            .setPlaceholder("Please select a size")
            .setDisabled(state)
            .addOptions([
              {label: "16px",
              value: "16px",
              },
              {label: "32px",
              value: "32px",
              },
              {label: "64px",
              value: "64px",
              },
              {label: "128px",
              value: "128px",
              },
              {label: "256px",
              value: "256px",
              },
              {label: "512px",
              value: "512px",
              },
              {label: "1024px",
              value: "1024px",
              },
              {label: "2048px",
              value: "2048px",
              },
              {label: "4096px",
              value: "4096px",
              },
          ])
        )
    ];
      
      const initialMessage = await message.channel.send({ embeds : [embed], components: components(false),});

      const filter = (i) => i.user.id === message.author.id;

      const collector = message.channel.createMessageComponentCollector({
        filter, 
        componentType: 'SELECT_MENU', 
        time: 300000
    });
    
    let px;

    collector.on('collect', async(i) => {
      const value = i.values[0]
      if (value == "16px"){
        px = 16;
      }
      if (value == "32px"){
        px = 32;
      }
      if (value == "64px"){
        px = 64;
      }
      if (value == "128px"){
        px = 128;
      }
      if (value == "256px"){
        px = 256;
      }
      if (value == "512px"){
        px = 512;
      }
      if (value == "1024px"){
        px = 1024;
      }
      if (value == "2048px"){
        px = 2048;
      }
      if (value == "4096px"){
        px = 4096;
      }
      
      let pfp = user.displayAvatarURL({size: px, dynamic: true});

      const editEmbed = new MessageEmbed()
      .setTitle(`${user.tag} avatar`)
      .setDescription(`avatar URL of **${user.tag}**`)
      .setColor(member.displayHexColor || 'BLUE')
      .setImage(pfp);


      i.update({embeds: [editEmbed]});
    })

    collector.on('end', () => {
      initialMessage.edit( {components: components(true)} )
  })
    }
}

