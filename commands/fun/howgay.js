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
  .setTitle(`Gay Meter:\n${text.user.username} is ${amount}% gay`)
  message.channel.send(embed)
}
module.exports.help = {
  name: "howgay",
  aliases: ["gaymeter"],
  description: "Check how gay someone is",
  usage: "(@user)",
  category: "fun"
}