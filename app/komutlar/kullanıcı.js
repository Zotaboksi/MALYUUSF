const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
 

.setColor("GOLD")
.setTitle("Kullanıcı Yardım")
.setThumbnail("https://cdn.discordapp.com/attachments/625047644040855552/625082441350250497/dribbble-c.gif")//saol emirhan ^^
.addField("c!avatar @Kişi-etiket veya gr!avatar", "Etiketlediğiniz kişinin avatarını büyük bir şekilde atar" )
.addField("c!davet   ", "Botun Davet linki")
.addField("c!havadurumu {Yer}    ", "Hava durumunu gösterir")
.setDescription("Camelot Bot™ tüm haklar saklıdır.")
.setURL("https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390")
.addField("c!kullanıcı-bilgi ", "Discord hesabın hakkında bilgi edinirsin")
.addField("c!sunucubilgi    ", "Sunucu  hakkında bilgi edinirsin ")
.addField("c!unban {kullanıcı} {sebeb}  ", "Birinin banını açar")
.addField("c!uyar {kullanıcı} {sebeb}", "Bota Bir şey yazdırır")
.addField("🔻", "[Minecraft Sunucumuza Gelmek istiyosan](https://discord.gg/rkcrscx)")
.addField("🔻", "[Botu Kendi sunucuna eklemek istiyorsan buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390)")  
.setFooter("Camelot Bot™ tüm haklar saklıdır" )

message.channel.send(embed)
 
    };

    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderesyon', 'MOD'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'kullanıcı gösterir.',
  usage: 'kullanıcı '
};