const Discord = require('discord.js'); 
const voiceChannel = new Discord.GuildChannel;
const ytdl = require('ytdl-core');

voiceChannel.join().then(connection => {
	const stream = ytdl('<youtubelink>', { filter: 'audioonly' });
	const dispatcher = connection.play(stream);
	
	dispatcher.on('finish', () => voiceChannel.leave());
})