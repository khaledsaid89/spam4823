const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603539751265370123")
setInterval(function() {
channel.send(`تعبتتتتتتتتت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);