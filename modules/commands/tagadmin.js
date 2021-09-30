module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.event = function({ api, event }) {
  if (event.senderID !== "100023218892470") {//id bot
    var aid = ["100038379006171", " "];//id admin(s)
    for (const id of aid) {
      if (Object.keys(event.mentions) == id) {
        var msg = ["Gọi admin có việc gì không?", "tag admin ăn cac à"];//(các) câu bot rep
        return api.sendMessage({
          body: msg[Math.floor(Math.random() * msg.length)]
        }, event.threadID, event.messageID);
      }
    }
  }
};
module.exports.run = async function({ }) {
}