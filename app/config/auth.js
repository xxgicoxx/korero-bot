const opensubtitles = {
    useragent: 'TemporaryUserAgent' || process.env.USERAGENT,
    username: '' || process.env.USERNAME,
    password: '' || process.env.PASSWORD,
    ssl: true || process.env.SSL
}

const telegram = {
    token: '' || process.env.TOKEN
}

module.exports = {
    opensubtitles: opensubtitles,
    telegram: telegram
}