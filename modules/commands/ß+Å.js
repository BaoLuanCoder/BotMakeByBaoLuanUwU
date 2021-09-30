const fs = require("fs");
module.exports.config = {
name: "ỏ",
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
    if (!fs.existsSync(dirMaterial + "ỏ.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/210918529_4165651716829975_2201208960152983099_n.mp4/video-1631343746.mp4?_nc_cat=103&ccb=1-5&_nc_sid=060d78&_nc_ohc=M3_1XwZE6YsAX9sCEh3&vabr=781845&_nc_ht=video.xx&oh=7a4d3235adc5584cecf47bb51a35993d&oe=613D536A&dl=1").pipe(fs.createWriteStream(dirMaterial + "ỏ.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ỏ")==0 || (event.body.indexOf("ỏ")==0)){
	  var msg = {
				body: "Hôm nay trời đẹp thế nhờ..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
