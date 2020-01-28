const Opensubtitlesapi = require('opensubtitles-api');

const opensubtitlesConfig = require('../configs/opensubtitles');

const opensubtitles = new Opensubtitlesapi(opensubtitlesConfig);

class OpenSubtitles {
  getSubtitle(scope) {
    const query = scope.message.text.replace('/search', '');

    return opensubtitles.search({ query });
  }
}

module.exports = OpenSubtitles;
