let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('ms'),
    moment = require('moment')
const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
  cpuStat.usagePercent(function (error, percent, seconds) {
      if (error) {
        return console.error(error)
      }
  
  const cores = os.cpus().length 
      const cpuModel = os.cpus()[0].model 
      const guild = client.guilds.cache.size.toLocaleString() 
      const user = client.users.cache.size.toLocaleString() 
      const channel = client.channels.cache.size.toLocaleString()
      const usage = formatBytes(process.memoryUsage().heapUsed) 
      const Node = process.version 
      const CPU = percent.toFixed(2) 
      
      const embed = new discord.MessageEmbed() 
      .setColor(client.config.blue)
      embed.addField('Server Count', `${guild}`)
      embed.addField("User Count" , `${user}`)
      embed.addField('Channel Count' , `${channel}`) 
      embed.addField('Usage' , `${usage}`)
      embed.addField('Node Version' , `${Node}`)
      embed.addField("CPU Usage" , `${CPU}%`)
      embed.addField('CPU', `${cores} - ${cpuModel}`)
      embed.addField("Uptime" , `**${parseDur(client.uptime)}**`)
      message.channel.send(embed)
  })
  }

function formatBytes (a, b) {
  if (0 == a) return "0 Bytes";
  let c = 1024,
      d = b || 2,
      e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
} // Create MB, KB, TB or something in the back of your memory counters.

function parseDur(ms) {
  let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
  seconds = seconds % 86400
  
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600
  
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60)
  
  if (days) {
    return `${days} day, ${hours} hours, ${minutes} minutes`
  } else if (hours) {
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  } else if (minutes) {
    return `${minutes} minutes, ${seconds} seconds`
  }

  
  return `${seconds} second(s)`
}


                       

module.exports.help = {
  name: "stats",
  aliases: ["stat"],
  description: "Stats of this bot",
  usage: " ",
  category: "misc"
}