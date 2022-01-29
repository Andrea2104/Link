const client = require("../bot");
const { prefix } = require('../config.json');


client.on('messageCreate', async(message) => {
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
            await client.commands.get(`${cmd}`).execute(message,args);
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
  