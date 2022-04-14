const { MessageEmbed } = require("discord.js");
const track = require('novelcovid');

module.exports = {
  name: "corona",
  description: "Türkiye Corona Verileri",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["corona"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    track.all().then(data => {
  var track = require('novelcovid');
track
    .countries()
    .then(data => {
    let embed = new MessageEmbed()
     .setColor('RED')
     .setTimestamp()
     .setFooter(`© Developed ${message.guild.me.displayName}`, client.user.displayAvatarURL())
     .addField("Korona Turkey Verileri", `:mask:Vaka: ${data.find(a => a.country === "Turkey").cases} \n:skull:Vefat: ${data.find(a => a.country === "Turkey").deaths} \n:anger:Kritik: ${data.find(a => a.country === "Turkey").critical} \n:white_check_mark:İyleşmiş: ${data.find(a => a.country === "Turkey").recovered}`)
      message.channel.send(embed);
    })
    })
  },
};
