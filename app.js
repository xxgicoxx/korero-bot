const { TextCommand, Telegram } = require('telegram-node-bot');

const { OpenSubtitlesController, MessageController } = require('./app/controllers');

const { telegramConfig } = require('./app/configs');

const bot = new Telegram(telegramConfig.token, {
  webAdmin: {
    port: 7772,
    host: 'localhost',
  },
  workers: 1,
});

bot.router
  .when(new TextCommand('/start', 'start'), new MessageController())
  .when(new TextCommand('/help', 'help'), new MessageController())
  .when(new TextCommand('/start', 'start'), new OpenSubtitlesController())
  .when(new TextCommand('/search', 'search'), new OpenSubtitlesController())
  .when(new TextCommand('/help', 'help'), new OpenSubtitlesController())
  .otherwise(new OpenSubtitlesController());
