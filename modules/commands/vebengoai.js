const fs = require("fs");
module.exports.config = {
name: "Xấu",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Vẻ bề ngoài quan trọng vậy sao?",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "vebengoai.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241512068_4557452074312384_2035264572212798597_n.mp4/video-1631347164.mp4?_nc_cat=109&ccb=1-5&_nc_sid=060d78&_nc_ohc=3Fue23taVb4AX_fO01o&vabr=297374&_nc_ht=video.xx&oh=98df41cf9fadf1964ac9b6271d2ff890&oe=613D6A41&dl=1").pipe(fs.createWriteStream(dirMaterial + "vebengoai.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Xấu")==0 || (event.body.indexOf("Xấu")==0)){
	  var msg = {
				body: "Vẻ bề ngoài quan trọng đến thế sao?",
				attachment: fs.createReadStream(__dirname + `/noprefix/vebengoai.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
