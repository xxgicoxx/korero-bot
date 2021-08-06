class HelpService {
  async commands(bot, chat) {
    try {
      let message = 'I can help you with many things.\n\nYou can control me by sending these commands:\n\n';

      const commands = [
        { command: '/search {query}', description: 'Search subtitle' },
        { command: '/theatres', description: 'In Theaters' },
        { command: '/popular movie', description: 'Popular movies' },
        { command: '/popular person', description: 'Popular persons' },
        { command: '/popular tv', description: 'Popular tv shows' },
        { command: '/trending all', description: 'Trending' },
        { command: '/trending movie', description: 'Trending movies' },
        { command: '/trending person', description: 'Trending persons' },
        { command: '/trending tv', description: 'Trending tv shows' },
        { command: '/commands', description: 'Command list' },
        { command: '/help', description: 'Help' },
      ];

      commands.forEach((command) => {
        message += `${command.command} - ${command.description}\n`;
      });

      await bot.sendMessage(chat.id, message, { parse_mode: 'html' });
    } catch (error) {
      console.error(error);
    }
  }

  async help(bot, chat) {
    try {
      let message = '<b>Query examples:</b>\n';

      message += '<i>/search How I Met Your Mother S01E02</i>\n';
      message += '<i>Output: subtitle of How I Met Your Mother season 01 episode 02</i>\n\n';

      message += '<i>/search Harry Potter and the Goblet of Fire</i>\n';
      message += '<i>Output: subtitle of Harry Potter and the Goblet of Fire</i>\n\n';

      await bot.sendMessage(chat.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, 'Error, try again later');
    }
  }
}

module.exports = HelpService;
