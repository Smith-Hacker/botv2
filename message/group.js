const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (flaviojs, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await flaviojs.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await flaviojs.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(flaviojs.user.jid)) {
            flaviojs.sendMessage(anu.jid, 'Olá! Obrigado por me convidar, se você quiser usar o bot digite ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(flaviojs.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await flaviojs.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = flaviojs.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('America/Sao_Paulo').format("HH:mm")
                teks = `Ola novato\n${anu_user} \nGrupo de Boa Sorte e Seguimento de Regras`
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
                buttons = [{buttonId: `#hfyh`,buttonText:{displayText: 'RECEBER'},type:1}]
                imageMsg = (await flaviojs.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: 'NÃO FAÇA DIVERSÃO BRO', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await flaviojs.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                flaviojs.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(flaviojs.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await flaviojs.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = flaviojs.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('America/Sao_Paulo').format("HH:mm")
                memeg = mdata.participants.length
                out = `Não se esqueça de nossas memórias\n${anu_user}\n Espero que você esteja feliz lá fora`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
                buttons = [{buttonId: `#alquran 1`,buttonText:{displayText: 'ADEUS'},type:1}]
                imageMsg = (await flaviojs.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: 'VOLTAR E COMPRAR FRANGO GRELHADO', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await flaviojs.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                flaviojs.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}