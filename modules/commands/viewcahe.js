module.exports.config = {
	name: "viewcache",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "xem file trong thư mục cache",
	commandCategory: "Admin",
	usages: "\ncache start <text>\ncache ext <text>\ncache <text>\ncache [để trống]\ncache help\nNOTE: <text> là ký tự bạn điền vào tùy ý",
	cooldowns: 5
};

module.exports.handleReply = ({ api, event, handleReply }) => {
	if(event.senderID != handleReply.author) return; 
	const fs = global.nodemodule["fs-extra"];
	var filego = []
		pathus = __dirname+`/cache/${handleReply.files[event.body -1]}`
		filego.push(fs.createReadStream(pathus)); 
		api.unsendMessage(handleReply.messageID)
		api.sendMessage({body: `View success ✅`, attachment: filego}, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 30000));
}
module.exports.run = async function({ api, event, args }) {
  
  const fs = global.nodemodule["fs-extra"];
  var files = fs.readdirSync(__dirname+"/cache") || [];
  var msg = "", i = 1;
  
//

  if(args[0] == 'help') {
    	//❎ko edit tên tác giả❎
	var msg = `
  👉Module code by NTKhang👈
Cách dùng lệnh:

•Key: start <text>
•Tác dụng: Lọc ra file cần xem có ký tự bắt đầu tùy chọn
•Ví dụ: cache rank

•Key: ext <text>
•Tác dụng: Lọc ra file cần xem có đuôi tùy chọn
•Ví dụ: cache png

•Key: <text>
•Tác dụng: lọc ra các file trong tên có text tùy chỉnh
•Ví dụ: cache a

•Key: để trống
•Tác dụng: lọc ra tất cả các file trong cache
•Ví dụ: cache

•Key: help
•Tác dụng: xem cách dùng lệnh
•Ví dụ: cache help`;
	
	return api.sendMessage(msg, event.threadID, event.messageID);
  }
  else if(args[0] == "start" && args[1]) {
  	var word = args.slice(1).join(" ");
  	var files = files.filter(file => file.startsWith(word));
  	
    if(files.length == 0) return api.sendMessage(`Không có file nào trong cache có ký tự bắt đầu bằng: ${word}`, event.threadID ,event. messageID);
    var key = `Có ${files.length} file có ký tự bắt đầu là: ${word}`;
  }
  
  //đuôi file là..... 
  else if(args[0] == "ext" && args[1]) {
  	var ext = args[1];
  	var files = files.filter(file => file.endsWith(ext));
  	
  	if(files.length == 0) return api.sendMessage(`Không có file nào trong cache có ký tự kết thúc bằng: ${ext}`, event.threadID ,event. messageID);
  	var key = `Có ${files.length} file có đuôi là: ${ext}`;
  }
  //all file
  else if (!args[0]) {
  if(files.length == 0) return api.sendMessage("Cache của bạn không có file hoặc folder nào", event.threadID ,event. messageID);
  var key = "Tất cả các file trong thư mục cache:";
  }
  //trong tên có ký tự.....
  else {
  	var word = args.slice(0).join(" ");
  	var files = files.filter(file => file.includes(word));
  	if(files.length == 0) return api.sendMessage(`Không có file nào trong tên có ký tự: ${word}`, event.threadID ,event. messageID);
  	var key = `Có ${files.length} file trong tên có ký tự: ${word}`;
  }
  
  	files.forEach(file => {
    	var fileOrdir = fs.statSync(__dirname+'/cache/'+file);
    	if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
    	if(fileOrdir.isFile() == true) var typef = "[File📄]";
    	msg += (i++)+'. '+typef+' '+file+'\n';
    });
    
     api.sendMessage(`Reply tin nhắn bằng số để xem file tương ứng.\n${key}\n\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
  	name: this.config.name,
  	messageID: info.messageID,
    author: event.senderID,
  	files
  }))
 
}