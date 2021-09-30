const fs = require("fs");
module.exports.config = {
name: "Nực cười",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Hôm nay trời đẹp thế nhờ!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "nuc.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/193656270_4181493725248300_1926915394155086495_n.mp4/video-1631416553.mp4?_nc_cat=104&ccb=1-5&_nc_sid=060d78&_nc_ohc=1_qYKHC3pDAAX_7i5Ja&vabr=317994&_nc_ht=video.xx&oh=ac7b1bb6ab2d165ca39a853eba9f6773&oe=613EA2F8&dl=1").pipe(fs.createWriteStream(dirMaterial + "nuc.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nực cười")==0 || (event.body.indexOf("Nực cười")==0)){
	  var msg = {
				body: "Bạn nói thật là nực cười",
				attachment: fs.createReadStream(__dirname + `/noprefix/nuc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
