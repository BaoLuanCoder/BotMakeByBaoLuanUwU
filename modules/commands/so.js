const fs = require("fs");
module.exports.config = {
name: "Sợ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "sợ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sợ")==0 || (event.body.indexOf("sợ")==0)) {
		var msg = {
				body: "Ui sợ quá sợ quá",
				attachment: fs.createReadStream(__dirname + `/noprefix/so.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
