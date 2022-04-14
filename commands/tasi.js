const Discord = require("discord.js");

module.exports = {
  name: "taşıma",
  description: "Etiketlenen kişileri belirtilen kanala taşır (Yalnızca Admin kullanımı)",
  usage: "",
  enabled: true,
  guildOnly: true,
  permissions: {
    member: [],
  },
  aliases: [],

run : async (client, message, args) => {
  if (message.author.id !== "238593242214432768")
    return message.channel.send("❌ | Sahibimin Komutu Bu.");
  let c = args[0];
  if (!c) return message.channel.send("Kanal ID'si Gir!");
  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let k = 0;
  for (const [id, voiceChannel] of voiceChannels) {
    for (const [memberID, member] of voiceChannel.members) {
      member.voice.setChannel(c);
      console.log(member);
      k++;
    }
    
  }
  message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Taşıdığım Kişi Sayısı: ${k}`))
}



};
