module.exports.config = {
	name: "rnamebox",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Đổi biệt danh của bot ở toàn bộ bot!",
	commandCategory: "system",
	usages: "rnamebox [Biệt danh cần đặt]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, __GLOBAL, args, Threads, client }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại" + threadError.lenght + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
        for (const idThread of allThread) {
            const threadSetting = client.threadSetting.get(idThread.threadID) || {};
            api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : __GLOBAL.settings.PREFIX} ] • ${(!__GLOBAL.settings.BOTNAME) ? "Made by CatalizCS and SpermLord" : __GLOBAL.settings.BOTNAME}`, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại " + threadError.length + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
}