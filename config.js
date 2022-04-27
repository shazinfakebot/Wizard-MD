//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')
const fetch = require('node-fetch')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['918590508376'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['918590508376'] //another owner number
global.premium = ['918590508376'] //premium number
global.pengguna = 'ᴀᴊᴍᴀʟ sᴇʀ' //username
global.botnma = 'ᴡɪᴢᴀʀᴅ ᴍᴅ' //bot name
global.ownernma = 'ᴀᴊᴍᴀʟ sᴇʀ' //owner name
global.packname = 'ᴡɪᴢᴀʀᴅ ᴘᴀᴄᴋ' //sticker package name
global.author = 'ʙʏ ᴀᴊᴍᴀʟ' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '├✪' //design
global.gclink = 'https://chat.whatsapp.com/HZ4c5yrsd0g8OfELZGySFZ'
global.gitowner = 'https://github.com/Ajmal-Achu'
global.sc = 'https://github.com/Ajmal-Achu/Wizard-MD'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumburl = 'https://telegra.ph/file/1c76c40e54e96bd51708a.jpg'
global.br = 'https://telegra.ph/file/8c1c4ddb2c855e6ba78f9.jpg'
global.menall = 'https://telegra.ph/file/713e4149b9d5f897f429a.jpg'
global.dow = 'https://telegra.ph/file/a742cbdc64d6c6303cd96.jpg'
global.sear = 'https://telegra.ph/file/68dbbad242888b38fff03.jpg'
global.im = 'https://telegra.ph/file/6c262e00d19a2ebb474a2.jpg'
global.fu = 'https://telegra.ph/file/2af34a84514eaad58c3e2.jpg'
global.conv = 'https://telegra.ph/file/6cc49709834f2b71c5c31.jpg'
global.dat = 'https://telegra.ph/file/205348efbcf9052ace2dc.jpg'
global.voc = 'https://telegra.ph/file/f28b44884b76cbbca3ea4.jpg'
global.misc = 'https://telegra.ph/file/433b832c5f5117a1ba643.jpg
global.ano = 'https://telegra.ph/file/506c59298235cf423d20a.jpg'
global.syst = 'https://telegra.ph/file/80e031ff6e3d742adaf9e.jpg'
global.speci = 'https://telegra.ph/file/7b6c887886a185c2ebe7d.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
