const opensubtitles = {
  useragent: process.env.USERAGENT || 'TemporaryUserAgent',
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  ssl: process.env.SSL || true,
};

module.exports = opensubtitles;
