module.exports.config = {
  name: "mixi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh MixiGaming",
  commandCategory: "Hình Ảnh",
  usages: "mixi",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/QR4Owl7.jpg",
"https://i.imgur.com/zWMFqnm.jpg",
"https://i.imgur.com/cpAFLVF.jpg",
"https://i.imgur.com/VLx4zqP.jpg",
"https://i.imgur.com/cnqZRyU.jpg",
"https://i.imgur.com/lJDc68Q.jpg",
"https://i.imgur.com/PLF6sCl.jpg",
"https://i.imgur.com/hiXh1e0.jpg",
"https://i.imgur.com/7qxtuL9.jpg",
"https://i.imgur.com/GFCqVxR.jpg",
"https://i.imgur.com/s4LPMEj.jpg",
"https://i.imgur.com/fHVcDVJ.jpg",
"https://i.imgur.com/9TzORzC.jpg",
"https://i.imgur.com/E9F6Aao.jpg",
"https://i.imgur.com/heHiMLU.jpg",
"https://i.imgur.com/KjtvvPf.jpg",
"https://i.imgur.com/9Kav0ml.jpg",
"https://i.imgur.com/2m1cwZm.jpg",
"https://i.imgur.com/pMbI9aF.jpg",
"https://i.imgur.com/KSLMQub.jpg",
"https://i.imgur.com/bEZwIzm.jpg",
"https://i.imgur.com/dOYl5TN.jpg",
"https://i.imgur.com/nm4SE3p.jpg",
"https://i.imgur.com/XbiIqB5.jpg",
"https://i.imgur.com/8n7Hzq1.jpg",
"https://i.imgur.com/7lcv0c9.jpg",
"https://i.imgur.com/QR4Owl7.jpg",
"https://i.imgur.com/2XxUU3Q.jpg",
"https://i.imgur.com/MUI8rIi.jpg",
"https://i.imgur.com/K4PY4cz.jpg",
"https://i.imgur.com/nT1l1WS.jpg",
"https://i.imgur.com/p1vU1O9.jpg",
"https://i.imgur.com/FbsNUFH.jpg",
"https://i.imgur.com/xvVlLC2.jpg",
"https://i.imgur.com/om6j9Kh.jpg",
"https://i.imgur.com/B3N2oJZ.jpg",
"https://i.imgur.com/zmpCF6M.jpg",
"https://i.imgur.com/kK8FXgI.jpg",
"https://i.imgur.com/lHEqYBk.jpg",
"https://i.imgur.com/8YkFWGh.jpg",
"https://i.imgur.com/QSt3psG.jpg",
"https://i.imgur.com/8GNFWs5.jpg",
"https://i.imgur.com/7WHJBJx.jpg",
"https://i.imgur.com/dt8g351.jpg",
  ];
   var callback = () => api.sendMessage({body:`Ảnh MixiGaming\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/39.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/39.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/39.jpg")).on("close",() => callback());
   };