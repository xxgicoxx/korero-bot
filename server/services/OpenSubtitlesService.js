const Opensubtitlesapi = require('opensubtitles-api');

const { opensubtitlesConfig } = require('../configs');

const opensubtitles = new Opensubtitlesapi(opensubtitlesConfig);

class OpenSubtitlesService {
  async search(bot, chat, query) {
    try {
      const result = await opensubtitles.search({ query });
      const subtitles = result == null ? null : Object.values(result);

      if (!subtitles || !subtitles.length) {
        await bot.sendMessage(chat.id, 'Subtitle not found');
      } else {
        const keyboard = [];

        subtitles.forEach((e) => {
          keyboard.push([{ text: `[${e.lang}] - ${e.url}` }]);
        });

        await bot.sendMessage(chat.id, 'Select subtitle', {
          reply_markup: {
            keyboard,
            remove_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, 'Error, try again later');
    }
  }
}

module.exports = OpenSubtitlesService;
