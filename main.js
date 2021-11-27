const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./flaviojs.js')
nocache('../flaviojs.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'Arquivo atualizado!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'Arquivo atualizado!'))

const starts = async (flaviojs = new WAConnection()) => {
	flaviojs.logger.level = 'warn'
	flaviojs.version = [2, 2140, 12]
	console.log(color(figlet.textSync('GHOST DEV', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ESTE CÓDIGO FONTE É MANTIDO E PROTEGIDO POR GHOST]\n\n', 'orange'), color('\n======MUITO OBRIGADO PELA AJUDA👇======\n\n•KARMA\n\n======MUITO OBRIGADO PELA BASE👇======\n\n•RAFATABOTZ\n•DEVIL', 'yellow'))
	console.log(color('\n\n©Ghost Dev', 'pink'))
	flaviojs.browserDescription = ["Ghost Dev Baileys", "safari", "2.8.1"];

	// Menunggu QR
	flaviojs.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('ESCANEI AGORA BRO ESTOU ESPERANDO POR MUITO TEMPO'))
	})

	// Menghubungkan
	fs.existsSync(`./flaviojs.json`) && flaviojs.loadAuthInfo(`./flaviojs.json`)
	flaviojs.on('connecting', () => {
		console.log(color('[ Ghost ]', 'orange'), color('PROCESSO DE CONEXÃO'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕕",
    "🕖",
    "🕘",
    "🕙",
    "🕛"
  ]}

	//connect
	flaviojs.on('open', () => {
		console.log(color('[ Ghost ]', 'orange'), color('O BOT JÁ ESTÁ ATIVO :)'));
	})

	// session
	await flaviojs.connect({
		timeoutMs: 30*1000
	})
	fs.writeFileSync(`./flaviojs.json`, JSON.stringify(flaviojs.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	flaviojs.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Bateria : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	flaviojs.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	flaviojs.on('group-participants-update', async (anu) => {
		await welcome(flaviojs, anu)
	})

	flaviojs.on('chat-update', async (message) => {
		require('./flaviojs.js')(flaviojs, message)
	})
}

starts()