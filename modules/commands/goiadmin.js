module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100044203742700"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Chủ tao đi sục cặc rồi, ib thẳng đi súc vật, FB nè:https://www.facebook.com/BuiLeBaoLuanOFFICIAL/"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }