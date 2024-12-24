const { command, isPrivate, getJson, getBuffer } = require("../lib");

command(
    {
        pattern: "animegen",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anime-gen?apikey=free_key@maher_apis&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/vneik8.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by PATRON-MD"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "animegen",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

command(
    {
        pattern: "andiff",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anime-diffusion?apikey=free_key@maher_apis&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/vneik8.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by PATRON-MD"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "Andiffi",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

command(
    {
        pattern: "anything",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anything?apikey=elDrYH7GsuIeBkyw1&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/vneik8.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by PATRON-MD"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "Anything",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

//const { command, isPrivate, getJson, getBuffer } = require("../lib");


command(
    {
        pattern: "blackbox",
        desc: "blackbox ai chat",
        fromMe: isPrivate,
        type: "ai",   
    },
    async(message, match) => {
        if (!match) return await message.reply("i need a search query")
        const response = await getjson(`https://api.nexoracle.com/ai/blackbox?apikey=elDrYH7GsuIeBkyw1&prompt=${match}`);
        const res = response.result;
        await message.client.sendMessage(message.jid, res);
    }
);


command(
    {
        pattern: "gpt4",
        desc: "AI chat",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) {
            return await message.reply("I need a search query.");
        }

        try {
            const response = await getJson(`https://api.nexoracle.com/ai/chatgpt-v4?apikey=elDrYH7GsuIeBkyw1&prompt=${encodeURIComponent(match)}`);
            if (response && response.result) {
                // Send only the "result" field
                await message.reply(response.result);
            } else {
                await message.reply("No valid response received. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            await message.reply("An error occurred while processing your request. Please try again.");
        }
    }
);

command(
    {
        pattern: "gpt3",
        desc: "blackbox AI chat",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) {
            return await message.reply("I need a search query.");
        }

        try {
            const response = await getJson(`
https://api.nexoracle.com/ai/chatgpt-3?apikey=free_key@maher_apis&prompt=${encodeURIComponent(match)}`);
            if (response && response.result) {
                // Send only the "result" field
                await message.reply(response.result);
            } else {
                await message.reply("No valid response received. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            await message.reply("An error occurred while processing your request. Please try again.");
        }
    }
);

command(
    {
        pattern: "guru",
        desc: "blackbox AI chat",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) {
            return await message.reply("I need a search query.");
        }

        try {
            const response = await getJson(`
https://api.nexoracle.com/ai/degree-guru?apikey=free_key@maher_apis&prompt=${encodeURIComponent(match)}`);
            if (response && response.result) {
                // Send only the "result" field
                await message.reply(response.result);
            } else {
                await message.reply("No valid response received. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            await message.reply("An error occurred while processing your request. Please try again.");
        }
    }
);

command(
    {
        pattern: "diffusion",
        desc: "ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        const img = `https://api.nexoracle.com/ai/diffusion?apikey=free_key@maher_apis&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/vneik8.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by PATRON-MD"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "diffusion",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

command(
    {
        pattern: "shaka",
        desc: "interact with shaka ai",
        type: "ai",
        fromMe: false,
    },
    async (message, match) => {
        const query = message.reply_message 
            ? `${match || ""} ${message.reply_message.text}`.trim() 
            : match;

        if (!query) {
            return await message.reply("Provide search query");
        }

        try {
            var res = await getJson(`https://nikka-api.us.kg/ai/moshai?q=${query}&apiKey=nikka`);
            var tex = res.data || "fekd up";
            await message.reply(tex);
        } catch (error) {
            await message.reply(error);
        }
    }
);

command(
    {
        pattern: "simsiai",
        desc: "AI chat",
        type: "ai",
        fromMe: isPrivate,
    },
    async (message, match) => {
        if (!match) {
            return await message.reply("Please provide a query!");
        }

        try {
            // Fetch data from the Simsimi API
            const response = await getJson(`https://api.giftedtech.my.id/api/ai/simsimi?apikey=gifted&query=${match}`);

            // Check if the response is valid and has a result
            if (response && response.result) {
                const res = response.result;  // The response from Simsimi API
                await message.reply(res);
            } else {
                // If the response doesn't have a valid result
                await message.reply("Sorry, I couldn't get a valid response from the API.");
            }
        } catch (error) {
            // Catch any errors from the API request or the code
            console.error("Error fetching data from Simsimi API:", error);
            await message.reply("An error occurred while processing your request. Please try again later.");
        }
    }
);

command(
    {
        pattern: "wwdgpt",
        desc: "AI chat",
        type: "ai",
        fromMe: isPrivate,
    },
    async (message, match) => {
        if (!match) {
            return await message.reply("Please provide a query!");
        }

        try {
            // Fetch data from the Simsimi API
            const response = await getJson(`https://api.giftedtech.my.id/api/ai/wwdgpt?apikey=gifted&prompt=${match}`);

            // Check if the response is valid and has a result
            if (response && response.result) {
                const res = response.result;  // The response from Simsimi API
                await message.reply(res);
            } else {
                // If the response doesn't have a valid result
                await message.reply("Sorry, I couldn't get a valid response from the API.");
            }
        } catch (error) {
            // Catch any errors from the API request or the code
            console.error("Error fetching data from Simsimi API:", error);
            await message.reply("An error occurred while processing your request. Please try again later.");
        }
    }
);






















