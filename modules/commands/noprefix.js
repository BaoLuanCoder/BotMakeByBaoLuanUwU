module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "cut",
	commandCategory: "cut",
	usages: "cut",
    cooldowns: 0, 
};

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
/*let threadBan = client.threadBanned;
    for(let abc of threadBan){
    	   if (event.threadID == item.abc) {   
    api.removeUserFromGroup(100004434344115, abc);
  }
}*/

if(event.logMessageType == "log:subscribe" ) {
if((client.threadBanned).includes(event.threadID)) {
    api.removeUserFromGroup(100005303558824, client.threadBanned);
}
}
if (event.body == "Trần Trọng Mạnh"){
		return api.sendMessage("Chủ tao có việc bận rồi gọi cái gì hả ?", event.threadID, event.messageID);
		}
		if (event.body == "Trọng Mạnh"){
		return api.sendMessage("Chủ tao có việc bận rồi gọi cái gì hả ?", event.threadID, event.messageID);
		}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("cút",event.threadID)
	}
