// BOT PRIVADO BY GHOST DEV
// BASE GRINGA
// BAILEYS ATUALIZADO
// CRÉDITOS POR AJUDAR
// KARMA
// RAFATA

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const { virtex, vipi } = require('./lib/virtex.js')
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('America/Sao_Paulo').format('DD/MM')

//intem fake
flaviojsgamteng ='Kurumi Bot'
fake = 'Kurumi Bot'
//Dono
const Tag = "558181718175"		
												
// sticker
const Exif = require('./lib/exif');
const exif = new Exif();

const { dmff, follig, webjualan, sewabot, muridbot, pointft, culikmem, editing, crff, } = require('./message/store.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let imageflaviojs =  fs.readFileSync("./media/flaviojs.gif")
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let imgcel = fs.readFileSync("./media/canss.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
//fake = 'CRIADOR BOT\©Flávio Bot'
ban =[]

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _sparse = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// sticker comando
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = flaviojs = async (flaviojs, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const tanggal = moment.tz('America/Sao_Paulo').format('dddd') + ', ' + moment.tz('America/Sao_Paulo').format('LL')
        const time = moment().tz('America/Sao_Paulo').format(" H:mm:ss")
		const timeMak = moment().tz('America/Sao_Paulo').format(" H:mm:ss");
        const timeJay = moment().tz('America/Sao_Paulo').format(" H:mm:ss");
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = flaviojs.user.jid
        const ownerNumber = setting.ownerNumber
        const ownerNm = setting.owner
		const ownerName = setting.ownerName
		const botName = setting.botName
		const gopayLu = setting.gopayLu
		const pulsaLu = setting.pulsaLu
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? flaviojs.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await flaviojs.chats.all()
		const groupMetadata = isGroup ? await flaviojs.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? flaviojs.user.jid : flaviojs.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? flaviojs.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // Eu li usando o rowsId, então o comando não aparece
            let po = flaviojs.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "☕MENU BOT","footerText": "SELECIONE A LISTA DE MENU\n ABAIXO","listType": "SINGLE_SELECT","sections": list}}, {})
            return flaviojs.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        const katalog = (teks) => {
            res = flaviojs.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "Me chamo Flávio dev\nsou o criador do : Kurumi Bot", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftroli})
            flaviojs.relayWAMessage(res)
        }
        const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imageflaviojs, surface: 200, message: fake, orderTitle: 'Lista de ranking do Kurumi Bot', sellerJid: '0@s.whatsapp.net'} } }       

        const ftroli =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imgcel, surface: 200, message: fake, orderTitle: 'Me chamo Flávio dev\nsou o criador do : Kurumi Bot', sellerJid: '0@s.whatsapp.net'} } }       

        const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: fakeimage, surface: 200, message: flaviojsgamteng, orderTitle: 'Me chamo Flávio dev\nsou o criador do : Kurumi Bot', sellerJid: '0@s.whatsapp.net'} } }       
     
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      flaviojs.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           flaviojs.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? flaviojs.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : flaviojs.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           flaviojs.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return flaviojs.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/ganteng.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/flaviojs.gif')
      
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       flaviojs.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await flaviojs.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = flaviojs.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await flaviojs.groupRemove(to, [i])
        } else {
           await flaviojs.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       flaviojs.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       flaviojs.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await flaviojs.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       flaviojs.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/flaviojs.gif')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           flaviojs.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           flaviojs.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       flaviojs.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       flaviojs.sendMessage(from, hasil, type, options).catch(e => {
	       flaviojs.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Erro ao baixar e enviar mídia_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("Sem alvo..") }
           let g = await flaviojs.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = flaviojs.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await flaviojs.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} SUA POSIÇÃO ATUALIZADA ESTOU ORGULHOSO DE VOCÊ`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("Sem alvo..") }
           let g = await flaviojs.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = flaviojs.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await flaviojs.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} SEU DEPARTAMENTO ME DEIXA DE TAREFA`)
				
}
}
}
          let authorname = flaviojs.contacts[from] != undefined ? flaviojs.contacts[from].vname || flaviojs.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Boa noite🌃'
}
        if(time2 < "20:00:00"){
        var ucapanWaktu = 'Boa noite🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Boa tarde🌇'
}
        if(time2 < "12:00:00"){
        var ucapanWaktu = 'Boa tarde🏙️'
}
        if(time2 < "06:00:00"){
        var ucapanWaktu = 'Bom Dia🌅'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Boa noite🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 UPAR 」*\n\n➸ *Nome :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nParabéns!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'flaviojs', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Ele temi ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('oment').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/ganteng.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/ganteng.jpg`)},"title": `OLÁ...${pushname}NÃO SE ESQUEÇA DE PEDIR`,"description": "Kurumi Bot kang", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "Kurumi-Bot","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 DETECTOR DE LINK DE GRUPO 」*\n\nParece que você enviou um link de grupo, desculpe, você sera expulso`)
                flaviojs.groupRemove(from, [sender])
            }
        }
        
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
         //BIO DO WHATSAPP
     
      await flaviojs.setStatus(`Bot esta em Modo: ${banChats ? 'SELF' : 'PUBLICO'}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          
    if (!mek.key.fromMe && banChats === true) return;
        // Renda
             _sewa.expiredCheck(flaviojs, sewa)
             
        // mudo
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
   // AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*S Hh! A pessoa está em AFK, não se preocupe!*
➸ *Razão*  : ${getReason}
➸ *Desde a* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* voltou do AFK! Bem vindo de volta~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Leitura Automática
        flaviojs.chatRead(from, "read")
        //vn automático 
        

       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GP ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
/////DONOS INFORMAÇÕES

            switch(command){
           
         case 'donos':
               list = []
               listmenu = [`Flavio`,`Karma`]
               listmenuu = [`flavio`,`karma`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Esta é a lista de meus mestres,>\\<`,`  `, list)
               break
               
                  case 'flavio': 
               sendKontak(from, `${owner}`, `𝐅𝐋𝐀𝐕𝐈𝐎`, 'Ocupado!!')
               break
   case 'karma': 
               sendKontak(from, `559184155848`, `𝐊𝐀𝐑𝐌𝐀`, 'Ocupado!!')
               break
                case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(antical)return reply('Já foi ativado antes!')
antical = true
reply(`Anti llamadas activado con éxito`)
} else if (args[0] === "off") {
if(!antical)return reply('Foi desativado antes!')
antical = false
reply(`Desligado com sucesso a função anti-chamada`)
} else {
reply(`on/off`)
}
break       
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Ocupado!!')
               await sleep(1000)
               txtt =`Ola..... ${pushname}\nEsse é meu dono, Sobre o que você quer saber??`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'YOUTUBE'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Não hesite em bater um papo, mano',
               buttons: buttons,
               headerType: 1
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{})
               flaviojs.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await flaviojs.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
