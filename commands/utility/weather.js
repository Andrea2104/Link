const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "shows the current weather in a specified location",

    async execute (client, message, args) {
        weather.find({search: args.join(" "), degreeType: `F`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Please specify a location!')

            if(result === undefined || result.length === 0) return message.channel.send('**invalid** location!!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setColor(0x111111)
            .setAuthor({name: `Weather forecast for ${current.observationpoint}`})
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('TimeZone', `UTC ${location.timezone}`, true)
            .addField('Degree Type', 'Fahrenheit', true)
            .addField('Temperature', `${current.temperature}°F`, true) 
            .addField('Wind', `${current.winddisplay}`, true)
            .addField('Feels Like', `${current.feelslike}°F`, true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send({embeds: [embed]})
        })
    }
}