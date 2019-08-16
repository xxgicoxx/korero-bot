const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handle(scope) {
        scope.sendMessage(`Command not found`);
    }
}

module.exports = OtherwiseController