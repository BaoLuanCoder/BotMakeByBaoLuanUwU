module.exports.config = {

name: "thayboi",

version: "1.1.2",

hasPermssion: 0,

credits: "Khánh Milo",

description: "",

commandCategory: "Other",

usages: "",

cooldowns: 5,

dependencies: {"axios":""}

};



module.exports.run = async function ({ api, event }) {



const axios = global.nodemodule["axios"];



var data = (await axios.get("https://4boxvn.com/api/thayboi")).data;



return api.sendMessage(data.data, event.threadID, event.messageID);



}