const Telegram = require('telegram-node-bot');

const InlineModeController = require('./controllers/InlineModeController');
const EventsController = require('./controllers/EventsController');
const OtherwiseController = require('./controllers/OtherwiseController');
const BotController = require('./controllers/BotController')

const chatbot = new BotController().start();

chatbot.router.when(new Telegram.TextCommand('/start', 'start'), new EventsController())
              .when(new Telegram.TextCommand('/search', 'search'), new EventsController())
              .otherwise(new OtherwiseController());

chatbot.router.inlineQuery(new InlineModeController());