const Opensubtitlesapi = require('opensubtitles-api');

const { opensubtitlesConfig } = require('../configs');

const opensubtitles = new Opensubtitlesapi(opensubtitlesConfig);

class OpenSubtitles {
  async search($) {
    try {
      const query = $.message.text.replace('/search', '');
      const response = await opensubtitles.search({ query });
      const subtitles = response == null ? null : Object.values(response);

      if (!subtitles || !subtitles.length) {
        $.sendMessage('Subtitle not found');
      } else {
        const menu = { message: 'Select subtitle', oneTimeKeyboard: true };

        subtitles.forEach((e) => {
          menu[`[${e.lang}] - ${e.filename}`] = () => {
            $.sendMessage(e.url, {
              reply_markup: JSON.stringify({
                remove_keyboard: true,
                one_time_keyboard: true,
              }),
            });
          };
        });

        $.runMenu(menu);
      }
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }
}

module.exports = OpenSubtitles;
