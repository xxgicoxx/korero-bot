const Opensubtitlesapi = require('opensubtitles-api');

class OpenSubtitles {

    constructor(auth) {
        this.opensubtitles = new Opensubtitlesapi(auth);
    }

    getSubtitle(query) {
        return new Promise((resolve, reject) => {
            this.opensubtitles.search({query: query}).then((response) => {
                resolve(Object.values(response));
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = OpenSubtitles;