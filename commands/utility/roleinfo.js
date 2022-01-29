const Discord = require('discord.js') 

module.exports = {
    name: "roleinfo",
    description: "gives desciption of a role",
   
    async execute( client, message, args)  { 
    
 
    let role; 

    if (!args[0]) return message.reply('No role, role name or role Id was specified') 

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first() 

    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){ 

      
      role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim()) 

      
      if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply("Role not found")
    }


    if(args[0] && !isNaN(args[0])){

        role = message.guild.roles.cache.find(e => e.id == args[0])

      
      if(!message.guild.roles.cache.has(args[0])) return message.reply("Invalid Role Id")
    }
  

    if(!role) return message.reply("No role was specified")


  let WithRole; 


  if(role.members.size > 5) WithRole = role.members.map(e => `<@${e.id}>`).slice(0,5).join(", ") + ` and ${role.members.size - 5} more members...` 

  if(role.members.size < 5) WithRole = role.members.map(e => `<@${e.id}>`).join(", ")
    

    let embed = new Discord.MessageEmbed()
    .setColor(role.color) 
    .setAuthor({name: message.guild.name, iconURL: message.guild.iconURL()}) 
  .addField("Role Name: ", ` ${role.name}, (<@&${role.id}>)`)
  .addField("Role ID: ", `**\`${role.id}\`**`)
  .addField("Role Mentionable: ", `${role.mentionable.toString().replace("true","Yes").replace("false","No")}`)
  .addField("Role Member Count: ", `${role.members.size || 0}`)
  .addField("Role Members:",WithRole ? WithRole : "NIL")
  
    message.channel.send({embeds: [embed]})
  }
}