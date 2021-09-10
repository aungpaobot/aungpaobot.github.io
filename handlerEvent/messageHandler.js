const fetch = require('node-fetch');
const ytdl = require('ytdl-core');

const helpEmbed = require('../embed/helpEmbed')
const bestwebsiteEmbed = require('../embed/bestwebsiteEmbed')
const covidEmbed = require('../embed/covidEmbed')
const aungpaoEmbed = require('../embed/aungpaocallEmbed')
const inviteEmbed = require('../embed/inviteEmbed')
const catEmbed = require('../embed/catGIFEmbed')
const dogEmbed = require('../embed/dogEmbed')

function messageHandle (message) {
  const args = message.content.toLowerCase().split(' ');
  if (args[0] === '-ap') {
    if (args[1] === 'aungpao' || args[1] === 'อั่งเปา') {
      let n = Math.floor(Math.random() * aungpaoEmbed.getMessage().length);
      message.channel.send({ embed: aungpaoEmbed.aungpaoEmbed(n) });
      return;
    } if (args[1] === 'test') {
      //Test Only
      console.log(message)
      
    } else if (args[1] === 'avatar') {
      message.channel.send(message.author.displayAvatarURL(), '');
    } else if (args[1] === 'help') {
      message.channel.send({ embed: helpEmbed });
    } else if (args[1] === 'thebestwebsite') {
      message.channel.send({ embed: bestwebsiteEmbed });
    } else if (args[1] === '1603') {
      date1 = new Date(2021, 02, 16);
      date2 = new Date();
      diff = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
      message.channel.send(diff);
    } else if (args[1] === 'covid' || args[1] === 'cvd') {
      fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((response) => {
        return response.json()
        }).then((data) => {
          message.channel.send({ embed: covidEmbed.createCovidEmbed(data[0]) });
        })
    } else if (args[1] === 'invite') {
        message.channel.send({ embed: inviteEmbed });
    } else if (args[1] === 'cat') {
      if(parseInt(args[2]) > 0){
        message.channel.send({ embed: catEmbed.createEmbed(parseInt(args[2])-1) }).then(() => {
          message.react('😍')
        });
      }else{
        let n = Math.floor(Math.random() * catEmbed.getStorage().length);
        message.channel.send({ embed: catEmbed.createEmbed(n) }).then(() => {
          message.react('😍')
        });
      }
    } else if (args[1] === 'dog') {
      message.channel.send({ embed: dogEmbed })
    }else {
      message.channel.send('พิมพ์ \" -ap help \" เพื่อดูคำสั่งเพิ่มเติม');
    }

  }
}

module.exports = { messageHandle }