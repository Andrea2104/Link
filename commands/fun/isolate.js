module.exports = {
	name : "isolate",
	cooldown : 5,

	async execute(client, message, args){

	    let GuildMember;
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member;
        if (message.mentions.users.first()){
            GuildMember = message.mentions.users.first();
        } else if (args[0]){
            GuildMember = message.guild.members.cache.get(args[0]).user;
        } else {
            message.reply("No user was specified")
        }
	    
       if (message.member.roles.cache.has('935413797127065690')){
           message.channel.setName(`${GuildMember.tag} isolated igloo`);
           member.roles.add('935413797127065690');
           message.member.roles.remove('935413797127065690');
       }
       else if (message.member.roles.cache.has('932455601424982037')){
           member.roles.add('935413797127065690');
           message.channel.setName(`${GuildMember.tag} isolated igloo`)
       }
       else {
           message.reply("Only the lonely member or the admin shall pass the title");
       }
    } 

}
