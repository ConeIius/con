const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  let text = message.mentions.members.first() || message.member
  
  let amount = Math.floor(Math.random() * 100) + 1;
  
  let color
  if(amount < 50) color = client.config.green
  if(amount > 50 && amount < 75) color = client.config.orange
  if(amount > 76) color = client.config.red
  
  let embed = new discord.MessageEmbed()
  .setColor(color)
  .setTitle(`PP size:\n${text.user.username} has a ${amount} inch pp`)
  message.channel.send(embed)
}
module.exports.help = {
  name: "pp",
  aliases: ["ppsize"],
  description: "Check how tall someones pp is",
  usage: "(@user)",
  category: "fun"
}