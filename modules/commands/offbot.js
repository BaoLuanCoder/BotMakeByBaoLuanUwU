module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye Mọi Người, Bot Của Bảo Luân Đi Ngủ Đây <3",event.threadID, () =>process.exit(0))