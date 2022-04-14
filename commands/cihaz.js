const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cihaz",
  description: "Etiketlenen kişinin bağlantısını gösterir",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["cihaz"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first()
} else {
member = message.member;

}

let baknedicm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar (Uygulama)',
  mobile: 'Mobil'
}

let durum = (member.user.presence.status).replace('dnd', 'Rahatsız etmeyin.').replace('idle', 'Boşta.').replace('online', 'Aktif.').replace('offline', 'Çevrimdışı.');
let uyy;
if(member.user.presence.status !== 'offline') {
uyy = ` Bağlandığı cihaz: ${baknedicm[Object.keys(member.user.presence.clientStatus)[0]]}` } else { uyy = '' }
message.channel.send(`${member.user.tag} kullanıcısının durumu: ${durum}${uyy}`)
},
};
