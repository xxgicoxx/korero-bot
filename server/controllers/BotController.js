const { telegramConfig } = require('../configs');

const {
  HelpService,
  OpenSubtitlesService,
  TmdbService,
} = require('../services');

const helpService = new HelpService();
const openSubtitlesService = new OpenSubtitlesService();
const tmdbService = new TmdbService();

class BotController {
  constructor(bot) {
    this.bot = bot;
  }

  async handle() {
    try {
      this.bot.on('message', async ($) => {
        const command = $.text ? $.text.replace(telegramConfig.username, '') : $.text;

        switch (command) {
          case '/theatres':
            tmdbService.theatres(this.bot, $.chat);
            break;
          case '/commands':
            helpService.commands(this.bot, $.chat);
            break;
          case '/help':
            helpService.help(this.bot, $.chat);
            break;
          default:
            break;
        }
      });

      this.bot.onText(/\/subtitles (.+)/, async ($, match) => {
        const query = match[1];
        await openSubtitlesService.search(this.bot, $.chat, query);
      });

      this.bot.onText(/\/popular (.+)/, async ($, match) => {
        const type = match[1];
        tmdbService.popular(this.bot, $.chat, type);
      });

      this.bot.onText(/\/trending (.+)/, async ($, match) => {
        const type = match[1];
        tmdbService.trending(this.bot, $.chat, type);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BotController;
