function createCovidEmbed(data) {
  const embed = {
    color: 0xa71b1b,
    title: 'Covid Daily',
    description: 'อัพเดทโควิดในแต่ละวัน',
    author: {
      name: 'AungpaoBOT Covid Notification',
      icon_url: 'https://cdn.discordapp.com/app-icons/702913399801118911/8a907d66b01185a3db0b6b7e8fab7b53.png?size=256'
    },
    fields: [
      {
        name: 'วันที่',
        value: data.UpdateDate
      },
      {
        name: 'จำนวนผู้ติดโควิด',
        value: data.NewConfirmed,
        inline: true
      }, {
        name: "จำนวนผู้ที่กำลังรักษา",
        value: data.NewRecovered,
        inline: true
      }, {
        name: "จำนวนผู้ป่วยที่รักษาหายแล้ว",
        value: data.NewHospitalized,
        inline: true
      }, {
        name: "จำนวนผู้เสียชีวิต",
        value: data.NewDeaths,
        inline: true
      }
    ],
    timestamp: new Date()
  }
  return embed
}

module.exports = { createCovidEmbed }