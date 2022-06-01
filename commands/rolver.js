const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
  name: "rolver",
  description: "Rolverme Komutu",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Rolleri Yönet Yetkiniz Bulunmamakta.")
let user = message.mentions.users.first();
let rol = message.mentions.roles.first();
if(!user) return message.reply("Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return message.reply("Lütfen Verilecek Rolü Belirtiniz.")
//norex
message.guild.members.cache.get(user.id).roles.add(rol)
const embed = new Discord.MessageEmbed()
.setColor("GOLD")
.setAuthor("Rol Verdin Sana Knk .D")
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)

message.reply({embeds:[embed]})
}
};
