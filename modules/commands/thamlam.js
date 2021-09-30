module.exports.config = {
name: "tham lam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tham lam",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("tham lam")==0 || (event.body.indexOf("Tham lam")==0)) {
		var msg = {
				body: "Đúng! nó tham lắm",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			return api.sendMessage(msg, threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 10000), messageID);
		}
	}
	module.exports.run = function({ api, event }) {

}