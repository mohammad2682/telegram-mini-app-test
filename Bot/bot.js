const { Telegraf } = require('telegraf')

const TOKEN = "7369500154:AAFYQ4M3jV2ezs3JIYRlXnInN1kKuY08wDQ";
const webAppLink = 'https://mohammad2682.github.io/telegram-mini-app-test/';

const bot = new Telegraf(TOKEN);

bot.start((ctx) => {
    ctx.reply('Welcome To Test Mini App ;)', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: { url: webAppLink }
                    }
                ]
            ]
        }
    });
});

bot.launch();
