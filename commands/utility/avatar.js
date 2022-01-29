const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    description: "displays the avatar of a specified member",
    aliases: ["pfp", "av", "icon"],
    cooldown: 5,
    
    async execute(message, args){
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

        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.tag} avatar`)
        .setDescription(`avatar URL of **${user.tag}** \n[16px](${user.displayAvatarURL({size: 16, dynamic: true})}) | [32px](${user.displayAvatarURL({size: 32, dynamic: true})}) | [64px](${user.displayAvatarURL({size: 64, dynamic: true})}) | [128px](${user.displayAvatarURL({size: 128, dynamic: true})}) | [256px](${user.displayAvatarURL({size: 256, dynamic: true})}) | [512px](${user.displayAvatarURL({size: 512, dynamic: true})}) | [1024px](${user.displayAvatarURL({size: 1024, dynamic: true})}) | [2048px](${user.displayAvatarURL({size: 2048, dynamic: true})}) | [4096px](${user.displayAvatarURL({size: 4096, dynamic: true})})`)
        .setColor(member.displayHexColor || 'BLUE')
        .setImage(avatar);

        return message.channel.send({embeds:[embed]});
    }
}

