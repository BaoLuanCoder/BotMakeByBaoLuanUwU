module.exports.config = {
	name: "cuddle",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VDT&NTH",
	description: "cuddle",
	commandCategory: "Anime V2",
	usages: "cuddle [Text]",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://nekos.life/api/v2/img/cuddle').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/dog.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dog.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dog.${ext}`)).on("close", callback);
			})
}
