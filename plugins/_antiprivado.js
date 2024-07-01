export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] Hola @${m.sender.split`@`[0]}, Bienvenido(a), recuerda que soy un Bot, no una persona.
No podré ayudarte por privado pero puedo brindarte ayuda si me necesitas en tus grupos.
¡Contáctate con mi CEO para más información!
wa.me/528134565961

Feliz día!!

> ⭐ WHATSAPP NUEVO CANAL Obtendrás Información util que no conocias del bot, consejos y orientaciones.

wa.me/528134565961*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
