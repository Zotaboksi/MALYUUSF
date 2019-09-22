const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

let kanal = JSON.parse(fs.readFileSync("./ayarlar/anan.json", "utf8"));

var prefix = ayarlar.prefix

exports.run = async(client, message, args) => {


if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('Gerekli Yetkiye Sahip Değilsin.')

let channel = message.mentions.channels.first()
if (!channel) {
message.channel.send('Lütfen Bir Kanal Etiketleyin!')
return
}
if(!kanal[message.guild.id]){
    kanal[message.guild.id] = {
        baban: channel.id
    };
}
fs.writeFile("./ayarlar/anan.json", JSON.stringify(kanal), (err) => {
console.log(err)
})

message.channel.send(`Davet kanalı başarıyla ${channel} olarak ayarlandı`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davetkanal',
    description: 'Davet log kanalını ayarlar.',
    usage: 'davetkanal [#kanal]'
  };
  