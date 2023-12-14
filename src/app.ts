
import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, (client) => {
	console.log(`Bot started at ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
    if(message.author.bot) { return; }
    const regex = new RegExp("https://(twitter|x).com.*/status/");
    if(regex.test(message.content)) {
        await message.reply(message.content.replace(new RegExp("https://(twitter|x).com"), "https://vxtwitter.com"));
    }
});

client.login(process.env.TOKEN);