const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "Patron-md repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\nᴘᴀᴛʀᴏɴ-ᴍᴅ🧚

*𝐒͓ɪ͛ᴍ͛ᴩ͛ʟ͛ᴇ᷍ 𝐖ʜ͛ᴀ͛ᴛ͛ꜱ͛ᴀ͛ᴩ͛ᴩ᷍ 𝚳͓ᴜ̟̽ʟ̟ᴛ̽ɪ͛ 𝐃̟͛ᴇ͛ᴠ͛ɪ͛ᴄ͛ᴇ͛ 𝚩͓ᴏ͛ᴛ͛*🖥️

*𝚪⃯ᴇ͛ᴩ͛ᴏ͛ 𝐔͍ʀ͛ʟ͛* : ````https://github.com/Itzpatron/PATRON-MD-V2````

❒ *𝐅͍ᴏ͛ʀ͛ᴋ͛ 𝚫ɴ͛ᴅ͛ 𝐒͓̽ᴛ͛ᴀ̟ʀ̟*

*𝐅ᴜ͛ʟ͛ʟ ͛𝚯ᴩ͛͢ᴇɴ͛ 𝐒ᴏ͛ᴜ͛ʀ͍͛ᴄ͛ᴇ͛*

➫ *𝐒͢͢ᴇ͛ꜱ͛ꜱ͍͛ɪ͛ᴏ͛ɴ͛* : ````Check repo readme````

*𝚻⃯͓ʜ⃯͛ᴀ͛ɴ⃯͛ᴋ͛ꜱ͛*🦋

*➫ 𝐒͍ᴜ͛ᴩ͛ᴩ͛ᴏ͛ʀᴛ̟᷍ 𝐆ʀ͛͢ᴏ͛ᴜ͛ᴩ͍͛*

````https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q````\n`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
