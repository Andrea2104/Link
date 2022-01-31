const client = require("../bot");
const { prefix } = require('../config.json');


client.on('messageCreate', async(message) => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    console.log(cmd);
    
    if(client.commands.has(cmd))
    {
        try {
            await client.commands.get(`${cmd}`).execute(client, message,args);
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
  