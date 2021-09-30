 module.exports.config = {
  name: "spamban",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang", ­
  description: "Tất cả người dùng sẽ bị ban nếu spam bot 6 lần /100s",
  commandCategory: "Hệ Thống",
  usages: "x",
  cooldowns: 5
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
  var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "â¡Reply tá»« "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "mayspamxem"}))
     }
   break;}
    case "mayspamxem": {
      api.sendMessage({ body: `â¡Pháº£n há»“i tá»« admin ${name}:\n--------\nâ¡${event.body}`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID}), handleReply.messID); //chá»‰ adm Ä‘Æ°á»£c rep vá» box
   break;}
     
     }
  
  
};

module.exports. run = ({api, event, args, Users,Threads}) => {
  return api.sendMessage("Tá»± Ä‘á»™ng cáº¥m ngÆ°á»i dĂ¹ng náº¿u spam bot 8 láº§n/1 phĂºt", event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ api, event, args, Users,Threads })  {
  let { senderID, messageID, threadID } = event;
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  const idbox = event.threadID;
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + 60000) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >=9) {
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
    return api.sendMessage(
    `â¡NgÆ°á»i dĂ¹ng Ä‘Ă£ bá»‹ ban\nâ¡TĂªn: ${dataUser.name}\nâ¡ID: ${senderID}\nâ¡LĂ½ do: spam bot 8 láº§n/1 phĂºt\n\nâœ”ï¸ÄĂ£ bĂ¡o cĂ¡o Ä‘áº¿n admin`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`â¡NgÆ°á»i vi pháº¡m: ${dataUser.name}\nâ¡ID: ${senderID}\nâ¡Box: ${namethread}\nâ¡ID box: ${idbox}\nâ¡LĂ½ do: spam bot 8 lần 1p đã vi phạm: ${timeDate}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "mayspamxem"
            }));
    }
    }
  )
    }
  }
};