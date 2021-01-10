const Discord = require('discord.js'); //เรียก discord.js มาใช้
const bot = new Discord.Client(); //ประกาศ client ขึ้นมา
const messageHandle = require('./handlerEvent/messageHandler')
bot.on('ready', () => {
  console.log('Aungpao Ready !!!');
  bot.user.setActivity('พิมพ์ -ap help เพื่อดูคำสั่งต่างๆ',{type:'PLAYING'});
});

bot.on('message', message => { messageHandle.messageHandle(message) });

bot.login('NzAyOTEzMzk5ODAxMTE4OTEx.XqG9Hg.iryHnbGUpTjQ5sWO4QMl-DmcQ_U');