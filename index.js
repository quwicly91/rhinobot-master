const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();
const Discord = require("discord.js")

client.build();
module.exports = client;({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.on("guildCreate", async guild => {
  const quwicly = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`© Developed by Qu'wicLy`, client.user.displayAvatarURL())
    .setAuthor(`${guild.name} Adlı Sunucuna ${client.user.username} başarıyla eklendi`,client.config.Icon2URL)
    .setDescription(`**Beni sunucuna eklediğin için teşekkürler! Kullanım ve komutlar için \`${client.botconfig.DefaultPrefix}help\`veya \`${client.botconfig.DefaultPrefix}yardım \` yazman yeterli iyi eğlenceler!
    
    Thanks for adding me to the server! For usage and commands, just write \`${client.config.DefaultPrefix}help\`or \`${client.config.DefaultPrefix}yardım \` have fun!
    **`)
    .addField(">**Destek Sunucsu**"," [Destek Sunucsu](https://discord.gg/BmkDCJwbeT)")
    .setImage('https://media.giphy.com/media/SWWR2NaACUu5qmf0Uo/giphy.gif')
    .setThumbnail(client.user.avatarURL());
guild.owner.user.send(quwicly);
});

const guildInvites = new Map()
client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
            .catch(err => console.log(err));
    });
});

client.on('guildMemberAdd', async member => {
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses) || "1";
        const quwicly = new Discord.MessageEmbed()
            .setColor("GREEN")
.setTimestamp()
.setFooter(`© Developed by Qu'wicLy Sayaç sistemi `, client.user.avatarURL())
.setTitle("<a:GiriGif:843971023137538100> Sunucuya yeni bir üye katıldı!")
.setThumbnail(member.user.avatarURL)
.setDescription(`**\`${member.user.username}\` Sunucuya hoşgeldin <a:ElSallamaGif:843971062395568128> seninle beraber \`${member.guild.memberCount}\` kişiye ulaştık.**`)
.addField(`<a:raninbowp:843971041889222656> Katılan üye Adı`, `${member}`, true)
.addField(`<a:raninbowp:843971041889222656> Davet eden kişi`, `${usedInvite.inviter}`, true)
.addField("**Sunucuya Katılma Tarihi:**", `\`${member.joinedAt.toLocaleString()}\``, true)
.addField("**Oluşturulma Tarihi:**", `\`${member.user.createdAt.toLocaleString()}\``, true)
.addField(`Bu davet kodu \`${usedInvite.uses}\` kere kullanılmış.`,`Davet Kodu: \`${usedInvite}\``,true)
const logChannel = member.guild.channels.cache.find(channel => channel.name === "giriş-çıkış-log");  
      if(logChannel) {
            logChannel.send(quwicly).catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
});

client.on(`guildMemberRemove`, async member => {
const quwicly = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setFooter(`© Developed by Qu'wicLy Sayaç sistemi `, client.user.avatarURL())
.setTitle("<a:kGif:844175690570924063> Sunucudan ayrıldı!")
.setThumbnail(member.user.avatarURL)
.setDescription(`**\`${member.user.username}\` Sunucudan ayrıldı, sensiz \`${member.guild.memberCount}\` kişiyiz :(**`)
.addField(`<a:raninbowp:843971041889222656> Üye Adı:`, `${member}`, true)
const logChannel = member.guild.channels.cache.find(channel => channel.name === "giriş-çıkış-log");  
      if(logChannel) {
            logChannel.send(quwicly)
        }
});

client.on("guildMemberAdd", member => {
const quwicly = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTimestamp()
.setFooter(`© Developed by Qu'wicLy`, client.user.displayAvatarURL())
.setAuthor(`Hey! ${member.user.tag} Sunucuya Hoşgeldin!`,client.botconfig.Icon2URL)
.setThumbnail(member.user.displayAvatarURL())
.setDescription('**Lütfen kuralları okumayı unutma iyi eğlenceler! Genel sohbete yazı yazdığınızda ya da sesli odalarımıza girdiğinizde kuralları okumuş ve kabul etmiş sayılacaksınız.**')
.setImage('https://media.giphy.com/media/YOT0zQXXuBfcZkA1WU/giphy.gif')
member.send(quwicly)
})
