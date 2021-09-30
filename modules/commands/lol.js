module.exports.config = {
name: "Lol",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Lolllllllllllll",
	commandCategory: "NoCầnPrefix",
	usages: "ko cần prefix chỉ cần chat Lol",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("lol")==0 || (event.body.indexOf("Lol")==0)) {
		var msg = {
				body: " 💩💩 Clmm",
				attachment: fs.createReadStream(__dirname + `/noprefix/lol.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

