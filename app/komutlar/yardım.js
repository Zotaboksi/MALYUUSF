const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
 

.setColor("000000")
.setTitle("Camelot Bot Yardım")
.setThumbnail("https://cdn.discordapp.com/attachments/625047644040855552/625082441350250497/dribbble-c.gif")//saol emirhan ^^
.addField("  ⚙️** c!komutlar**", "```komutlara bakabilirsin```" )
.addField("  ⚙️** c!moderasyon**", "```Moderasyon Komutlarına Bakabilirsin```")
.addField("    ⚙️** c!Kullanıcı** ", "```Kullanıcılar için yardım görürsünüz```")
.setDescription("Camelot Bot™ tüm haklar saklıdır.")
.setURL("https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390")
.addField("  ⚙️**c!sahip** ", "```Sadece Sahibinin kullanacağı yetkiler```")
.addField("🔻", "[Minecraft Sunucumuza Gelmek istiyosan](https://discord.gg/54kT2t)")
.addField("🔻", "[Botu Kendi sunucuna eklemek istiyorsan buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390)")  
.setFooter("Camelot Bot™ tüm haklar saklıdır" )  

message.channel.send(embed)
 
    };



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım '
};