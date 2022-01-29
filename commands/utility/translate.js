const translate = require('@iamtraction/google-translate');
const discord = require('discord.js');

module.exports= {
    name : 'translate',
    async execute(message, args) {
        const query = args.join(" ");
        if (!query) return message.reply("Please specify a text to translate");

        const translated = await translate(query, { to: 'english' });
        const embed = new discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle("Translation")
        .addField("Raw Text:", `${query}`)
        .addField("Translated Text:", `${translated.text}`);

        message.channel.send({embeds: [embed]})
        
    },
};