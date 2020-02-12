const opensubtitles = {
  useragent: process.env.KORERO_OPENSUBTITLES_USERAGENT || 'TemporaryUserAgent',
  username: process.env.KORERO_OPENSUBTITLES_USERNAME || '',
  password: process.env.KORERO_OPENSUBTITLES_PASSWORD || '',
  ssl: process.env.KORERO_OPENSUBTITLES_SSL || true,
};

module.exports = opensubtitles;
