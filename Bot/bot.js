const { Telegraf } = require('telegraf')

const TOKEN = "7369500154:AAFYQ4M3jV2ezs3JIYRlXnInN1kKuY08wDQ";

const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.launch()