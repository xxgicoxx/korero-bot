const telegram = require('telegram-node-bot');

const MessageService = require('../services/MessageService');
const OpenSubtitlesService = require('../services/OpenSubtitlesService');
const TelegramService = require('../services/TelegramService');

const telegramConfig = require('../configs/telegram');

const { TelegramBaseController } = telegram;
const { TextCommand } = telegram;
const bot = new telegram.Telegram(telegramConfig.token, {
  webAdmin: {
    port: 7770,
    host: 'localhost',
  },
  workers: 1,
});

const messageService = new MessageService();
const openSubtitlesService = new OpenSubtitlesService();
const telegramService = new TelegramService();

class BotController extends TelegramBaseController {
  async handle(scope) {
    messageService.hanlde(scope);
  }

  async start(scope) {
    messageService.start(scope);
  }

  async search(scope) {
    openSubtitlesService.getSubtitle(scope).then((response) => {
      telegramService.menu(response, scope);
    }).catch((error) => {
      console.log(error);
    });
  }

  async help(scope) {
    messageService.help(scope);
  }

  get routes() {
    return {
      start: 'start',
      search: 'search',
      help: 'help',
    };
  }
}

bot.router
  .when(new TextCommand('/start', 'start'), new BotController())
  .when(new TextCommand('/search', 'search'), new BotController())
  .when(new TextCommand('/help', 'help'), new BotController())
  .otherwise(new BotController());
