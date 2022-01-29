const { prefix } = require('./config.json')
const gif = require("./commands/fun/gif.js");
const translate = require("./commands/utility/translate.js");
const weather = require("./commands/utility/weather.js");
const ping = require("./commands/info/ping.js");
const meme = require("./commands/fun/meme.js");
const rps = require("./commands/fun/rps.js");
const tictactoe = require("./commands/fun/tictactoe.js");
const help = require("./commands/info/help.js");
const helpinfo = require("./commands/info/helpinfo.js");
const poll = require("./commands/utility/poll.js");
const sendmessage = require("./commands/utility/send.js");
const avatar = require("./commands/utility/avatar.js");
const ascii = require("./commands/fun/ascii.js");
const embed = require("./commands/utility/embed.js");
const userinfo = require("./commands/info/userinfo.js");
const jembed = require("./commands/utility/jembed.js");
const isolate = require("./commands/fun/isolate.js");
const roleinfo = require("./commands/utility/roleinfo.js");

const commands = {  gif ,translate, weather, 
 ping, meme, rps, tictactoe, help, helpinfo, poll, sendmessage, avatar, ascii, embed, userinfo, jembed, isolate, roleinfo}
module.exports = async function (message) {
     {
        let tokens = message.content.split(' ');
        let command = tokens.shift();
        if (command.charAt(0) === `${prefix}`) {
            command = command.substring(1);
            commands[command](message, tokens);
            client.on("message", message => {
            
            });
        }
        
  }
};
