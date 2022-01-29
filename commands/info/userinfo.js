const { MessageEmbed } = require('discord.js');


const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports =  {
    name: "userinfo",
    description: "shows info of a user",
	async execute(message, args) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;
		
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
		.setColor(member.displayHexColor || 'BLUE')
		.setAuthor({name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL({dynamic: true, size: 512})})
		.setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 1024}))
		.addField("ID: ", `${member.user.id}`)
		.addField("Flags: ", ` ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`)
		.addField("Member Since: ", `<t:${parseInt(member.joinedTimestamp / 1000)}>`, true)
		.addField("Account Created: ", `<t:${parseInt(member.user.createdTimestamp / 1000)}>`, true)
		.addField('Roles: ', `${member.roles.cache.map(r => r).join(" ").replace("@everyone", "") || "NIL"}`)
		.addField("Hoist Role: ", `${member.roles.hoist ? member.roles.hoist.name : 'None'}`, true)
		.addField("Highest Role: ", `${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`, true )	
		message.channel.send({embeds:[embed]});
	}

};