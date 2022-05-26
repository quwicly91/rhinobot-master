const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
  name: "zar",
  description: "Zar Atma Kodu",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["zar","zr","z"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
  var oyun = [
`1`,
`2`,
`3`,
`4`,
`5`,
`6`
]
 
         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`:game_die: Zarın:${oyun[random]}`)
.setTimestamp()
.setFooter(`© 2022 ${client.user.username} Zar Sistemi`, client.user.avatarURL({ size:1024, dynamic:true, format:'png' }))
message.channel.send(embed)
}
};

SlashCommand: {
    options: [
      {
       name: "zar",
  description: "Zar Atma Kodu",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["zar","zr","z"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
  var oyun = [
`1`,
`2`,
`3`,
`4`,
`5`,
`6`
]
 
         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`:game_die: Zarın:${oyun[random]}`)
.setTimestamp()
.setFooter(`© 2022 ${client.user.username} Zar Sistemi`, client.user.avatarURL({ size:1024, dynamic:true, format:'png' }))
message.channel.send(embed)
}
};
      );
    },
  },
};
