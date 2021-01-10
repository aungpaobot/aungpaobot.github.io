function createEmbed(n){
  let data = getStorage();
  const embed = {
    title:'Cat GIF ('+data[n].no+')',
    description: data[n].text,
    color: 9891236,
    image: {
      url: data[n].img
    },
    timestamp: new Date(),
    footer: {
      text: "Create by SymonHoiji • Credit Giphy"
    }
  }
  return embed
}

function getStorage () {
  const storage = [
    { 
      no: 1,
      img: 'https://media3.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
      text: 'อย่ามาทำให้ฉันโกรธน้าาาา'
    },
    { 
      no: 2,
      img: 'https://media4.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=ecf05e47d1e970f27a07611c3a29ba9aca500ab2276e46a0&rid=giphy.gif',
      text: 'ต้องเคลียงานให้เสร็จแล้ววววววววววววววววว'
    },
    { 
      no: 3,
      img: 'https://media0.giphy.com/media/f0TvnEmF5yPLO/giphy.gif?cid=ecf05e479b91bc9e1877f7fe1ad7ab9b08d5e8bd09e74661&rid=giphy.gif',
      text: 'งาน งาน งาน งาน งาน'
    },
    { 
      no: 4,
      img: 'https://media4.giphy.com/media/CqVNwrLt9KEDK/giphy.gif?cid=ecf05e47gdcs1z03jswvf50zgdg8vpxr0u338brzjj6okolm&rid=giphy.gif',
      text: 'เมื่อกี้ว่าไงนะ'
    },
    { 
      no: 5,
      img: 'https://media4.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif?cid=ecf05e47gdcs1z03jswvf50zgdg8vpxr0u338brzjj6okolm&rid=giphy.gif',
      text: 'OMGGGGG'
    },
    {
      no: 6,
      img: 'https://media0.giphy.com/media/nR4L10XlJcSeQ/giphy.gif?cid=ecf05e47o9o2cjzkm4fli75lasqwyyulu73qeukx7kz1tfnf&rid=giphy.gif',
      text: 'ป๋มไม่เอาก๊าบบบบบบบบบบบบ'
    },
    {
      no: 7,
      img: 'https://media3.giphy.com/media/E0cyxhawhe9dm/giphy.gif?cid=ecf05e474mrwoh6p9e0dathf5bx404512k85ns9zv5llwoeh&rid=giphy.gif',
      text: 'มานี้เลยเจ้าทาส'
    },
    {
      no: 8,
      img: 'https://media1.giphy.com/media/ryPL1D4vq2KS4/giphy.gif?cid=ecf05e47307d819e507dcbc3462289aa3dae10eb356aeed7&rid=giphy.gif',
      text: 'ขึ้เกียจจังเยยยยย'
    },
    {
      no: 9,
      img: 'https://media4.giphy.com/media/Z1kpfgtHmpWHS/giphy.gif?cid=ecf05e473e9187582ada5eaae1e1676da575c35c44f09df8&rid=giphy.gif',
      text: 'ว่าไงเจ้าทาส'
    },
    {
      no:10,
      img: 'https://media1.giphy.com/media/11AezGDEabmJBm/200.webp?cid=ecf05e478bd1c0db09636b65f768886407e70cbd8d129b4d&rid=200.webp',
      text: 'ออกปายยยยยยยยยยยยยยยยยยย'
    },
    {
      no:11,
      img: 'https://media0.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=ecf05e4760028d0d1480d2002351ffeae26a29539a0811ea&rid=giphy.gif',
      text: '...'
    }
  ]
  return storage
}
module.exports = { createEmbed, getStorage }
