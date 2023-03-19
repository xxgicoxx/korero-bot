const Tmdb = require('themoviedb.js');

const { tmdbConfig } = require('../configs');
const { constants } = require('../utils');

const tmdb = new Tmdb(tmdbConfig);

class TmdbService {
  async theatres(bot, chat) {
    try {
      const theatres = await tmdb.movie().getNowPlaying();

      if (!theatres || !theatres.results || !theatres.results.length) {
        await bot.sendMessage(chat.id, constants.MESSAGE_THEATRES_NOT_FOUND);

        return;
      }

      this.sendResults(bot, chat, theatres.results);
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }

  async trending(bot, chat, type) {
    try {
      let trending;

      switch (type) {
        case constants.COMMAND_ALL:
          trending = await tmdb.all().getTrending();

          break;
        case constants.COMMAND_MOVIE:
          trending = await tmdb.movie().getTrending();

          break;
        case constants.COMMAND_PERSON:
          trending = await tmdb.person().getTrending();

          break;
        case constants.COMMAND_TV:
          trending = await tmdb.tv().getTrending();

          break;
        default:
          break;
      }

      if (!trending || !trending.results || !trending.results.length) {
        await bot.sendMessage(chat.id, constants.MESSAGE_TRENDING_NOT_FOUND);

        return;
      }

      this.sendResults(bot, chat, trending.results);
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }

  async popular(bot, chat, type) {
    try {
      let popular;

      switch (type) {
        case constants.COMMAND_MOVIE:
          popular = await tmdb.movie().getPopular();

          break;
        case constants.COMMAND_PERSON:
          popular = await tmdb.person().getPopular();

          break;
        case constants.COMMAND_TV:
          popular = await tmdb.tv().getPopular();

          break;
        default:
          break;
      }

      if (!popular || !popular.results || !popular.results.length) {
        await bot.sendMessage(chat.id, constants.MESSAGE_TRENDING_NOT_FOUND);

        return;
      }

      this.sendResults(bot, chat, popular.results);
    } catch (error) {
      console.error(error);

      await bot.sendMessage(chat.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }

  async sendResults(bot, chat, results) {
    let title = '';
    let poster = '';
    let message = '';

    for (const result of results) {
      title = `<b>Title:</b> ${result.original_title || result.name}`;
      poster = `<b>Poster:</b> https://image.tmdb.org/t/p/w200${result.poster_path || result.profile_path}`;
      message += `\n\n${title}\n${poster}`;
    }

    await bot.sendMessage(chat.id, message, { parse_mode: constants.PARSE_MODE });
  }
}

module.exports = TmdbService;
