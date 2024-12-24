const {
  command,
  isPrivate,
  getBuffer
} = require("../lib/");
// Eypz 

let audios = ["https://files.catbox.moe/ahf9me.mp3", "https://files.catbox.moe/cp9zab.mp3", "https://files.catbox.moe/eywp66.mp3", "https://files.catbox.moe/ahf9me.mp3", "https://files.catbox.moe/cp9zab.mp3"];
command({
  pattern: "alive ?(.*)",
  fromMe: isPrivate,
  desc: "Patron here",
  type: "user"
}, async (message, match, m, client) => {
  try {
    let aud = audios[Math.floor(Math.random() * audios.length)];
    let buff = await getBuffer(aud);
    await message.client.sendMessage(message.jid, {
      'audio': buff,
      'mimetype': "audio/mpeg",
      'ptt': true,
      'seconds': "0xbebc74b",
      'fileLength': "100000000",
      'contextInfo': {
        'externalAdReply': {
          'title': "ʜᴇʏ ᴘᴏᴏᴋɪᴇ",
          'body': "Patron md",
          'sourceUrl': "https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q",
          'mediaUrl': "",
          'mediaType': 1,
          'showAdAttribution': true,
          'renderLargerThumbnail': false,
          'thumbnailUrl': "https://files.catbox.moe/vneik8.jpg"
        }
      }
    });
  } catch (error) {
    return message.reply(error);
  }
});
