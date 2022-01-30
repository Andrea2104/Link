
const client = require("../bot");

const {MessageEmbed} = require("discord.js")

const distube = require("distube")

const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playSong', (queue, song) =>
    queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("#066dad")
    .setDescription(`▶ Playing \`${song.name}\` - \`${song.formattedDuration}\`\n\n${status(queue)}`)
]})


  )
  .on('addSong', (queue, song) =>
    queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("#066dad")
    .setDescription(`✔ Added ${song.name} - \`${song.formattedDuration}\` `)
]})
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send({embeds: [new MessageEmbed()
    .setColor("#066dad")
    .setDescription(`✔ Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`)
    ]}
      
    )
  )
  .on('error', (channel, e) => {
    channel.send({embeds: [new MessageEmbed()
    .setColor("#066dad")
    .setDescription(`An error encountered: ${e.toString().slice(0, 1974)}`)
    ]})
    console.error(e)
  })
  .on('empty', queue => queue.textChannel.send({embeds: [new MessageEmbed()
   .setColor("RED")
   .setDescription('🟡 Voice channel is empty! Leaving the channel...')
]}))
  .on('searchNoResult', (message, query) =>
    message.channel.send({embeds : [new MessageEmbed()
        .setColor("RED")
        .setDescription(`No result found for \`${query}\`!`)]})
  )
  .on('finish', queue => queue.textChannel.send({embeds: [new MessageEmbed()
.setColor("RED")
.setDescription('Finished!')

]}))