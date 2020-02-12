const { TelegramBaseController } = require('telegram-node-bot');

const { OpenSubtitlesService } = require('../services');

const openSubtitlesService = new OpenSubtitlesService();

class OpenSubtitlesController extends TelegramBaseController {
  async search($) {
    openSubtitlesService.search($);
  }

  get routes() {
    return {
      search: 'search',
    };
  }
}

module.exports = OpenSubtitlesController;
