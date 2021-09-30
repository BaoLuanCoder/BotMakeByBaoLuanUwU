module.exports.config = {
	name: "sexy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Xem ảnh hotgirl",
	commandCategory: "NSFW",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	axios.get('https://api.vangbanlanhat.tk/image?type=Sexy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Hotgirl đây mlem mlem 🤤`,
						attachment: fs.createReadStream(__dirname + `/cache/sexy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback);
			})
}