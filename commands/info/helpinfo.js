/*

const pagination = require("discord.js-pagination")

const Discord = require("discord.js")

const {prefix} = require("../../config.json")

module.exports = {
    name: "helpinfo",
    description: "more adv. help command",

    async execute ( message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Bot Information')
        .addField('**Prefix**', `Bots prefix is: ${prefix} `)
        .addField('**Pages**', '`1.Bot Information`, `2.Information`, `3.Fun`, `Others`, `4.Moderation`')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Information')
        .addField('`ping`', 'Shows you the bots ping!')
        .addField('`translate`', 'Translates a specified piece of text to english')
        .addField('`weather`', 'Shows weather of a specified location')
        .addField('`userinfo`', 'Gives info about a specified user')


        const Fun = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Fun')
        .addField('`meme`', 'Sends a random meme from dankmemes subreddits!')
        .addField('`rps`', 'Play rock paper scissors against the bot')
        .addField('`tictactoe`', 'Play tictactoe against a specified user!')
        .addField('`gif`', 'Sends a random gif based on the search term, the keyword is set to cats by default')
        .addField('`ascii`', 'Sends an ascii of a specified piece of text')

        const Replies = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Others')
        .addField('`69`', 'replies with lyrics to 34 35')
        .addField('`andrea`', 'replies with a screenshot of andrea saying uwu')
        .addField('`lilith`', 'replies with messages specified by lilith')
        .addField('`manstar`', 'mass pings manstar telling him to study')
        .addField('`ok and`', 'bot replies with pre coded messages')
        .addField('`swag`', 'Sends five swagcat emojis, SWAG!')
        .addField('`uword`', 'spams the word uwu in chat ten times')
        .addField('`poll`', 'Creates a poll')
        .addField('`suggest`', 'sends suggestion to a suggestion channel for higher ups to review')
        .addField('`send`', 'Use this command to send a message through the bot')
        .addField('`embed`', "sends an embed message according to the user")
        .addField("`nya`", "replies with nya")
        .addField("`link`", "replies with cry about it")


        const Moderation = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Moderation')
        .addField('`kick`', 'kicks a mentioned user')
        .addField('`ban`', 'bans a mentioned user')
        .addField('`unban`', 'unban a mentioned user(currently unstable)')


        const pages = [
            BotInfo,
            Information,
            Fun,
            Replies,
            Moderation,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}

*/