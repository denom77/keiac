const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1259800867385905243')
        .setType('PLAYING')
        .setURL('https://discord.gg/ZSvn6Zt5uT')
        .setState('& Akun. Aman & Terpercaya')
        .setName('Kei Store')
        .setDetails('Menjual Jasa Top up, Jasa Joki')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1190619079011225670/1260564002862399498/c49e2ffe-b8c6-4be0-82d6-5d5397df6f76.jpg?ex=668fc736&is=668e75b6&hm=486b165835cb5ecd600281d61f0fed60f9cecca91004915f7558f67ee7875776&')
        .setAssetsLargeText('Trusted')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1190619079011225670/1260563932058484797/vraje.gif?ex=668fc725&is=668e75a5&hm=72216e0fff9869baab145ac1d41bf18d7e1b5a3c72f4d7bfbf7b54bdb4988a34&')
        .setAssetsSmallText('Verified')
        .addButton('Join Discord Server', 'https://discord.gg/ZSvn6Zt5uT')
        .addButton('Order? Wa', 'https://wa.me/6282132910644');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
