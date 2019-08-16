const auth = require('../config/auth');

const TelegramService = require('../services/TelegramService');

class BotController {
    start() {
        const telegramService = new TelegramService();
        return telegramService.start(auth.telegram.token);
    }
}

module.exports = BotController