// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EukdLfv8rETANss59C4wfE'
global.ig = '@fahrul_mt' // ubah aja
global.email = 'rakrohaku@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fahrul' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['15735703567'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = '𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'bot bokep' // ubah aja ini nama sticker
global.author = 'fanspage sugiono' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})