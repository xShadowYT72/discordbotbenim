const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykümselam, botun 7/24 aktif!');
  }
});

client.login(process.env.TOKEN); 
