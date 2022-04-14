const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "slowmode",
  description: "Kullandığınız kanalda slowmode aktif olur",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["slow"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!args[0])
      return message.channel.send(
        `Yavaş modu ayarlamam için bir sayı yazmalısın!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      GuildDB.prefix + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Qu'wicLy!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
    );
  },
  SlashCommand: {
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!args[0])
      return message.channel.send(
        `Yavaş modu ayarlamam için bir sayı yazmalısın!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      GuildDB.prefix + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Qu'wicLy!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
    );
  },
},
};
