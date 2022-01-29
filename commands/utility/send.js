module.exports = {
    name: "send",
    description: "sends a messaeg anonymously through bot",

    async execute(message, args) {
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
