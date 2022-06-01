const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
  name: "Rolal",
  description: "Rol Al Komutu",
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

message.guild.members.cache.get(user.id).roles.remove(rol)
const embed = new Discord.MessageEmbed()
.setColor("GOLD")
.setAuthor("Rolünü Aldım Cnm Hakkını Helal Et")
.setDescription(`${user}, isimli kişiden ${rol} isimli rol alındı.`)
//norex
message.reply({embeds:[embed]})
}
};
