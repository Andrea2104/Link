const client = require("../bot");
const { prefix } = require('../config.json');


client.on('guildCreate', (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => {
      if(
        channel.type === "text" &&
        !channeltoSend &&
        channel.permissionsFor(guild.me).has("SEND_MESSAGES")
      ) channeltoSend = channel;
    });
    if(!channeltoSend) return;
  
    let channelEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Hello, thanks a lot for inviting me to ${guild.name}!`)
    .setDescription(`By the way, prefix is **${prefix}**`)
    .addField("Need help with commands?", `Type **${prefix}help** or **${prefix}helpinfo**`)
    channeltoSend.send({embeds: [channelEmbed]}).catch(err => {
      if (err) {
          return;
      }});
  })