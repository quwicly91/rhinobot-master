
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "Kullanıcı",
    description: "Etiketlediğiniz kullanıcının bilgilerini listeler",
    usage: "",
    enabled: true,
    guildOnly: false,
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: [],


  run(client, message, args) {
    if(args.length > 1) return message.channel.send('Sadece bir kullanıcıdan bahsedin!');
        
    if(!args[0]) return message.channel.send('Birinden bahset!');

    if(args[0]){
      
      let member = message.mentions.members.first();

      
      if(member) {
        let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(`© Developed ${message.guild.me.displayName}`, client.user.displayAvatarURL())
          .setTitle("Kullanıcı Bilgisi")
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag} (${member.id})`, "https://media.giphy.com/media/tHby4Q4vO9LBikyZhb/giphy.gif")
          .addField("**Kullanıcı adı:**", `${member.user.username}`, true)
          .addField("**Ayrımcı: **", `${member.user.discriminator}`, true)
          .addField("**ID:**", `${member.user.id}`, true)
          .addField("**Durum:**", `${member.user.presence.status}`, true)
          .addField("**Sunucuya Katılma Tarihi:**", `${member.joinedAt.toLocaleString()}`, true)
          .addField("**Oluşturulma Tarihi:**", `${member.user.createdAt.toLocaleString()}`, true)
          .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`)
      message.channel.send(embed);
      } else {
          message.channel.send(` üye bulunamadı`); 
      }
    }
  }
}