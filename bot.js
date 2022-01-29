
//const keepAlive = require('./server.js');


const Discord = require('discord.js');
require("discord-reply");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client , Intents, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');


const client = new Client({
  intents: 32767
})

const { prefix } = require('./config.json');
require('dotenv').config();

const fs = require('fs');

const {join} = require('path');
const commandFolders = fs.readdirSync('./commands');


client.commands = new Discord.Collection();

for (const folder of commandFolders){const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${folder}/${file}`);

    client.commands.set(command.name, command);
}}
 
//const got = require("got");


client.once('ready', async() => {
  console.log('ready');
  let servers = await client.guilds.cache.size
  let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0 )

const activities = [
  `${prefix}helpinfo`, 
  `Watching over ${servers} servers`,
  `Watching ${servercount} members`,
  `The prefix is ${prefix}`
]

setInterval(() =>{
 const status = activities[Math.floor(Math.random()*activities.length)]
 client.user.setPresence( {status: "dnd" , activities : [{name : `${status}`}]})
}, 5000)
});

client.on('messageCreate', message => {
  if(message.mentions.members.size)
  {
    if(message.mentions.members.first().id === client.user.id)
   {
       message.lineReply("My prefix is `"+ prefix+ "`, type `"+ prefix+"help` for commands and `"+ prefix+"helpinfo` for description of commands"); 
   }
  }
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  console.log(cmd);
  
  if(client.commands.has(cmd))
  {
      try {
          client.commands.get(`${cmd}`).execute(message,args);
      }
      catch (err){
          console.log(err);
      }
  }
  if(message.content.startsWith(`!ok and`))
  {
  client.commands.get("okand").execute(message,args);
  }
    //new line for checking ping
    
    // end
});

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

/
client.on("ready",() => {
     const guildId = process.env.GUILD_ID
     const guild = client.guilds.cache.get(guildId)
     let commands

     if (guild) {
       commands = guild.commands
     } else {
       commands = client.application.commands
     }
     commands.create({
       name: "ping",
       description: "replies with pong"
      
     })

     commands.create({
      name: "avatar",
      type: "USER",
     
    })
     commands.create({
       name: "userinfo",
       type: "USER",
     }
     )
     
} )


client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()){
    return
  } 

  const {commandName, options} = interaction

  if (commandName === "ping") {
    interaction.reply({
      content: "pong",
      ephemeral: true,
    })
  }
  
})
   

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isContextMenu()){
    return
  } 

  const {commandName, options} = interaction

if (commandName === "userinfo") {
    /**
     * 
     * @param {ContextMenuInteraction} interaction
     */
    

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
	
    interaction.reply({embeds: [response], ephemeral: true})
    
  } 

  if (commandName === 'avatar') {
    /**
     * 
     * @param {ContextMenuInteraction} interaction
     */
		
    
      const target = await interaction.guild.members.fetch(interaction.targetId);

      let pfp = target.user.displayAvatarURL({size: 4096, dynamic: true});
    
      const init = new Discord.MessageEmbed()
      .setTitle(`${target.user.tag} avatar`)
      .setDescription(`avatar URL of **${target.user.tag}**`)
      .setColor(target.displayHexColor || 'BLUE')
      .setImage(pfp);

      
      await interaction.reply({ embeds : [init], ephemeral: true});
   
      
         
    
		
	}
})

//keepAlive(); 
client.login(process.env.BOTTOKEN);

