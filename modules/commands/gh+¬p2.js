module.exports.config = {

  name: "ghép2",

  version: "1.0.5",

  hasPermssion: 0,

  credits: "banledangyeuu",

  description: "Ghép đôi với 1 đứa trong nhóm",

  commandCategory: "Group",

  usages: "ghep",

  cooldowns: 1,

  dependencies: ["axios", "fs-extra"],

  envConfig: {

       cooldownTime: 30

  }

};



module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");

  let data = (await Currencies.getData(event.senderID)).ghepTime;

  var mention = Object.keys(event.mentions)[0];

  var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];



  if (!mention) {

    let threadInfo = await api.getThreadInfo(event.threadID);

    let all = threadInfo.participantIDs;

    await all.splice(all.indexOf(api.getCurrentUserID()), 1);

    await all.splice(all.indexOf(event.senderID), 1);

    var random = all[Math.floor(Math.random() * all.length)];

    let data = await api.getUserInfo(parseInt(random));

    let dt = await api.getUserInfo(event.senderID);

    let Avatar = (await axios.get( `https://graph.facebook.com/${random}/picture?width=512&height=512&access_token=170918394587449|sONjQBBNs316xVD31T-yuL4jfyc`, { responseType: "arraybuffer" } )).data;

    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

    let name_1 = dt[event.senderID].name;

    let name_2 = data[parseInt(random)].name;

    if (name_2 == undefined) {

      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );

      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );

      Currencies.setData(event.senderID, options = { ghepTime: Date.now() });

  } else {

      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );

      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );

      api.sendMessage( { body: `Bạn đã được ghép đôi ngẫu nhiên với với ${name_2}`, attachment: fs.createReadStream(__dirname + `/cache/avt.png`), mentions: [{ tag: name_2, id: random }] }, event.threadID );

      Currencies.setData(event.senderID, options = { ghepTime: Date.now() });

  }

  } else {

    let data = await api.getUserInfo(mention);

    let dt = await api.getUserInfo(event.senderID);

    let Avatar = (await axios.get(`https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=170918394587449|sONjQBBNs316xVD31T-yuL4jfyc` , { responseType: "arraybuffer" } )).data;

    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

    let name_1 = dt[event.senderID].name;

    let name_2 = data[mention].name;

    if (name_2 == undefined) {

      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );

      api.changeNickname( `${ data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );

      Currencies.setData(event.senderID, options = { ghepTime: Date.now() });

  } else {

      api.changeNickname( `${dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );

      api.changeNickname( `${data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );

      api.sendMessage({

          body: `Bạn đã ghép đôi với ${name_2}`,

          attachment: fs.createReadStream(__dirname + `/cache/avt.png`),

          mentions: [{ tag: name_2, id: random }]

        }, event.threadID);

      Currencies.setData(event.senderID, options = { ghepTime: Date.now() });

    }

  }

};