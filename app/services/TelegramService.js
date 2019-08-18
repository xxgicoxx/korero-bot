const Telegram = require('telegram-node-bot');

const ArticleMenuItem = require('../models/ArticleMenuItem');
const ArticleMenu = require('../models/ArticleMenu');

class TelegramService {
    
    constructor() {}

    eventMenu(subtitles, scope) {
        let menu = {oneTimeKeyboard: true};

        if(!subtitles.length) {
            scope.sendMessage('Subtitle not found', { 
                reply_markup: JSON.stringify({ 
                    remove_keyboard: true, 
                    one_time_keyboard: true 
                }) 
            });
        } else {
            menu['message'] = 'Select subtitle';

            subtitles.forEach(e => {
                menu[`[${e.lang}] - ${e.filename}`] = () => {
                    scope.sendMessage(e.url, { 
                        reply_markup: JSON.stringify({
                            remove_keyboard: true, 
                            one_time_keyboard: true
                        })
                    });
                }
            });
        }

        return menu;
    }

    inlineMenu(subtitles) {
        const articleMenu = new ArticleMenu();
                
        subtitles.forEach(e => {
            articleMenu.add(new ArticleMenuItem(`${e.url}`, `${e.filename}`, `${e.url}`, `${e.filename}`, `${e.lang}`).toJSON());
        });

        return articleMenu.menu();
    }

    start(auth) {
        const bot = new Telegram.Telegram(auth);
        return bot;
    }
}

module.exports = TelegramService;