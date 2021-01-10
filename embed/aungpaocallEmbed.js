function getMessage() {
  var mes = ['เมี๊ยววววว', 'เรียกทำไม', 'มีอะไรค่าาา', 'ว่าไงจะเรียกอะไรนักหนา', 'นอนอยู่อย่ามายุ่ง']
  return mes
}

function aungpaoEmbed(n) {
  let message = getMessage();
  const aungpaoEmbed = {
    color: 0x0099ff,
    title: message[n],
    author: {
      name: 'AungpaoBOT',
      icon_url: 'https://cdn.discordapp.com/app-icons/702913399801118911/8a907d66b01185a3db0b6b7e8fab7b53.png?size=256',
    },
    timestamp: new Date(),
  };
  return aungpaoEmbed;
}

module.exports = { getMessage, aungpaoEmbed }