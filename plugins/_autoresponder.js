import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑴𝒐𝒏𝒌𝒆𝒚 𝑩𝒐𝒕 𝘾𝙧𝙚𝙖𝙙𝙤 𝙥𝙤𝙧 𝙈𝙤𝙣𝙤𝙫𝙖𝙣 𝙑𝙚𝙣𝙩𝙖𝙨', body: '𝙈𝙤𝙣𝙤𝙫𝙖𝙣 𝙑𝙚𝙣𝙩𝙖𝙨', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