flaviojs.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//////////////////MUSICA///////////////////
               
               	case 'play':
				case 'PLAY MENU':
              if (!q) return reply('a link ou nome da música?')
              buttons = [{buttonId: `${prefix}mp4 ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/ganteng.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/ganteng.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Calma mestre estou fazendo 📌', imageMessage: imageMsg,
              contentText:`Selecione a mídia que será baixada`,buttons,headerType:4}
              prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              flaviojs.relayWAMessage(prep)
              break
               
               case 'play2':   
				  if (args.length < 1) return reply('*Digite o título?*')
                reply('Carregando.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Título : ${anu.result.title}
Fonte : ${anu.result.source}
				
*[Espere] Espere um minuto..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				flaviojs.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aqui mestre'})
					break  
					
               case 'playy':
case 'lagu':
if (args.length < 1) return reply('O que você deseja procurar?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
reply(` 𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶 ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Título :* ${res.all[0].title}
 *ID do Video :* ${res.all[0].videoId}
 *Carregado em :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Duração :* ${res.all[0].timestamp}
 *Canal :* ${res.all[0].author.name}
*link do canal:* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_NAO CONSEGUI ACHAR!!!_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_O erro de consulta inserido não existe_')
})
reply(`.𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶 ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Título :* ${res.all[0].title}
 *ID do Video :* ${res.all[0].videoId}
 *Carregado em :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Duração :* ${res.all[0].timestamp}
 *Canal :* ${res.all[0].author.name}
*Link do Canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_NAO CONSEGUI ACHAR!!!!_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break

case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await flaviojs.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=44:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     flaviojs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break
               
//////////////////MENUS//////////////////

        case 'menu':
        case 'help':               
               parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
               totalChat = await flaviojs.chats.all()
               groups = flaviojs.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = flaviojs.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               total = math(`${groups.length}*${privat.length}`)
               timestampe = speed();
               latensie = speed() - timestampe             
               menu =`Ola usuário *${pushname}*
 
┏━━⬣ 𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓
┃
┃HORA : *${moment().utcOffset('+2100').format('HH:mm:ss')}*
┃DATA : *${moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')}*
┃⬡DONO : wa.me//${owner}
┃⬡BATERIA :  ${baterai}%
┃⬡PREFIX : 𝑴𝒖𝒍𝒕𝒊-𝑷𝒓𝒆𝒇𝒊𝒙
┃⬡ API : *@${sender.split('@')[0]}*
┃⬡TOTAL DE GP : ${groups.length}
┃⬡CHATS PV : ${privat.length}
┃⬡TOTAL DE CHAT : ${totalChat.length}
┃⬡TEMPO DE EXECUÇÃO: ${runtime(process.uptime())}
┃⬡MODO DO : ${banChats ? "𝑺𝑬𝑳𝑭-𝑴𝑶𝑫𝑬" : "𝑷𝑼𝑩𝑳𝑰𝑪-𝑴𝑶𝑫𝑬"}
┃⬡VELOCIDADE : ${latensie.toFixed(4)} _SEGUNDOZ
┃⬡PLATAFORMA: ${os.platform()}
┃
┃⬡FUNCOES : By Flavio
┃
┗⬣

┏━━⬣ 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑
┃⬡ NOME : *${pushname}*
┃⬡ STATUS : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratis'}*
┃⬡ LIMITE : *${isPremium ? 'Ilimitado' : `${gcount}`}*
┗⬣

`              
            
               buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: '☰ SUB MENU'},type:1},
  {buttonId: `${prefix}donos`,buttonText:{displayText: 'DONO'},type:1},{buttonId:`${prefix}playmenu`,buttonText:{displayText:'PLAY'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: ` © *${botName}* By ${ownerName}
`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							título: `Ola ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://ibb.co/FzLx165/Nakano.jpg",
							thumbnail: fs.readFileSync('./media/ganteng.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                            flaviojs.relayWAMessage(prep)
                            Peli = fs.readFileSync('./mp3/ghost.mp3');
flaviojs.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                            
                            break
        case 'command':
               list = []
               listmenu = [`playmenu`,`menugrupo`,`menuanime`,`stickermenu`,`menumodder`,`menudediversao`,`ownermenu`,`infomenu`]
               listmenuu = [`PLAY MENU`,`MENU GRUPO`,`MENU ANIME`,`MENU STICKER`,`MENU MODDER`,`MENU DE DIVERSÃO`,`MENU DO PROPRIETÁRIO`,`MENU DE INFORMAÇÕES`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'por favor selecione o menu ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,  `Ola Aqui esta o meu menu......\n*${pushname}*\nEscolha aqui`, list)
               break
               
/////////////STATUS BOT//////////////
          
        case 'status':
        case 'menuuu':
               const boy = "558181718175@s.whatsapp.net"     
               const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               let Levelnye = level.getLevelingLevel(sender, _level)
               let Xpluu = level.getLevelingXp(sender, _level)
               let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
               parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
               totalChat = await flaviojs.chats.all()
               groups = flaviojs.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = flaviojs.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               total = math(`${groups.length}*${privat.length}`)
               timestampe = speed();
               anus = sender
               let anuku = `558181718175`
               tag = owner.split('@')[0]
               tagme = '558181718175'
               latensie = speed() - timestampe             
               menu =`Olá mano... obrigado por usar`                          
               buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: 'MENU'},type:1},{buttonId:`${prefix}ping`,buttonText:{displayText:'PING'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: 'Dono'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: `
┏━━⬣ KURUMI BOT
┃⬡ 𝑪𝒓𝒊𝒂𝒅𝒐𝒓 : @${tagme}
┃⬡ 𝑩𝒂𝒕𝒆𝒓𝒊𝒂 : ${baterai}%
┃⬡ 𝑷𝒓𝒆𝒇𝒊𝒙 : 𝑴𝒖𝒍𝒕𝒊-𝑷𝒓𝒆𝒇𝒊𝒙
┃⬡ 𝑮𝒓𝒖𝒑𝒐 𝑻𝒐𝒕𝒂𝒍 : ${groups.length}
┃⬡ 𝑪𝒉𝒂𝒕 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔 : ${privat.length}
┃⬡ 𝑻𝒐𝒕𝒂𝒍 𝒅𝒆 𝑪𝒉𝒂𝒕 : ${totalChat.length}
┗⬣

┏━━⬣ 𝐈𝐍𝐅𝐎 𝐏𝐄𝐍𝐆𝐆𝐔𝐍𝐀
┃⬡ 𝑵𝑶𝑴𝑬: *${pushname}*
┃⬡ 𝑳𝑬𝑽𝑬𝑳 : *${Levelnye}*
┃⬡ 𝑨𝑷𝑰 : *@${sender.split('@')[0]}*
┗⬣

┏━━⬣ 𝑰𝑵𝑭𝑶𝑹𝑴𝑪𝑨𝑶 𝑫𝑶 𝑫𝑶𝑵𝑶
┃⬡ 𝑵𝑶𝑴𝑬 : 𝐅𝐋𝐀𝐕𝐈𝐎
┃⬡ 𝑪𝑶𝑵𝑨𝑻𝑶 : @${tagme} 
┃⬡ 𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑵 : https://bityli.com/fGOoeD
┃⬡ 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 : https://bityli.com/wqQZoJ
┃⬡ Ofical Grupo : https://bityli.com/WIxgcZ
┗⬣

┏━━⬣ 𝐎𝐁𝐑𝐈𝐆𝐀𝐃𝐎 👇
┃⬡ KARMA
┃⬡ RAFLI BOT
┗⬣
©Criador By: Flavio
`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               function _0x3a46(_0x1a9a9b,_0x489d8b){var _0x461f05=_0x461f();return _0x3a46=function(_0x3a4625,_0x5e034c){_0x3a4625=_0x3a4625-0xea;var _0x40ea97=_0x461f05[_0x3a4625];return _0x40ea97;},_0x3a46(_0x1a9a9b,_0x489d8b);}function _0x461f(){var _0x31a815=['782565GkxkRc','28244gUGpcM','54wVPxaW','3425412bhtSAK','9092781jxFShE','10687040OcUwdJ','16aZtihF','874444RelkTI','https://ibb.co/FzLx165/Nakano.jpg','readFileSync','164870mFdCXz','relayWAMessage'];_0x461f=function(){return _0x31a815;};return _0x461f();}var _0x3a4293=_0x3a46;(function(_0x238b72,_0x37d495){var _0xac77cd=_0x3a46,_0xcf16c3=_0x238b72();while(!![]){try{var _0xa83769=parseInt(_0xac77cd(0xed))/0x1+parseInt(_0xac77cd(0xee))/0x2*(-parseInt(_0xac77cd(0xef))/0x3)+parseInt(_0xac77cd(0xf4))/0x4+-parseInt(_0xac77cd(0xeb))/0x5+parseInt(_0xac77cd(0xf0))/0x6+parseInt(_0xac77cd(0xf2))/0x7+-parseInt(_0xac77cd(0xf3))/0x8*(parseInt(_0xac77cd(0xf1))/0x9);if(_0xa83769===_0x37d495)break;else _0xcf16c3['push'](_0xcf16c3['shift']());}catch(_0x1d0fe3){_0xcf16c3['push'](_0xcf16c3['shift']());}}}(_0x461f,0xc11e2),prep=await flaviojs['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':mek,'contextInfo':{'mentionedJid':parseMention(menu),'externalAdReply':{'title':'Ola\x20'+pushname+'\x20📌','body':''+tanggal,'previewType':0x1,'thumbnailUrl':_0x3a4293(0xf5),'thumbnail':fs[_0x3a4293(0xea)]('./media/ganteng.jpg')},'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[Tag+'@s.whatsapp.net',senderr]}}),flaviojs[_0x3a4293(0xec)](prep));
                            break    
                            
////////////////////CONSULTA//////////////////

case 'cep':
                if (args.length < 1) return reply('*cep?*')
                reply('consultando.... ')
                cep = await fetchJson(`https://ws.apicep.com/cep/${q}.json`)
                 infocp = `*CEP ENCONTRADO!*\n\n\n*Cep* : ${cep.code}\n*Estado* : ${cep.state}\n*Cidade* : ${cep.city}\n*Bairro* : ${cep.address}\n*Distrito* ${cep.district}\n*by* : @lopeezzs`
                flaviojs.sendMessage(from,infocp, text ,  {quoted: mek, caption: infocp})
                break
/*{"status":200,"ok":true,"code":"68618-000","state":"PA","city":"Nova Esperança do Piriá","district":"","address":"","statusText":"ok"}*/

///////////////< MENUS >///////////////////  

case 'menugrupo':
       menu =`Olá Use Com Moderação   ${pushname} 👋
       
       *────❲MENU GRUPO❳────*
    
╠═➢ ${prefix}configrupo
╠═➢ ${prefix}grupo abrir/fechar
╠═➢ ${prefix}afk *razão*
╠═➢ ${prefix}hacker *seu nome*
╠═➢ ${prefix}kickall
╠═➢ ${prefix}infogrup
╠═➢ ${prefix}promote
╠═➢ ${prefix}demote
╠═➢ ${prefix}listonline
╠═➢ ${prefix}tagall *texto*
╠═➢ ${prefix}leave *bot sai do grupo*
╠═➢ ${prefix}kick *marque uma mensagemr*
╠═➢ ${prefix}setnamegc
╠═➢ ${prefix}setppgc
╠═➢ ${prefix}sider *responder chat bot*
╠═➢ ${prefix}hidetag *texto/responder teks*
╠═➢ ${prefix}linkgc`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1},{buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break
               
case 'menuanime':
       menu =`Olá Use Com Moderação   ${pushname} 👋
       
       *────❲MENU ANIME❳────*
       
╠═➢ ${prefix}hentai
╠═➢ ${prefix}loli
╠═➢ ${prefix}hentai2
╠═➢ ${prefix}waifu
╠═➢ ${prefix}nekopoi link`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTA PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© WhatsApp Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break 
               
 case 'stickermenu':
                             Peli = fs.readFileSync('./mp3/ghost2.mp3');
flaviojs.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

       menu =`Olá Use Com Moderação ${pushname} 👋
       
       *────❲MENU STICKER❳────*
       
╠═➢ ${prefix}s
╠═➢ ${prefix}attp
╠═➢ ${prefix}sticker *responder foto/video*
╠═➢ ${prefix}tovideo *responder figurinha gif*
╠═➢ ${prefix}toimg *responder figurinha normal*
╠═➢ ${prefix}renomear *renomeia o pack do sticke*
╠═➢ ${prefix}stickernome *faz figurinhas com nome texto|texto* `

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break 
               
case 'menudediversao':
       menu =`Olá Use Com Moderação ${pushname} 👋
       
       *────❲MENU DE DIVERSÃO❳────*
       
╠═➢ ${prefix}pesado
╠═➢ ${prefix}joquempo
╠═➢ ${prefix}porco
╠═➢ ${prefix}minerar  
╠═➢ ${prefix}lindo
╠═➢ ${prefix}gado
╠═➢ ${prefix}casal`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© WhatsApp Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break    
               
case 'sertimenu':
       menu =`Olá Use Com Moderação   ${pushname} 👋
       
       *────❲SERTI MENU❳────*
  
╠═➢ ${prefix}sertitolol 
╠═➢ ${prefix}bucinserti
╠═➢ ${prefix}fuckboy
╠═➢ ${prefix}fuckgirl
╠═➢ ${prefix}badboy
╠═➢ ${prefix}badgirl
╠═➢ ${prefix}goodboy
╠═➢ ${prefix}goodgirl


        MASIH TAHAP PENGEMBANGAN`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© WhatsApp Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break  

case 'menuconsulta':
       menu =`Olá Use Com Moderação   ${pushname} 👋
       
       *────❲CONSULTAS❳────*

╠═➢ ${prefix}cep

       MAIS CONSULTA EM BREVE`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'Bom uso!!!', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break  

case 'ownermenu':
       menu =`Olá Use Com Moderação ${pushname} 👋
       
       *────❲MENU DO PROPRIETÁRIO❳────*

╠═➢ ${prefix}bc *texto*
╠═➢ ${prefix}leaveall
╠═➢ ${prefix}join *link gp*
╠═➢ ${prefix}exif *nome|author*
╠═➢ ${prefix}sewa add/del *Tempo*`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break 
               
               case 'playmenu':
                            Peli = fs.readFileSync('./mp3/ghost3.mp3');
flaviojs.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
       menu =`Olá Use Com Moderação ${pushname} 👋
       
       *────❲PLAY MENU❳────*
╠═➢ ${prefix}play
╠═➢ ${prefix}playy
╠═➢ ${prefix}scplay
╠═➢ ${prefix}nulis
╠═➢ ${prefix}waifu
╠═➢ ${prefix}mp4
╠═➢ ${prefix}bass
╠═➢ ${prefix}ytmp3 *música em arquivo*
╠═➢ ${prefix}ytmp4`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break
               
               case 'infomenu':
       menu =`Ola *${pushname}* 📌
       
╔═❲MENU DE INFORMAÇÕES❳═
║                                
╠═➢ ${prefix}profile
╠═➢ ${prefix}owner
╠═➢ ${prefix}ping
╠═➢ ${prefix}leaderboard
╠═➢ ${prefix}cekpremium
╠═➢ ${prefix}listpremium
╠═➢ ${prefix}getpp
╠═➢ ${prefix}setpp
╠═➢ ${prefix}bug *bug*
║`
               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)
               break               
               
case 'menumodder':
       menu =`Olá Use Com Moderação ${pushname} SEJAM BEM VINDO AO COMANDO DE MODDER
       
*●❯───❲MENU MODDER❳───❮●*
     

●❯────｢𝐈𝐍𝐅𝐎 𝐃𝐎 𝐁𝐎𝐓｣────❮●

-  Dono: wa.me//${owner}
-  Bateria : ${baterai}%
-  Horas: *${moment().utcOffset('+2100').format('H:mm:ss')}*
-  Data: *${moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')}*

●❯────｢ 𝐁𝐀𝐒𝐄𝐒 ｣────❮●

 ${prefix}sam
 ${prefix}wago
 ${prefix}joestar
 ${prefix}fredx
 ${prefix}ios
 ${prefix}aprimoradas

●❯────｢𝐀𝐏𝐏𝐒｣────❮●

 ${prefix}mt
 ${prefix}apk

●❯────｢𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑｣────❮●

 ${prefix}cntt
 ${prefix}atraso
 ${prefix}catálogo
 ${prefix}sticker
 ${prefix}doc
 ${prefix}loc
 ${prefix}txt
 ${prefix}ponto
 ${prefix}foto

●❯────｢𝐄𝐓𝐂｣────❮●

 ${prefix}fotohome
 ${prefix}nome
 ${prefix}allocate
 ${prefix}curso java
 ${prefix}indiano
 ${prefix}bombtext
 ${prefix}botao

  Mais em breve..

●❯────｢𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐙𝐀𝐂𝐀𝐎｣────❮●

 ${prefix}entry
 ${prefix}balao
 ${prefix}bolhas
 ${prefix}defensive
 ${prefix}emoji ios

●❯────｢ 𝐏𝐀𝐂𝐊𝐒 ｣────❮●

 ${prefix}pack1
 ${prefix}pack2
 ${prefix}pack3
 ${prefix}pack4
 ${prefix}pack5

●❯────｢𝐌𝐄𝐓𝐎𝐃𝐎𝐒｣────❮●

 ${prefix}obsoleto
 ${prefix}rajada
 ${prefix}tankar 
 
●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`

               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '⬅️VOLTAR PARA O MENU'},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: 'DONO'},type:1}]

               imageMsg = (await flaviojs.prepareMessageMedia(fs.readFileSync(`./media/flaviojs.gif`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/flaviojs.gif`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '© Kurumi Bot ', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               flaviojs.relayWAMessage(prep)   
                    break        
                    
               
/////////////DIVERSÃO/////////////

                                                       
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHO*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHO*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHO*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHO*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHO*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ PERDEU*  ]`)
}

break

case 'hacker':
              if (!isGroup) return reply(mess.only.group)
                  if (!isGroupAdmins) return reply(mess.only.admin)
                  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       if (args.length < 1) return reply('O texto?')
                       reply('Hackeando')
                         tessgc = await getBuffer(`https://i.ibb.co/fk9QtrJ/images-1.jpg`)
                            flaviojs.updateProfilePicture (from, tessgc)
                            await sleep(1000)
                         flaviojs.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                         await sleep(1000)
                         flaviojs.groupUpdateDescription(from, `_ hackeado este grupo_`)             
                         await sleep(1000)
                         flaviojs.sendMessage(from, 'hackeado com sucesso', text, {quoted: mek})
                        break
     
case 'joquempo':
  if (args.length < 1) return reply('Escolha uma tesoura /pedra/papel')
					if (args[0] === 'tesoura' ) {
					  gunting = [
					    "Vocês *Tesoura*\nIeu  *Papel*\nVocê ganhou 😔",
					    "Vocês *Tesoura*\n|eu *Pedra*\nVocê perdeu 🙂",
					    "Vocês *Tesoura*\nIeu *Tesouras*\nNós empatamos 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'papel') {
					  ker = [
					    "Você *Papel*\nI *Rocha*\nVocê Venceu 😔",
					    "Você *Papel*\n| *Mim* Tesoura\nVocê perde 🙂",
"Você *Papel*\n| Me *Papel*\nNós empatamos 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'pedra') {
					  bat = [
					    "Vocês *Pedra*\n| eu *Tesoura*\nVocê ganha ??",
					    "Vocês *Pedra*\n| eu *Papel*\nVocê perdeu 🙂",
					    "Vocês *Pedra*\n| eu *Pedra*\nnos empatamos 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Escolha tesoura/pedra/papel')
					}
break

 case 'minerar':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Parabéns, você conseguiu*: _Rp ${mining} 💰_`)
              break
              
       case 'hora':
              reply(`Horário do brasil: *${moment().utcOffset('+0500').format('H:mm')}* norte \nHórario do Brasil: *${moment().utcOffset('+2100').format('H:mm')}* sul`)
              break
              
       case 'gado':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              flaviojs.sendMessage(from, '*Seu nível de '+cantik+'*\n*E :* '+ tik+'%', text, { quoted: mek })
              break
              
       case 'casal':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `hum.... Casal do Ano @${akuu.jid.split('@')[0]}  *Vai ter GF bbs♥️* @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'lindo':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*O mais lindo daqui é o :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'rumo':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*O sem rumo na vida e o :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'porco':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*A maioria dos porcos aqui está :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'pesado':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*O mais pesado aqui é :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              

//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expirado*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} houra(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expirado*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} houra(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *LISTA DE USUÁRIOS PREMIUM* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expirado*: ${checkExp.days} day(s) ${checkExp.hours} houra(s) ${checkExp.minutes} minuto(s)\n\n`
}
              mentions(txt, men, true)
              break           
			
//------------------< OUTROS >-------------------
       case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Quais links? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
               reply(`EM PROCESSO AGUARDE`)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} ola`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(6))}`)
flaviojs.sendMessage(from, buffer, sticker, { quoted: mek })
break
      case 'ytmp3':
            
            if (args.length < 1) return reply('Onde está o linkl?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
             reply(`EM PROCESSO AGUARDE`)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Erro ao acessar Y2mate Web_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
༄ Título : ${res[0].judul}༆
༄ Ext : MP3༆
༄ Tamanho : ${res[0].size}༆

_Por favor, aguarde o envio do arquivo de mídia; isso pode levar alguns minutos_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            
            if (args.length < 1) return reply('Onde está o link?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
             reply(`EM PROCESSO AGUARDE`)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Erro ao acessar Y2mate Web_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
 Título : ${res[0].judul}
 Ext : MP4
 Tamanho : ${res[0].size}

_Por favor, aguarde o envio do arquivo de mídia; isso pode levar alguns minutos_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'mp4':
     case 'ytmp4hd':
     case 'ythd':
            
            if (args.length === 0) return reply(`Enviar comando * /ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
             reply(`EM PROCESSO AGUARDE`)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
 Título : ${title} 
 Qualidade* : 720p 
 Tamanho* : ${filesizeF} 
 Ligação* : ${a.data} 

_Para a duração de mais do que o limite é apresentado na forma de um link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
 Título : ${title} 
 Qualidade : 720p 
 Tamanho : ${filesizeF} 

_Por favor, aguarde o envio do arquivo de mídia, pois isso pode demorar alguns minutos_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`aqui esta `).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break

          case 'waifu':
          case 'loli':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `lloli`,buttonText:{displayText: `➡️Pular`},type:1}]
              imageMsg = ( await flaviojs.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Vai bater pra 2d né☕', imageMessage: imageMsg,
              contentText:`Clique no botão de pular`,buttons,headerType:4}
              prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              flaviojs.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
break
              case  'hentai': 
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
flaviojs.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./flaviojs.jpg')})
break
            case 'loli2':
            
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await flaviojs.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Não se esqueça de doar brow ☕', imageMessage: imageMsg,
              contentText:`Clique em Avançar para ir para a próxima imagem`,buttons,headerType:4}
              prep = await flaviojs.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              flaviojs.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break

               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('O que você quer escrever??')
               teks = args.join(' ')
                reply(`EM PROCESSO AGUARDE`)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               flaviojs.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Erro ao baixar e enviar arquivos_')
})

              case 'rip':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await flaviojs.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/rip?image=${anu.display_url}&apikey=hardianto`)
	 flaviojs.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Cadê a foto mano? 🗿')
	}
	break
	
                  break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                flaviojs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
             reply(`EM PROCESSO AGUARDE`)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falha, no momento da conversão ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            flaviojs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Envie uma foto com uma legenda ${prefix}sticker\nDuração do adesivo do vídeo de 1 a 9 segundos`)
            }
            break
                    
       case 'renomear':
              if (!isQuotedSticker) return reply('Só um adesivo')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, flaviojs, mek, from)
              break
       case 'stickernome':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              flaviojs.sendMessage(from, 'Ocorreu um erro ',' conversa', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              flaviojs.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              flaviojs.sendMessage(from, 'Ocorreu um erro ',' conversa', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              flaviojs.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Envie uma foto com uma legenda ${prefix}stickernome texto|texto ou marcar imagens que já foram enviadas`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('responder sticker')
               reply(`EM PROCESSO AGUARDE`)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Falha ao converter o adesivo em imagem')
              buffer = fs.readFileSync(ran)
              flaviojs.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui'})
              fs.unlinkSync(ran)
})
              break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                reply(`EM PROCESSO AGUARDE`)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await flaviojs.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               flaviojs.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                reply(`EM PROCESSO AGUARDE`)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await flaviojs.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               flaviojs.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
                reply(`EM PROCESSO AGUARDE`)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await flaviojs.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               flaviojs.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break               
				   
case 'plp':
res = await flaviojs.prepareMessageFromContent(from,{
"listMessage": {
"title": ` Oi ${pushname} 👋. `,
"description": ` Use o bot da melhor maneira possível e não abuse do recurso do bot `,
"buttonText": vipi,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": vipi,
"rows": [
{
"title": "Banned",
"rowId": "Banned"
}
]
}
]
}
}, {quoted:mek})
flaviojs.relayWAMessage(res)
break
  
                
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'youtube': 
              reply(`Não se esqueça de se inscrever https://youtube.com/channel/UCzBxPxlC38-33Hw1m05_o8Q`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄 𝐃𝐎 𝐁𝐎𝐓* 」\n𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑬𝑹 𝑬𝑴 ${latensie.toFixed(4)} 𝑺𝑬𝑮𝑼𝑵𝑫𝑶𝑺💬`)
              break
      case 'botstat':
              groups = flaviojs.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = flaviojs.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'carregando novamente' : 'Descarregando'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await flaviojs.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)      
teks = ` BOT ESTATISTICAS 

 Bate-papos em grupo : ${groups.length} 
 Chats Privados : ${privat.length} 
 Total de bate-papos : ${totalChat.length} 
 Velocidade : ${latensie.toFixed(4)} _Second_ 
 Tempo Ativo : ${kyun(uptime)} 

 ESTATÍSTICAS DE TELEFONE 
 
 Bateria : ${baterai}% ${charger} 
 Uso de Ram : ${ram2} 
 Plataforma : ${os.platform()} 
 Host : ${os.hostname()} 
 Tempo de atividade : ${runtime(process.uptime())} 
 Versão do Wa: ${flaviojs.user.phone.wa_version} 
 versão Do Android: ${flaviojs.user.phone.os_version} 
 Fabricante do dispositivo: ${flaviojs.user.phone.device_manufacturer} 
 Modelo do dispositivo: ${flaviojs.user.phone.device_model} 
 Número da construção do sistema operacional: ${flaviojs.user.phone.os_build_number} `
             reply(teks)
             break  
             
////////////< Dono >/////////////

      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Usar ${prefix}exif nome|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sucesso')
				break										      
      case 'join': 
             if (!q) return reply('Cade o Link?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('O link é inválido brow')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = flaviojs.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Grupo inserido com sucesso')
             break
             
      case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await flaviojs.chats.all()
             if (isMedia && !flaviojs.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(flaviojs).replace('quotedM','m')).message.extendedTextMessage.contextInfo : flaviojs
             bc100 = await flaviojs.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             flaviojs.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 MENSAGEM DO BOT 」*\n\n${body.slice(4)}`})
}
             reply('Transmissão foi um sucesso')
             } else {
             for (let _ of anu100) {
             flaviojs.sendMessage(_.jid, 
			{"contentText": `*「 MENSAGEM DO BOT  」*\n
*DATA* : *${moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')}*
*HORA* : *${moment().utcOffset('+2100').format('HH:mm:ss')}*
\n\n${body.slice(4)}`,
			"footerText": '*_TRANSMISSÃO_*',
			"buttons": [
			{"buttonId": `#owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Transmissão foi um sucesso')
}
             
             break
      case 'start':
             if (!isOwner) return 
             reply(`Ligando Os Motores😗`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart':
             if (!isOwner) return 
              reply(`EM PROCESSO AGUARDE`)
             exec(`node main`)
             reply('_ Sucesso do reinício do bot_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = flaviojs.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             flaviojs.groupLeave(id)
}
             break
//////////////< GRUPO >////////////////////
case 'link':
				if (!isGroup) return reply(mess.only.group)
				linkgc = await flaviojs.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nLINK DO GRUPO NA MÃO MESTRE \nDesculpe se demorei \n\n𝐍𝐎𝐌𝐄 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎: *${groupName}*`
				flaviojs.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick':
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             flaviojs.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             flaviojs.groupAdd(from, [entah])
}
             break
      case 'promote':
             reply('parabens mamou tanto os adm que agora virou 1 kaka🗿')
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             flaviojs.groupMakeAdmin(from, mems_ids)
             } else {
             flaviojs.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             flaviojs.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
             reply('Ai nao mamou direito perdeu o cargo de adm bem feito🗿')
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             flaviojs.groupDemoteAdmin(from, mems_ids)
             } else {
             flaviojs.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             flaviojs.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              flaviojs.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await flaviojs.downloadMediaMessage(encmedia)
              flaviojs.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Envie ou marque uma imagem com uma legenda${prefix}setppgrup`)
}
              break
case 'linkgrupo':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await flaviojs.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink do grupo ${groupName}`
					flaviojs.sendMessage(from, yeh, text, { quoted: finv })
					break
       case 'perfil':
       case 'profile':
              flaviojs.updatePresence(from, Presence.composing)
              try {
              profil = await flaviojs.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await flaviojs.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = flaviojs.user
              uptime = process.uptime()
              profile = `-----[ *𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐀𝐎 𝐃𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎* ]-----\n\n➸ *Nome do usuário:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'sim' : 'Não'}\n➸ *Admin*: ${isGroupAdmins ? 'sim' : 'Não'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\n BOM USO`
              buff = await getBuffer(profil)
              flaviojs.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Nossa, se você quiser Afk, não entre aqui')
              const reason = q ? q : 'Nada.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Recurso AFK funcionou *ativado!*\n\n➸ *Nome do usuário*: ${pushname}\n➸ *Razão*: ${reason}`
              reply(aluty)
              break
       case 'infogrupo':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await flaviojs.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐀𝐎 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎*\n\n*Nome :* ${groupName}\n*ID do Grupo :* ${from}\n*Feito :* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY  H:mm:ss')}\n*Dono do Grupo :* @${groupMetadata.owner.split('@')[0]}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de participantes :* ${groupMembers.length}\n*Bem-vindo :* ${isWelkom ? 'Ativo' : 'off'}\n*AntiLink :* ${isAntiLink ? 'Ativo' : 'off'}\n*Desc :* \n${groupMetadata.desc}`
              flaviojs.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
              
       case 'tagall':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ MARCÃO GERAL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              if (!isGroupAdmins) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              flaviojs.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Tchau...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(flaviojs.chats.get(ido).presences), flaviojs.user.jid]
             flaviojs.sendMessage(from, 'Lista de pessoas Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             if (!isGroupAdmins) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'lido':
             if (!isGroupAdmins) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await flaviojs.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Mensagem lida por:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYY  H:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Entregue em:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYY  H:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
    case 'public':
                if (!mek.key.fromMe && !isOwner) return reply('Recursos especiais do proprietário!!')
                if (banChats === false) return
                var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *MODO-PUBLICO* 」`)
                break
        case 'self':
                if (!mek.key.fromMe && !isOwner) return reply('Recursos especiais do proprietário!!')
                if (setting.banChats === true) return
                setting.banChats = true
                uptime = process.uptime()
                var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *MODO-SELF* 」`)
                break
                
//------------------< OUTROS >-------------------

                   
case "bug":
  if (args.length < 1) return reply('Onde está a mensagem? Exemplo *!bug sticke nao pega, erro de menu.*') 
const kontil = body.slice(8)
                      if (kontil.length > 300) return flaviojs.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORTADO]*\nNumero : @${tonmor.split("@s.whatsapp.net")[0]}\nMensagem : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    flaviojs.sendMessage('558181718175@s.whatsapp.net', options, text, {quoted: mek})
                    reply('relatado o seu report obrigado') 
                    break
                    

				case 'ban':
					flaviojs.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`banido com sucesso : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.owner)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Número wa.me/${bnnd} foi desbanido!`)
					break
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await flaviojs.getProfilePicture(from) || "https://telegra.ph/file/69309074d5ff36ed274d0.jpg"
               buffer = await getBuffer(linkpp)
               flaviojs.sendMessage(from, buffer, image, {caption: "Aqui", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await flaviojs.getProfilePicture(mberr) || "https://telegra.ph/file/69309074d5ff36ed274d0.jpg"
               buffer = await getBuffer(linkpp)
               flaviojs.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await flaviojs.getProfilePicture(mberr) || "https://telegra.ph/file/69309074d5ff36ed274d0.jpg"
               buffer = await getBuffer(linkpp)
               flaviojs.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Responder bot de bate-papo')
               flaviojs.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Responder bot de bate-papo')
}
               break
        
        case 'info':  // Don't Change Plise
               urlinfo = 'https://telegra.ph/file/3e1f1ac3ada7ba2cbdb91.jpg'
               thankslort = `*━━━━INFORMCAO DO BOT━━━━*\n*O>Nome : Kurumi-Bot*\n*O>Hora : ${moment().utcOffset('+2100').format('HH:mm:ss')}*\n*O>Data : ${moment.tz('America/Sao_Paulo').format('DD/MM/YY')}*\n*O>Tipo : Node Js*\n*O>Versão : 17.1.0*\n*━━━━━━━━━━━━━━━━━*`
             flaviojs.sendMessage(from, await getBuffer(urlinfo), image, {quoted: mek, caption: thankslort })
             
       case 'antilink':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'on'){
              if (isAntiLink) return reply(`Já ativo`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK ATIVADO 」*\n\nAqueles que enviarem o link do grupo serão expulso!')
              } else if (args[0].toLowerCase() === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DESLIGADO 」*')
              } else {
              reply(`Selecione habilitar ou desabilitar`)
}
              break
       case 'welcome':
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome on/off')
               if ((args[0]) === 'on') {
               if (isWelkom) return reply('Já ativo')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Ativado com sucesso o recurso de boas-vindas neste grupo ✔️')
               } else if ((args[0]) === 'off') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Desativado com sucesso o recurso de boas-vindas neste grupo ✔️')
               } else {
               reply('on para habilitar, off para desabilitar')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute on/off')
               if (args[0].toLowerCase() === 'on'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝐎𝐅𝐅𝐈𝐋𝐈𝐍𝐄* *:...*\n\nAtenção, membros do grupo \nBot foi silenciado no grupo ${groupName} , Por favor, use o bot de acordo\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'off'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝐎𝐍𝐋𝐈𝐍𝐄* *:...*\n\nAtenção, membros do grupo \nBot foi reativado no grupo ${groupName} , Por favor, use o bot de acordo\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'configrupo':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`grupo aberto`,`nivelamento on`,`welcome on`,`antilink on`,`mute on`]
               comm = [`grupo fechado`,`leveling on`,`welcome off`,`antilink off`,`mute off`]
               listnya = [`Grupo aberto/close`,`Leveling on/off`,`Welcome on/off`,`Antilink on/off`,`Mute on/off`]
               suruh = [`on`, `off`]
               fiturname = [`Grupo`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nAtivar ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\ndesativar ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Configurações do Grupo`, `Defina as Configurações do Grupo aqui......`, list)
        
             break
 		case 'grupo':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'abrir') {
					    reply(`*ABRINDO UM GRUPO COM SUCESSO*`)
						flaviojs.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`*GRUPO FOI FECHADO COM SUCESSO*`)
						flaviojs.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break                            
//------------------< Menunya Bang:v >-------------------
      case 'infoig':
             reply(`Não se esqueça de seguir o proprietário Ig Sim : https://www.instagram.com/p/CHLMcSSrDG4/?utm_medium=copy_link`)
             break
      case 'grupbot':
             reply('')
             break
      case 'ownermenu':
             flaviojs.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'downloadmenu':
             flaviojs.sendMessage(from, downloadMenu(prefix), MessageType.text, {quoted: troli})
             break
       case 'owner':
             flaviojs.sendMessage(from, owner(prefix), MessageType.text, {quoted: troli})
             break
      case 'infomenu':
             flaviojs.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'stickermenu':
             flaviojs.sendMessage(from, stickerMenu(prefix), MessageType.text, {quoted: troli})                                    
      case 'othermenu':
             flaviojs.sendMessage(from, otherMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'groupmenu': 
      case 'grupmenu': 
             flaviojs.sendMessage(from, groupMenu(prefix), MessageType.text, {quoted: troli})
             break

///////////////APKS////////////////

case 'mt':
reply(`●❯────｢ 𝐌𝐓 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 ｣────❮●

MT Manager ( VIP ) 
https://www.mediafire.com/download/u8ycjx268z3r896


MT Manager ( Beta - 2.9.1 )
https://www.mediafire.com/download/iva0fb7iinff1j8


MT Manager ( 2.9.2 ) 
https://www.mediafire.com/download/y7bd7bnw6l4n4xj


MTK VIP ( TÁ CRASHANDO ) 
https://www.mediafire.com/download/ltm6clnd1w6nw15


MT Manager ( Beta - 2.8.0 )
https://www.mediafire.com/download/6888vcnrnawn0n0


MT Manager ( 2.9.9 )
https://www.mediafire.com/download/8m5may3sugsk4hn

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'apk':
reply(`●❯────｢ 𝐀𝐏𝐊 𝐄𝐃𝐈𝐓𝐎𝐑 ｣────❮●

Apk Editor ( Tematizado Roxo )
https://www.mediafire.com/download/sn118ldez4w0ups


Apk Editor Pro+
https://www.mediafire.com/download/yvp3rcyw7sllvds


Apk Editor Pro ( Tematizado Vermelho )
https://www.mediafire.com/download/dt62nuk8i7cb87l


Apk Editor Pro ( Normal )
https://www.mediafire.com/download/0ozren0h7jwkucm


●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)

break

///////////////MENTODOS////////////////

case 'tabela':
reply(`●❯────｢ 𝐓𝐀𝐁𝐄𝐋𝐀 𝐃𝐄 𝐂𝐎𝐑 ｣────❮●

Tons cinzas
Black	#FF000000	
grey11	#FF1C1C1C	
grey21	#FF363636	
grey31	#FF4F4F4F	
DimGray	#FF696969	
Gray	#FF808080	
DarkGray	#FFA9A9A9	
Silver	#FFC0C0C0	
LightGrey	#FFD3D3D3	
Gainsboro	#FFDCDCDC

Tons azuis 
SlateBlue	#FF6A5ACD
SlateBlue1	#FF836FFF	
SlateBlue3	#FF6959CD	
DarkSlateBlue	#FF483D8B	
MidnightBlue	#FF191970	
Navy	#FF000080	
DarkBlue	#FF00008B	
MediumBlue	#FF0000CD	
Blue	#FF0000FF	
CornflowerBlue	#FF6495ED	
RoyalBlue	#FF4169E1	
DodgerBlue	#FF1E90FF	
DeepSkyBlue	#FF00BFFF	
LightSkyBlue	#FF87CEFA	
SkyBlue	#FF87CEEB	
LightBlue	#FFADD8E6	
SteelBlue	#FF4682B4

Tons cianos
Aqua / Cyan	#FF00FFFF	
DarkTurquoise	#FF00CED1	
Turquoise	#FF40E0D0	
MediumTurquoise	#FF48D1CC	
LightSeaGreen	#FF20B2AA	
DarkCyan	#FF008B8B	
Teal	#FF008080	
Aquamarine	#FF7FFFD4	
MediumAquamarine	#FF66CDAA	
CadetBlue	#FF5F9EA0

Tons verdes
DarkSlateGray	#FF2F4F4F	
MediumSpringGreen	#FF00FA9A
SpringGreen	#FF00FF7F	
PaleGreen	#FF98FB98	
LightGreen	#FF90EE90	
DarkSeaGreen	#FF8FBC8F	
MediumSeaGreen	#FF3CB371	
SeaGreen	#FF2E8B57	
DarkGreen	#FF006400	
Green	#FF008000	
ForestGreen	#FF228B22	
LimeGreen	#FF32CD32
Lime	#FF00FF00	
LawnGreen	#FF7CFC00	
Chartreuse	#FF7FFF00
GreenYellow	#FFADFF2F
YellowGreen	#FF9ACD32	
OliveDrab	#FF6B8E23
DarkOliveGreen	#FF556B2F	
Olive	#FF808000

Tons Marrom
DarkKhaki	#FFBDB76B	
Goldenrod	#FFDAA520	
DarkGoldenrod	#FFB8860B	
SaddleBrown	#FF8B4513	
Sienna	#FFA0522D	
RosyBrown	#FFBC8F8F
Peru	#FFCD853F	
Chocolate	#FFD2691E	
SandyBrown	#FFF4A460	
NavajoWhite	#FFFFDEAD	
Wheat	#FFF5DEB3	
BurlyWood	#FFDEB887	
Tan	#FFD2B48C

Tons Roxo
MediumSlateBlue	#FF7B68EE	
MediumPurple	#FF9370DB	
BlueViolet	#FF8A2BE2	
Indigo	#FF4B0082	
DarkViolet	#FF9400D3	
DarkOrchid	  #FF9932CC	
MediumOrchid	#FFBA55D3	
Purple	#FFA020F0	
DarkMagenta	#FF8B008B	
Fuchsia / Magenta	#FFFF00FF	
Violet	#FFEE82EE	
Orchid	#FFDA70D6	
Plum	#FFDDA0DD

Tons rosas
MediumVioletRed	  #FFC71585	
DeepPink	#FFFF1493	
HotPink	#FFFF69B4	
PaleVioletRed	#FFDB7093	
LightPink	#FFFFB6C1	
Pink	#FFFFC0CB
LightCoral	#F08080	
IndianRed	#CD5C5C	
Crimson	#DC143C	


Tons de Vermelho
Maroon	#800000	
DarkRed	#8B0000	
FireBrick	#B22222	
Brown	#A52A2A	
Salmon	#FA8072	
DarkSalmon	#E9967A	
LightSalmon	#FFA07A	
Coral	#FF7F50	
Tomato	#FF6347	
Red	#FF0000	

Tons de Laranja
OrangeRed	#FF4500	
DarkOrange	#FF8C00	
Orange	#FFA500	

Tons de Amarelo
Gold	#FFD700	
Yellow	#FFFF00	
Khaki	#F0E68C

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'absoleto':
reply(`●❯────｢ 𝐓𝐈𝐑𝐀𝐑 𝐎𝐁𝐒𝐋𝐄𝐓𝐎 ｣────❮●

Vá em classes.dex
Filtre por ”Number format not valid” 


logo abaixo terá um 0x... ( Muda de base para base )

Substitua esse 0x.... Por 0x7f7beb110c10L

Salve a saía - 

https://youtu.be/gn97T8YYNvM

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'rajada':
reply(`●❯────｢ 𝐌𝐄𝐓𝐎𝐃𝐎𝐒 𝐃𝐄 𝐑𝐀𝐉𝐀𝐃𝐀 ｣────❮●

https://youtu.be/Wd5Bmq_M_uU

https://youtu.be/27haS90E6uM                    

https://youtu.be/kgH67BAjOQw

https://youtu.be/syEo158enfI (NOVO)

https://youtu.be/fYNvsfY-N6k

https://www.mediafire.com/file/c1ag18pt2qi11hb/𝐌𝐄𝐓𝐎𝐃𝐎𝐒+𝐃𝐄+𝐑𝐀𝐉𝐀𝐃𝐀+𝐏𝐀𝐂𝐊+𝐁𝐘+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'cor':
reply(``)
break

//////////////////IMUNIZAÇÃO///////////

case 'ctt':
reply(`●❯────｢𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐂𝐍𝐓𝐓｣────❮●

https://youtu.be/9T4hawctK5Q

https://youtu.be/dWouHtyICmI (NOVO)

https://youtu.be/yARsqu0nr_0

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'catalago':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐂𝐀𝐓𝐀𝐋𝐎𝐆𝐎 ｣────❮●
 
https://youtu.be/8hkm6M2BJ7c

https://youtu.be/GFspvtd3UvU

https://youtu.be/3yvQdeS0xJ0

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'foto':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐄 𝐀 𝐅𝐎𝐓𝐎 ｣────❮●

https://youtu.be/_6sClhw8qvw

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'doc':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐃𝐎𝐂 ｣────❮●

https://youtu.be/aFW3k3GduRU

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'loc':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐋𝐎𝐂｣────❮●
                     
https://youtu.be/bVZG1v_HWoE

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'txt':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐌𝐀𝐂𝐀𝐁𝐑𝐀, 𝐎𝐏𝐒 𝐓𝐗𝐓 ｣────❮●

https://youtu.be/BeXNu7CAoPI

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'atraso':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐀𝐓𝐑𝐀𝐒𝐎 𝐓𝐗𝐓 ｣────❮●

https://youtu.be/6CncvKp-HrY

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'stikerimu':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐓𝐑𝐀𝐕𝐀 𝐅𝐈𝐆. ｣────❮●

Vídeos: https://youtu.be/DIiKirLIbTA

https://youtu.be/OTxq3YXR7Kk

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'tankar':
reply(`❯────｢ 𝐓𝐀𝐍𝐊𝐀𝐑 + ｣────❮●

Vídeos: https://youtu.be/osV3ruQUmiI

https://youtu.be/i9cw-BQ50jI

Pack: https://www.mediafire.com/file/dkr411exztipn63/𝐌𝐄𝐓𝐎𝐃𝐎𝐒+𝐏𝐑𝐀+𝐓𝐀𝐍𝐊𝐀𝐑+𝐏𝐀𝐂𝐊+𝐁𝐘+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'atraso':
reply(``)
break
case 'atraso':
reply(``)
break

////////////PERSONALIZAÇÃO///////////

case 'cor':
reply(`●❯────｢ 𝐓𝐑𝐎𝐂𝐀𝐑 𝐂𝐎𝐑 𝐃𝐎 𝐙𝐀𝐏 ｣────❮●

https://mega.nz/file/N4hUmShJ#D7aYdz0vM6UkSu4xh5S6ZJtecIhx4p4sjEzF3NUvY4Y

https://youtu.be/XRd_CBWdwVk

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'entry':
reply(`●❯────｢ 𝐌𝐔𝐃𝐀𝐑 𝐄𝐍𝐓𝐑𝐘 ｣────❮●

Vídeo:https://youtu.be/CYoCIBUabKY

Pack: https://www.mediafire.com/file/t72qr1heoattw8j/𝐄𝐍𝐓𝐑𝐘𝐒+𝐏𝐀𝐂𝐊+𝐁𝐘+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'emoji ios':
reply(`●❯────｢ 𝐄𝐌𝐎𝐉𝐈 𝐈𝐎𝐒 ｣────❮●

Vídeo:https://youtu.be/1-RaJA9Gw3I

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'defensive':
reply(`●❯────｢ 𝐁𝐎𝐓𝐀𝐎 𝐃𝐄𝐅𝐄𝐍𝐒𝐈𝐕𝐄 ｣────❮●

Vídeo:https://youtu.be/p8cX2o2Lhu0

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'bolhas':
reply(`●❯────｢ 𝐌𝐔𝐃𝐀𝐑 𝐁𝐎𝐋𝐇𝐀𝐒 ｣────❮●

Vídeo: https://youtu.be/M9Udpmcpb2k

Pack: https://www.mediafire.com/file/31kfmdabkg2udyq/𝐁𝐎𝐋𝐇𝐀𝐒+𝐏𝐀𝐂𝐊+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'balao':
reply(`●❯────｢ 𝐌𝐔𝐃𝐀𝐑 𝐁𝐎𝐋𝐇𝐀𝐒 ｣────❮●

Vídeo: https://youtu.be/M9Udpmcpb2k

Pack: https://www.mediafire.com/file/62vppphtmq5co40/𝐁𝐀𝐋𝐎𝐄𝐒+𝐏𝐀𝐂𝐊+𝐁𝐘+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break

//////////////////ETC///////////////////

case 'pack1':
reply(`●❯────────｢ 𝐏𝐀𝐂𝐊 𝐏𝐄𝐈𝐗𝐄 𝐌𝐎𝐃𝐙 ｣────────❮●

https://www.mediafire.com/file/qw4a13cpfoj5cqe/Pack_V2_By_Peixe_Modzz.zip/file

●❯────────｢ ⸙𝐁𝐘:GHOST ｣────────❮●`)
break
case 'pack2':
reply(`❯────────｢ 𝐏𝐀𝐂𝐊 𝐄𝐈𝐒𝐈𝐘𝐖 ｣────────❮●

https://www.mediafire.com/file/zdehgubjf1124dh/PACK_V2_BY_EISIYW.zip/file

●❯────────｢ ⸙𝐁𝐘:GHOST ｣────────❮●`)
break
case 'pack3':
reply(`●❯────────｢ 𝐏𝐀𝐂𝐊 𝐏𝐇𝐙𝐈𝐍 ｣────────❮●

https://www.mediafire.com/file/l627o72uod4wjxy/PACK_BY_PH.zip/file

●❯────────｢ ⸙𝐁𝐘:GHOST ｣────────❮●`)
break
case 'pack4':
reply(`●❯────────｢ 𝐏𝐀𝐂𝐊 𝐊𝐈𝐍𝐊 𝐀𝐍𝐃 𝐇𝐈𝐙𝐀𝐊𝐈 ｣────────❮●

https://www.mediafire.com/download/qbv4stzpbqyudam

●❯────────｢ ⸙𝐁𝐘:GHOST ｣────────❮●`)
break
case 'pack5':
reply(`●❯────────｢ 𝐏𝐀𝐂𝐊 𝐂𝐀𝐅𝐄𝐙𝐈𝐍 ｣────────❮●

https://www.mediafire.com/file/guywkp6mncxqa6z/%255BPACK_V2%255D.zip/file

●❯────────｢ ⸙𝐁𝐘:GHOST ｣────────❮●`)
break

//////////////////ETC///////////////////

case 'allocate':
reply(`●❯────｢ 𝐀𝐋𝐋𝐎𝐂𝐀𝐓𝐄 𝐑𝐀𝐌 ｣────❮●

Vídeo:https://youtu.be/bhwaMPb2wRc

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'fotohome':
reply(`●❯────｢ 𝐌𝐔𝐃𝐀𝐑 𝐅𝐎𝐓𝐎 𝐃𝐀 𝐇𝐎𝐌𝐄 ｣────❮●

https://youtu.be/F9vn4PcpUYo

●❯────｢ 𝐏𝐀𝐂𝐊 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑𝐒 𝐇𝐎𝐌𝐄 ｣────❮●

https://www.mediafire.com/file/grv5offmageuv0w/Fotos+pra+home.+By-+NickZ.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST｣────❮●`)
break
case 'nome':
reply(`●❯────｢ 𝐓𝐑𝐎𝐂𝐀𝐑 𝐍𝐎𝐌𝐄 𝐃𝐎 𝐙𝐀𝐏 ｣────❮●

https://youtu.be/gaBwDhVhR1A

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'bombtext':
reply(`●❯────｢ 𝐂𝐎𝐌𝐎 𝐂𝐎𝐋𝐎𝐂𝐀𝐑 𝐁𝐎𝐌𝐁 𝐓𝐄𝐗𝐓 ｣────❮●

https://youtu.be/6CncvKp-HrY

●❯────｢ 𝐌𝐈𝐍𝐈 𝐏𝐀𝐂𝐊 𝐁𝐎𝐌𝐁 𝐓𝐄𝐗𝐓 ｣────❮●

https://www.mediafire.com/file/i8h6yxv33oh998k/BombTexts.zip/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'ponto':
reply(`●❯────｢ 𝐈𝐌𝐔𝐍𝐈𝐙𝐀𝐑 𝐏𝐎𝐍𝐓𝐎 ｣────❮●

https://youtu.be/uZNzW6JHXxU

https://youtu.be/x5I2Og6i-9c

https://youtu.be/kvSgIvQf0v8

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'botao':
reply(`●❯────｢ 𝐂𝐎𝐌𝐎 𝐂𝐎𝐋𝐎𝐂𝐀𝐑 𝐁𝐎𝐓𝐎𝐄𝐒 ｣────❮●

Vídeo: https://youtu.be/JnO-wg0T0Mw

Pack: https://www.mediafire.com/file/sdkqaidx1qh0tkf/𝐏𝐀𝐂𝐊+𝐃𝐄+𝐁𝐎𝐓𝐎𝐄𝐒+𝐁𝐘+-+𝐍𝐈𝐂𝐊𝐙.zip/file

●❯────｢ ⸙𝐁𝐘:GHOT ｣────❮●`)
break
case 'curso java':
reply(`●❯────｢ 𝐂𝐔𝐑𝐒𝐎 𝐉𝐀𝐕𝐀 ｣────❮●

Playlist: https://youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR

●❯────｢ ⸙𝐁𝐘:GHOT ｣────❮●`)
break

//////////////////BASES//////////////////

case 'aprimorada':
reply(`●❯────｢ 𝐁𝐀𝐒𝐄𝐒 𝐀𝐏𝐑𝐈𝐌𝐎𝐑𝐀𝐃𝐀𝐒 ｣────❮●

-https://www.mediafire.com/file/ua412oiizqb30dj/Base_Aprimorada_2.21.1.5.apk/file

-https://www.mediafire.com/file/kdgfxda8c892pjf/BASE+APRIMORADA+DE+120+SUB+BY+ARCANJIN+MODZ+%E2%9D%A4%EF%B8%8F%E2%9A%A1.apk/file

-https://www.mediafire.com/file/qyh84e89vtwcnyn/Base_especial_80_subs.apk/file

-https://www.mediafire.com/file/wv1n4fo3ienle5t/BASE_APRIMORADA_V13_ESPECIAL_DE_300_SUBS_IMUNE_A_TD_E_COM_METODO_PRIVADO.apk/file

-https://www.mediafire.com/file/gn0vybw93u0xfvm/ESPECIAL_100_SUBS_-_%25EA%25AA%25B6%25F0%259D%2590%2586%25F0%259D%2590%259A%25F0%259D%2590%259A%25F0%259D%2590%25AB%25F0%259D%2590%259A%25EA%25AB%2582_MODDER.zip/file

-https://mega.nz/file/V1Z2wbgJ#8-bswTpT4IUtC_4IWgYGmjekV3TA9qrdZEmjVTekhCc

-https://www.mediafire.com/file/cfj86qa8gcl995t/BASE_APRIMORADA_V6_BY_LORD_MODDER.apk/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'ios':
reply(`●❯────｢ 𝐁𝐀𝐒𝐄𝐒 𝐈𝐎𝐒 ｣────❮●

http://www.mediafire.com/file/rqf8o2rt6jktajs/base%25282%2529.apk/file

https://www.mediafire.com/file/e5r44akgyzxznyh/NAMI+COMEU+SEU+CU.apk/file

https://www.mediafire.com/file/mkvgwzr7cy6srx4/WhatsApp.apk/file

https://mega.nz/file/dAJAhDAC#qG8-N_zSGbbdNdCIYgm2bHgGQdOzzUSzslzd75hD5Tw

Obs:Todas são aprimoradas, não achei nenhuma limpa, caso tenha, me mande PV.

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'freedx':
reply(`●❯────｢ 𝐁𝐀𝐒𝐄𝐒 𝐅𝐑𝐄𝐃𝐗 ｣────❮●

WhatsApp Base FredX 2.21.11.6
https://www.mediafire.com/file/qh0qpl4l4jw9msn/Base_2.21.11.6_by_FredX.apk/file
          

WhatsApp Base FredX 2.21.9.5
https://www.mediafire.com/file/ay28feuoso7wwct/Base_2.21.9.5_by_FredX.apk/file
        

WhatsApp Base FredX 2.21.7.12
https://www.mediafire.com/file/kw7hkwhdyav0xqn/Base_2.21.7.12_by_FredX.apk/file
    

WhatsApp Base FredX 2.21.5.8
https://www.mediafire.com/file/py149gocegfkve4/Base_2.21.5.8_by_FredX.apk/file

         
WhatsApp Base FredX 2.21.3.3
https://www.mediafire.com/file/v73qnji8en19dgv/Base_2.21.3.3_by_FredX.apk/file
          

WhatsApp n19dgv FredX 2.21.1.1
https://www.mediafire.com/file/ed8jsrqe2lwjcak/Base_2.21.1.1_by_FredX_.apk/file

●❯────｢⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'joestar':
reply(`●❯────｢ 𝐁𝐀𝐒𝐄𝐒 𝐉𝐎𝐄𝐒𝐓𝐀𝐑 ｣────❮●

WhatsApp Base JoestarMini V7 primário 2.21.22.26
https://www.mediafire.com/file/ezfz47o7tssqhm4/Joestar_Mini_v7_2.21.22.26_Prim%25C3%25A1rio.apk/file

WhatsApp Base JoestarMini V7 secundária 2.21.22.26
https://www.mediafire.com/file/q5jcud79ptt6qrr/Joestar_Mini_v7_2.21.22.26_Secund%25C3%25A1rio.apk/file


WhatsApp Base JoestarMini V6 Primário 2.21.19.21
https://www.mediafire.com/file/55gy9z3roavvdqx/Joestar_Mini_V6_2.21.19.21_Prim%25C3%25A1rio.apk/file

WhatsApp Base JoestarMini V6 secundária 
2.21.19.21
https://www.mediafire.com/file/j5t6ix86cwmjp8t/Joestar_Mini_V6_2.21.19.21_Secund%25C3%25A1rio.apk/file


WhatsApp Base JoestarMini V5 Primária 2.21.16.20
https://www.mediafire.com/file/uvek8ex68rpz5b1/Joestar_Mini_V5_2.21.16.20_Prim%25C3%25A1rio.apk/file
          

WhatsApp Base JoestarMini V5 Secundária 2.21.16.20
https://www.mediafire.com/file/0lmk5vh2hlz8w9j/Joestar_Mini_V5_2.21.16.20_Secund%25C3%25A1rio.apk/file
       

WhatsApp Base JoestarMini V4 Primária 2.21.13.28
https://www.mediafire.com/file/army8zyba2eje53/JoestarMini_V4_2.21.13.28_Prim%25C3%25A1rio.apk/file

         
WhatsApp Base JoestarMini V4 Secundária 2.21.13.28
https://www.mediafire.com/file/htt2dtma8i2219z/JoestarMini_V4_2.21.13.28_Secund%25C3%25A1rio.apk/file
       

WhatsApp Base JoestarMini V3 Primária 2.21.10.16
https://www.mediafire.com/file/5ii9xg3rltzy5dm/Base_2.21.10.16_Prim%25C3%25A1rio_%2528JoestarMini_v3%2529%25282%2529.apk/file
          

WhatsApp Base JoestarMini V3 Secundária 2.21.10.16
https://www.mediafire.com/file/zy4f6maig9figwe/Base_2.21.10.16_Secund%25C3%25A1rio_%2528JoestarMini_v3%2529%25282%2529.apk/file
        

WhatsApp Base JoestarMini V2 Primária 2.21.8.17
https://www.mediafire.com/file/47wzs1d5swtipmc/JoestarMini_V2_%2528Base_2.21.8.17%2529.apk/file
        
          
WhatsApp Base JoestarMini V1 Primária 2.21.5.1
https://www.mediafire.com/file/0en7wjzoz00qn32/JoestarMini_V1_%2528Base_2.21.5.1%2529.apk/file

        
WhatsApp Base JoestarMini Business V1 2.21.9.15
https://www.mediafire.com/file/8ypp3096s20wfig/Base_2.21.9.15_Business_by_Joestar.apk/file1.8.17%2529.apk

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'wago':
reply(`●❯────｢ 𝐁𝐀𝐒𝐄𝐒 𝐖𝐀 𝐆𝐎 ｣────❮●

Whatsapp Wa Go 2.20.202.18 (Base Secundária)
https://www.mediafire.com/file/2ionkm9pqdp2nls/WhatApp+GO+Edition+v0.20.113l+(com.wago).apk/file

Whatsapp Wa Go 2.20.202.18 (Base Primária)
https://www.mediafire.com/file/nutwn0ix86sqia4/WhatsApp+GO+Edition+v0.20.113l.apk/file

Whatsapp Wa Go 2.21.1.13 (Base Secundária)
https://www.mediafire.com/file/sij6d3bht9klecs/WhatsApp+GO+Edition+v0.21.1L+(com.wago)+.apk/file

●❯────｢ ⸙𝐁𝐘:GHOST ｣────❮●`)
break
case 'sam':
reply(`●❯────｢𝐁𝐀𝐒𝐄𝐒｣────❮●\n\nWhatsApp Base 2.21.15.15 With Privacy [ Fixed Update ]\nhttps://www.mediafire.com/file/qzsjf8ngfv32wes/f_WhatsApp_2.21.15.15-SamMods.apk/file\n\n\nWhatsApp Base 2.21.9.10 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/knu3tzpsrk5sjxq/WhatsApp_2.21.9.10.apk/file\n\n\n\nWhatsApp Base 2.21.14.18 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/4tlga1fh6abbix3/WhatsApp_2.21.14.18-By.SamMods.apk/file\n\nWhatsApp Base 2.21.19.17 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/0j6urg4m82cergo/WhatsApp_2.21.19.17-By.SamMods.apk/file\n\n\n\nWhatsApp Base 2.21.12.14 With Privacy [ Fixed 2 Status View ]\nhttps://www.mediafire.com/file/6cm73kp1f8tidm0/WhatsApp+2.21.12.14+Fixed+2+By.SamMods.apk/file\n          \n\nWhatsApp Base 2.21.5.3 With Privacy [ Latest Base ]\nhttp://www.mediafire.com/file/sqm2wu6zoa0lyri/WhatsApp_2.21.5.3+By+SamMods.apk/file\n\n         \n\nWhatsApp Base 2.21.4.8 With Privacy [ Latest Base ]\nhttp://www.mediafire.com/file/u3dy1v6iutvwfou/WhatsApp+2.21.4.8+By+SamMods.apk/file\n\n\n\nWhatsApp Base 2.21.1.5 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/hae6h7yese7dj81/WhatsApp_2.21.1.5.apk/file\n\n         \n\nWhatsApp Base 2.21.1.1 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/7iw9tn8kiplfygh/WhatsApp_2.21.1.1-.apk/file\n\n\n\nWhatsApp Base 2.21.3.3 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/pa5331b1uc0hjlo/WhatsApp_2.21.3.3..apk/file\n\n         \n\nWhatsApp Base 2.21.2.6 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/ztmi9cexwgmzjiv/WhatsApp_2.21.2.6..apk/file\n\n\nWhatsApp Base 2.21.14.18 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/knu3tzpsrk5sjxq/WhatsApp_2.21.9.10.apk/file\n\n\n\nWhatsApp Base 2.21.2.6 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/ztmi9cexwgmzjiv/WhatsApp_2.21.2.6..apk/file\n\n\n\nWhatsApp Base 2.21.8.7 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/w8omb7pa59yvw6p/WhatsApp_2.21.8.7-broken-by-B58-new_B58.apk/file\n\n\nWhatsApp Base 2.21.8.11 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/m638r3ryl20rdcg/WhatsApp_2.21.8.11-broken-by-B58-new_B58.apk/file\n\n\nWhatsApp Base 2.21.1.1 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/7iw9tn8kiplfygh/WhatsApp_2.21.1.1-.apk/file\n\n\nWhatsApp Base 2.21.4.8 With Privacy [ Latest Base ]\nhttp://www.mediafire.com/file/u3dy1v6iutvwfou/WhatsApp+2.21.4.8+By+SamMods.apk/file\n\n\nWhatsApp Base 2.21.7.1 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/9yxvmrdtm35ckno/WhatsApp_2.21.7.1+By+SamMods.apk/file\n\n\nWhatsApp Base 2.21.9.10 With Privacy [ Latest Base ]\nhttps://www.mediafire.com/file/knu3tzpsrk5sjxq/WhatsApp_2.21.9.10.apk/file\n\n\n\n●❯────｢⸙𝐁𝐘:GHOST ｣────❮●`)
break
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Ola @${senderr.split('@')[0]}, Nao resconheco esse comando ${prefix + command} não está no meu menu`
flaviojs.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



