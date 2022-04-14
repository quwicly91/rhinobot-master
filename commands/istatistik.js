const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

module.exports = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["istatistik"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
   const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`© Developed ${message.guild.me.displayName}`, client.user.displayAvatarURL())
    .addField("<a:RainbowOkGif:843139301901860864>**Botun Sahibi**<a:SolRainbowokGif:843139295560466472>", `<a:RainbowElmasGif:843139609848578048><@238593242214432768><a:RainbowElmasGif:843139609848578048>`)
    .addField("<a:RainbowOkGif:843139301901860864>**Gecikme süreleri**","Mesaj Gecikmesi: \`\`{ping1}\`\` ms \nBot Gecikmesi: \`\`{ping2}\`\`  ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:RainbowOkGif:843139301901860864>**Bellek kullanımı**",`\`\`${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2)} MB\`\``,true)
    .addField("<a:RainbowOkGif:843139301901860864>**Çalışma süresi**", seksizaman, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Kullanıcılar**<a:hypeshiny:843139633747197992>",`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Sunucular**<a:hypeshiny:843139633747197992>", `\`\`${client.guilds.cache.size.toLocaleString()}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Kanallar**<a:hypeshiny:843139633747197992>", `\`\`${client.channels.cache.size.toLocaleString()}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Node.JS sürüm**", `\`\`${process.version}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Discord.JS sürüm**", `\`\`v${Discord.version}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Tespit edilen hata sayısı**", client.voice.connections.size, true)
    .addField("<a:RainbowOkGif:843139301901860864>**CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:RainbowOkGif:843139301901860864>**Bit**", `\`${os.arch()}\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("<a:RainbowOkGif:843139301901860864>**Bot Davet**"," [✨ Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
    message.channel.send(embed);
  },
};