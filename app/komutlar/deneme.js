const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
exports.run = function (client, message, args) {
   
  const kackisi = new Discord.RichEmbed()
  
  .setColor("1ED760")
  .setDescription(`Toplam: ${message.guild.memberCount}`)
  
  message.channel.send(kackisi) 
  
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ ],
    permLevel: 0
};

exports.help = {
    name: 'kaçkişi',
    description: 'Botun pingini gösterir.',
    usage: 'kaçkişi'
};
