const { telegramConfig } = require('../configs');
const { constants } = require('../utils');

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
      this.bot.on(constants.ON_MESSAGE, async ($) => {
        const command = $.text ? $.text.replace(telegramConfig.username, '') : $.text;

        switch (command) {
          case constants.COMMAND_START:
          case constants.COMMAND_COMMANDS:
          case constants.COMMAND_HELP:
            helpService.help(this.bot, $.chat);

            break;
          case constants.COMMAND_THEATRES:
            tmdbService.theatres(this.bot, $.chat);

            break;
          default:
            break;
        }
      });

      this.bot.onText(constants.COMMAND_SUBTITLES_REGEX, async ($, match) => {
        const query = match[1];
        await openSubtitlesService.search(this.bot, $.chat, query);
      });

      this.bot.onText(constants.COMMAND_POPULAR_REGEX, async ($, match) => {
        const type = match[1];
        tmdbService.popular(this.bot, $.chat, type);
      });

      this.bot.onText(constants.COMMAND_TRENDING_REGEX, async ($, match) => {
        const type = match[1];
        tmdbService.trending(this.bot, $.chat, type);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BotController;
