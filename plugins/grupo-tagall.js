let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝕋𝕖𝕝𝕖𝕥𝕣𝕒𝕟𝕤𝕡𝕠𝕣𝕥𝕒𝕥𝕚𝕠𝕟 ${pesan}`
let teks = `*MENCION GENERAL 🤬*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `- 💠 @${mem.id.split('@')[0]}\n`}
teks += `𝑻𝑬𝑳𝑬𝑻𝑹𝑨𝑵𝑺𝑷𝑶𝑹𝑻𝑨𝑻𝑰𝑶𝑵 𝑩𝑶𝑻 𝑩𝒀 𝑴𝑶𝑵𝑶𝑽𝑨𝑵 𝑽𝑬𝑵𝑻𝑨𝑺`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
