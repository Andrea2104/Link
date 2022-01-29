module.exports = {
   name : "jembed",
   description: "Sends a JSON embed",
   minArgs : 2,
	expectedArgs : '<Channel mention> <JSON>',
	async execute(client, message, args){
		const targetChannel = message.mentions.channels.first()
		if (!targetChannel) {
			message.reply("Please specify a channel")
			return
		}
		try{
		  args.shift()

		  const json = JSON.parse(args.join(' '))
		  const {text = ''} = json
		  targetChannel.send(text, {
			embed: json,
		})}catch(err) {
			message.reply(`Invalid JSON ${err.message}`)
		}
	}
}
