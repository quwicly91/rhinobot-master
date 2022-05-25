const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "",
  description: "iftar zamanını gösterir",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: [""],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
  const embed = new Discord.MessageEmbed()
  const city = args[0];
    if (!city) return message.channel.send('Şehir adı girmelisiniz.');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 4Zr4x9ouWyXxQLCe4tqHij:6nH6cTfc0E4qfxrGRAjD6L"
        }
    }).then(res => {
        const messageEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(`> ${city} şehri için iftar saati ${res.data.result[0].time}`,"https://media.giphy.com/media/1qb0OTg9ud1CRv60vS/giphy.gif" )
        .setDescription(`\`\`\`İftar Vaktine Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\``)
        .setImage("https://www.gelisenbeyin.net/img/ramazan-oruc.gif")  
        .setTimestamp()
        .setFooter(`© 2022 ${client.user.username} Vakit Sistemi`, client.user.avatarURL({ size:1024, dynamic:true, format:'png' }))
    message.channel.send(messageEmbed);
    }).catch(err => {
        message.channel.send('Bir sorun ortaya çıktı. Komudu doğru kullandığınızdan emin olun.');
        console.log(err);
    });
}


































}
