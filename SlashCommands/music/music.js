

const{MessageEmbed, CommandInteraction} = require("discord.js");


module.exports = {
    name: "music",
    description: "complete music system",
    options: [
        
        {
            name: "join",
            description: "join channel",
            type: "SUB_COMMAND",
            options: [{ name: "query", description:"Provide a name or URL for the song", type:"STRING", required: true}]
        },

        {
            name: "play",
            description: "play a song",
            type: "SUB_COMMAND",
            options: [{ name: "query", description:"Provide a name or URL for the song", type:"STRING", required: true}]
        },

        {
            name: "volume",
            description: "adjust the volume",
            type: "SUB_COMMAND",
            options: [{ name: "percent", description:"10 = 10%", type:"NUMBER", required: true}]
        },

        {
            name: "settings",
            description: "select an option",
            type: "SUB_COMMAND",
            options: [{ name: "options", description:"select an option", type:"STRING", required: true,
            choices: [
                {name:"🔽 Show Queue", value:"queue"},
                {name:"⏭ Skip Track", value:"skip"},
                {name:"⏸ Pause Track", value:"pause"},
                {name:"▶️ Resume Track", value:"resume"},
                {name:"⏹ Stop Music", value:"stop"},
                {name:"🔀 Shuffle Queue", value:"shuffle"},
                {name:"➡ Toggle Autoplay Mode", value:"autoplay"},
                {name:"🔄 Toggle Repeat Mode", value:"repeat"},
                {name:"🈁 Add a Related song", value:"related"},
                
               
            ]
           }],
            
        },
    ],

    async execute(client, interaction) {
        
       
       
     const guildId = process.env.GUILD_ID
     const guild = client.guilds.cache.get(guildId)

     const member = await interaction.guild.members.fetch(interaction.targetId);
     const channel = await guild.channels.cache.get(interaction.channelId)

     const VoiceChannel = interaction.member.voice.channel;


        if(!VoiceChannel)
        return interaction.followUp({content: "You need to be in a voice channel to use the command"});

        if(guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.followUp({content: `Music is already being played in <#${guild.me.voice.channelId}>.`});

        try{
            switch(interaction.options.getSubcommand()) {
                
                case "join" : {
                    client.distube.voices.join( VoiceChannel);
                    return interaction.followUp({content: "<:DiscoDJ:937195672908746774> Request Recieved"})
                    
                }

                case "play" : {
                    client.distube.play( VoiceChannel, interaction.options.getString("query"), { textChannel: channel, member: member});
                    return interaction.followUp({content: "<a:DiscoDJ:937195672908746774> Request Recieved"})
                    
                }
                case "volume" : {
                    const Volume = interaction.options.getNumber("percent");
                    if (Volume > 100 || Volume < 1)
                    return interaction.followUp({content: "⛔ Volume should be between 1 and 100"})

                    client.distube.setVolume( VoiceChannel, Volume);
                    return interaction.followUp({content: `🔊 Volume has been set to \`${Volume}\``});
                }
                case "settings" : {
                    const queue = await client.distube.getQueue(VoiceChannel);

                    if(!queue)
                    return interaction.followUp({content: "⛔ The queue is empty."});

                    switch(interaction.options.getString("options")) {
                        case "skip" : 
                        await queue.skip(VoiceChannel);
                        return interaction.followUp({content: "⏭️ Skipped the current track."});

                        case "stop" :
                        await queue.stop(VoiceChannel);
                        return interaction.followUp({content: "⏹️ Stopped playing music."})

                        case "pause" :
                        await queue.pause(VoiceChannel);
                        return interaction.followUp({content: "⏸️ Paused the music."});

                        case "resume" :
                        await queue.resume(VoiceChannel);
                        return interaction.followUp({content: "▶️ Resumed playing music"});

                        case "shuffle" :
                        await queue.shuffle(VoiceChannel);
                        return interaction.followUp({content: "🔀 The queue has been shuffled"});

                        case "autoplay" :
                        let Mode = await queue.toggleAutoplay(VoiceChannel);
                        return interaction.followUp({content: `➡ Autoplay mode is set to: ${Mode ? "On" : "Off"}`});

                        case "repeat" :
                        let Mode2 = await client.distube.setRepeatMode(queue);
                        return interaction.followUp({content: `🔄 Repeating: ${Mode2 = Mode2 ? Mode2 == 2 ? "Queue" : "Song" : "Off" }`});

                        case "related" :
                        await queue.addRelatedSong(VoiceChannel);
                        return interaction.followUp({content: "🈁 A related track was added to queue"});

                        case "queue" :
                        return interaction.followUp({embeds: [new MessageEmbed()
                        .setColor("BLURPLE")
                        .setDescription(`${queue.songs.map(
                            (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\`` )}`
                            )]});
                        
                    }
                    return;

                }
            }
        }catch(e){
            const errorEmbed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`⚠️ Alert: ${e}`)

            return interaction.followUp({embeds: [errorEmbed]});
        }
    }
}

