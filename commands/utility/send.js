module.exports = {
    name: "send",
    description: "sends a message through bot",

    async execute(client, message, args) {
        oy = args;
        channelid = oy.splice(0,1).join(` `);
        console.log(channelid)
        console.log(args);
        channelid = channelid.replace(/[^0-9]/g, '');
        GetText = oy.join(` `);
        if(!message.guild.channels.cache.has(channelid)) return;
        channelsend = await message.guild.channels.cache.get(channelid)
        message.guild.channels.cache.get(channelid).send({content:[GetText]})
        
    }   
}
