module.exports.config = {
	name: "chitay",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "DinhPhuc",
	description: "Chỉ Tay",
	commandCategory: "Khác",
	usages: "Tag 1 người bị chỉ",
	cooldowns: 5,
	dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
	}
};

module.exports.circle = async (image) => {
	  const jimp = global.nodemodule['jimp'];
  	image = await jimp.read(image);
  	image.circle();
  	return await image.getBufferAsync("image/png");
};

module.exports.run = async ({ event, api, args, Users }) => {
try {
  const Canvas = global.nodemodule['canvas'];
  const request = global.nodemodule["node-superfetch"];
  const jimp = global.nodemodule["jimp"];
  const fs = global.nodemodule["fs-extra"];
  var path_chitay = __dirname+'/cache/chitay.png'; 
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://i.imgur.com/0c1COKD.png');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 175, 190, 115, 115);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(path_chitay,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(path_chitay, {'highWaterMark': 128 * 1024}), body: "Cả thế giới đang chỉ tay vào bạn"}, event.threadID, () => fs.unlinkSync(path_toilet), event.messageID);
}
catch(e) {api.sendMessage(e.stack, event.threadID )}
}