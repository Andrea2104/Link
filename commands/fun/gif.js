/*

const fetch = require(`node-fetch`);
module.exports = {
    name: 'gif',
    description: "gif search",
    async execute(message, args){
    let keywords = 'cats';
        if (args.length > 0) {
             keywords = args.join(" ");
        }
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=medium`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    message.channel.send({text:json.results[index].url});
    }
}

*/