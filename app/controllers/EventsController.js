const auth = require('../config/auth');

const Telegram = require('telegram-node-bot');

const TelegramService = require('../services/TelegramService');
const OpenSubtitlesService = require('../services/OpenSubtitlesService');

class EventsController extends Telegram.TelegramBaseController {
    startAction(scope) {
      scope.sendMessage(`Hello, ${scope.message.from.firstName}`);
    }
  
    searchAction(scope) {
      const query = scope.message.text.replace('/search', '');
  
      if(query) {
        const openSubtitlesService = new OpenSubtitlesService(auth.opensubtitles);

        openSubtitlesService.getSubtitle(query).then((response) => {
          const telegramService = new TelegramService();
          const menu = telegramService.eventMenu(response, scope);

          scope.runMenu(menu);
        }).catch((error) => {
          console.log(error);
        });   
      }
    }
    
    get routes() {
      return {
        'start': 'startAction',
        'search': 'searchAction'
      }
    }
}

module.exports = EventsController;