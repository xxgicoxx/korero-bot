const Tmdb = require('themoviedb.js');

const { tmdbConfig } = require('../configs');

const tmdb = new Tmdb(tmdbConfig);

class TmdbService {
  async theatres(bot, chat) {
    try {
      const theatres = await tmdb.movie().getNowPlaying();

      if (!theatres || !theatres.results.length) {
        await bot.sendMessage(chat.id, 'Theatres not found');
      } else {
        theatres.results.forEach((e) => {
          bot.sendPhoto(chat.id, `https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`, {
            caption: e.original_title,
          });
        });
      }
    } catch (error) {
      console.error(error);

      bot.sendMessage(chat.id, 'Error, try again later');
    }
  }

  async trending(bot, chat, type) {
    try {
      let trending;

      switch (type) {
        case 'all':
          trending = await tmdb.all().getTrending();
          break;
        case 'movie':
          trending = await tmdb.movie().getTrending();
          break;
        case 'person':
          trending = await tmdb.person().getTrending();
          break;
        case 'tv':
          trending = await tmdb.tv().getTrending();
          break;
        default:
          break;
      }

      if (!trending || !trending.results.length) {
        await bot.sendMessage(chat.id, 'Trending not found');
      } else {
        trending.results.forEach((e) => {
          bot.sendPhoto(chat.id, `https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`, {
            caption: e.original_title,
          });
        });
      }
    } catch (error) {
      console.error(error);

      bot.sendMessage(chat.id, 'Error, try again later');
    }
  }

  async popular(bot, chat, type) {
    try {
      let popular;

      switch (type) {
        case 'movie':
          popular = await tmdb.movie().getPopular();
          break;
        case 'person':
          popular = await tmdb.person().getPopular();
          break;
        case 'tv':
          popular = await tmdb.tv().getPopular();
          break;
        default:
          break;
      }

      if (!popular || !popular.results.length) {
        await bot.sendMessage(chat.id, 'Trending not found');
      } else {
        popular.results.forEach((e) => {
          bot.sendPhoto(chat.id, `https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`, {
            caption: e.original_title,
          });
        });
      }
    } catch (error) {
      console.error(error);

      bot.sendMessage(chat.id, 'Error, try again later');
    }
  }
}

module.exports = TmdbService;
