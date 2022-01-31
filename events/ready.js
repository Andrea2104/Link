const client = require("../bot");
const { prefix } = require('../config.json');

client.on('ready', async() => {
    console.log('ready');
    let servers = await client.guilds.cache.size
    let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0 )
  
  const activities = [
    `${prefix}help`, 
    `Watching over ${servers} servers`,
    `Watching ${servercount} people`,
    `The prefix is ${prefix}`
  ]
  
  setInterval(() =>{
   const status = activities[Math.floor(Math.random()*activities.length)]
   client.user.setPresence( {status: "dnd" , activities : [{name : `${status}`}]})
  }, 5000)
  });