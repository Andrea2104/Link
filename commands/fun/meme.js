/*

const Discord = require('discord.js');

const subReddits = ["memes", "dankmemes",];

const got = require('got');

module.exports = {
    name: 'meme',
    aliases: [""],
    description: "sends a meme",
    async execute(message, args ){
        const reddit = Math.floor(Math.random() * subReddits.length);
            
        got(`https://www.reddit.com/r/dankmemes/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            
            const embed = new Discord.MessageEmbed()
            
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(memeImage)
            .setColor('RANDOM')
            .setFooter({text: `🔼 ${memeUpvotes}     🔽 ${memeDownvotes}     💬 ${memeNumComments}`})
            
            message.channel.send({embeds: [embed]});
        })
    }
}

*/