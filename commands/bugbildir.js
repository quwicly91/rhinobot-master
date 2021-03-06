const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "bugbildir",
  description: "bot hakkında bug bildirimi için",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["bug"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
//const owner = client.channels.cache.get('kanal id si');
 const owner = client.users.cache.get('238593242214432768');
    
    const query = args.join(" ");
    if(!query) return message.reply('Lütfen bir sorun belirtin.');
  
    const reportEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`© Developed ${message.guild.me.displayName}`, client.user.displayAvatarURL())
    .setAuthor('Yeni Bir Bug Bildirimi!', "https://media.giphy.com/media/tHby4Q4vO9LBikyZhb/giphy.gif")
    .addField(':bust_in_silhouette: **Bildirim Yapan:**', message.author.toString(), true)
    .addField(':computer: **Sunucu:**', message.guild.name, true)
    .addField(':credit_card: **Sunucu Kimliği:**', message.guild.id, true)
    .addField(':loudspeaker: **Bildirim:**', query)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    owner.send(reportEmbed)
  },
};
