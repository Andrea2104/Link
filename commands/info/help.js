/*
const Discord = require("discord.js")
const fs = require("fs")
const pagination = require("discord.js-pagination")
module.exports = {
    name: "help",
    description: "help command",

    async execute(message, args){
        const commandFolders = fs.readdirSync('/app/commands');
        const pages = [commandFolders
        ]

            for (const folder of commandFolders) {

                const commandFiles = fs.readdirSync(`/app/commands/${folder}`).filter(file => file.endsWith('.js'));
                fl = folder
                hmm = fl.charAt(0).toUpperCase() + fl.slice(1);
                let helpembed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setAuthor(`Link's Commands:`,message.author.displayAvatarURL({ size: 4096, size: 256 }))

                .setTitle(`**${hmm} Commands:**`)
                for (const file of commandFiles) {

                    const command = require(`/app/commands/${folder}/${file}`);
                    helpembed.addField(`${command.name}`,`${command.description}`,true)
                }
                pages.push(helpembed);
            }
            const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

            return  pagination(message, pages, emojiList, timeout)
    }
}
*/


       