module.exports = Object.freeze({
  MESSAGE_HELP: '<b>I can help you with many things.\n\nYou can control me by sending these commands:\n\n</b>',
  MESSAGE_ERROR_TRY_AGAIN: 'Error, try again later',
  MESSAGE_SELECT_SUBTITLE: 'Select subtitle',
  MESSAGE_SUBTITLE_NOT_FOUND: 'Subtitle not found',
  MESSAGE_THEATRES_NOT_FOUND: 'Theatres not found',
  MESSAGE_TRENDING_NOT_FOUND: 'Trending not found',

  COMMAND_ALL: 'all',
  COMMAND_MOVIE: 'movie',
  COMMAND_PERSON: 'person',
  COMMAND_TV: 'tv',
  COMMAND_START: '/start',
  COMMAND_THEATRES: '/theatres',
  COMMAND_COMMANDS: '/commands',
  COMMAND_HELP: '/help',

  COMMAND_SUBTITLES_REGEX: /\/subtitles (.+)/,
  COMMAND_POPULAR_REGEX: /\/popular (.+)/,
  COMMAND_TRENDING_REGEX: /\/trending (.+)/,

  ON_MESSAGE: 'message',

  PARSE_MODE: 'html',
});
