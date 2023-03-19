const { constants } = require('../utils');

class HelpService {
  async help(bot, chat) {
    try {
      const commands = [
        { command: '/subtitles <b>{query}</b>', description: 'Search subtitle' },
        { command: '/theatres', description: 'In Theaters' },
        { command: '/popular movie', description: 'Popular movies' },
        { command: '/popular person', description: 'Popular persons' },
        { command: '/popular tv', description: 'Popular tv shows' },
        { command: '/trending all', description: 'Trending' },
        { command: '/trending movie', description: 'Trending movies' },
        { command: '/trending person', description: 'Trending persons' },
        { command: '/trending tv', description: 'Trending tv shows' },
        { command: '/help', description: 'Help' },
      ];
      let message = '';

      message += constants.MESSAGE_HELP;
      message += commands.map((command) => `${command.command} - ${command.description}`).join('\n');

      await bot.sendMessage(chat.id, message, { parse_mode: constants.PARSE_MODE });
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = HelpService;
