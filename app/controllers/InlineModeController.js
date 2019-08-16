const auth = require('../config/auth');

const Telegram = require('telegram-node-bot');

const TelegramService = require('../services/TelegramService');
const OpenSubtitlesService = require('../services/OpenSubtitlesService');

class InlineModeController extends Telegram.TelegramBaseInlineQueryController {
    handle(scope) {
        const query = scope.inlineQuery.query;

        if (query) {
            const openSubtitlesService = new OpenSubtitlesService(auth.opensubtitles);

            openSubtitlesService.getSubtitle(query).then((response) => {
                const telegramService = new TelegramService();
                const menu = telegramService.inlineMenu(response);

                scope.answer(menu, {}, (result) => {});
            }).catch((error) => {
                console.log(error);

                scope.answer([], {}, (response) => {});
            });   
        }
    }
}

module.exports = InlineModeController