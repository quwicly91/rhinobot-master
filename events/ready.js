const Discord = require("discord.js");
module.exports = async client => {
  const degisenaktivite = [
    // Değişen aktivitemizin içeriğini tanımladığımız kısım.
    `${client.channels.cache.size} Kanalda!`,
    `${client.botconfig.DefaultPrefix}help🔥,${client.botconfig.DefaultPrefix}corona🔥`,
    `${client.guilds.cache.size} Sunucuda aktif!`,
    `${client.users.cache.size} Kişi!`
  ];

  setInterval(() => {
    // degisenaktivite bölümünü işte burada, setInterval kullanarak aktivite kısmının değişmesini sağlıyoruz.
    const aktivite = Math.floor(
      Math.random() * (degisenaktivite.length - 1) + 1
    ); // Math.random() fonksiyonu Javascript dilinde, belirttiğiniz sayı aralığında rastgele sayı üretmek için kullanılır.
    client.user.setActivity(degisenaktivite[aktivite]); // İşte burada .setActivity() ile botumuzun aktivite (oynuyor) kısmını değiştiriyoruz.
  }, 1000); // 30 saniyede bir değişeceğini belirttik.

  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
