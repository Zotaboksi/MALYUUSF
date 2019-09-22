const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
 

.setColor("000000")
.setTitle("Eğlence Yardım")
.setThumbnail("https://cdn.discordapp.com/attachments/625047644040855552/625082441350250497/dribbble-c.gif")//saol emirhan ^^
.addField("**⚙️ c!düello**", "İstediğiniz biri ile düello atmanızı sağlar." )
.addField("**⚙️ c!boks-makinesi**", "Boks Makinesine vurursunuz.")
.addField("**⚙️ c!csgo-kasa-açma**  ", "Csgo daki kasa açma heyecanını buradada yaşabilirsiniz hemde BEDAVA.")
.addField("**⚙️ c!havadurumu {il}** ", "Yazdığınız ilin hava durumunu gösterir ")  
.addField("**⚙️ c!kullanıcı-bilgi {kullanıcı} **", "Etiketlediğiniz(yada kendinizin)kullanıcı bilgisini alırsınız")
.addField("**⚙️ c!mcbody {skin ismi}**", "Minecarft taki skin i atar" )
.addField("**⚙️ c!ping**", "Botun pingini atar")
.addField("**⚙️ c!sev {@kişi}**  ", "O kişi sevdiğinizi gösterirsiniz")
.addField("**⚙️ c!seviye [@kullanıcı/renk/resim] [renk kodu/resim URLsi/sıfırla] **", "Yazdıklarınıza göre seviyenizi görürsünüz")  
.addField("**⚙️ c!sunucubilgi** ", "Sunucu hakkında bilgi edinirsiniz")
.addField("**⚙️ c!talep**", "Talep açarak yetkililerden destek alabilirsin" )
.addField("**⚙️ c!yardım**", "Sunucudaki kullana bileceğin komutları görürsün")
.addField("**⚙️ c!davet**  ", "Botu kendi sunucuna getirebilirsin")
.addField("**⚙️ c!avatar** ", "Avatarını görebilirsin")  
.addField("**⚙️ c!istatistik** ", "İstatistik")
.addField("🔻", "[Minecraft Sunucumuza Gelmek istiyosan](https://discord.gg/54kT2t)")
.addField("🔻", "[Botu Kendi sunucuna eklemek istiyorsan buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390)")  
.setFooter("Camelot Bot™ tüm haklar saklıdır" )  
.setDescription("Camelot Bot™ tüm haklar saklıdır.")
.setURL("https://discordapp.com/oauth2/authorize?client_id=617440836803756185&scope=bot&permissions=805306390")

message.channel.send(embed)
 
    };

    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence', 'eg'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'eğlence gösterir.',
  usage: 'komutlar '
};