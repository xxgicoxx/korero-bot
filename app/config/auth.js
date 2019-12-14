const opensubtitles = {
    useragent: process.env.USERAGENT || 'TemporaryUserAgent',
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
    ssl: process.env.SSL || true
}

const telegram = {
    token: process.env.TOKEN || ''
}

module.exports = {
    opensubtitles: opensubtitles,
    telegram: telegram
}