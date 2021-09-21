const Discord = require('discord.js'); //เรียก discord.js มาใช้
const bot = new Discord.Client(); //ประกาศ client ขึ้นมา
const messageHandle = require('./handlerEvent/messageHandler')
bot.on('ready', () => {
  console.log('Aungpao Ready !!!');
  bot.user.setActivity('พิมพ์ -ap help เพื่อดูคำสั่งต่างๆ',{type:'PLAYING'});
});

bot.on('message', message => { messageHandle.messageHandle(message) });

// bot.login(process.env.BOT_TOKEN);
bot.login('NzAyOTEzMzk5ODAxMTE4OTEx.XqG9Hg.W81A4ZoBhfZXU1Nu_SJu_5v5ZEk');