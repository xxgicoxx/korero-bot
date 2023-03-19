const Opensubtitlesapi = require('opensubtitles-api');

const { opensubtitlesConfig } = require('../configs');
const { constants } = require('../utils');

const opensubtitles = new Opensubtitlesapi(opensubtitlesConfig);

class OpenSubtitlesService {
  async search(bot, chat, query) {
    try {
      const result = await opensubtitles.search({ query });
      const subtitles = result == null ? null : Object.values(result);

      if (!subtitles || !subtitles.length) {
        await bot.sendMessage(chat.id, constants.MESSAGE_SUBTITLE_NOT_FOUND);

        return;
      }

      const keyboard = [];

      subtitles.forEach((e) => {
        keyboard.push([{ text: `[${e.lang}] - ${e.url}` }]);
      });

      await bot.sendMessage(chat.id, constants.MESSAGE_SELECT_SUBTITLE, {
        reply_markup: {
          keyboard,
          remove_keyboard: true,
          one_time_keyboard: true,
        },
      });
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = OpenSubtitlesService;
