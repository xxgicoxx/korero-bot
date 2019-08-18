class Subtitle {
    constructor(url, filename, lang) {
        this.url = url;
        this.filename = filename;
        this.lang = lang;
    }

    get url() {
        return this.url;
    }

    get filename() {
        return this.filename;
    }

    get lang() {
        return this.lang;
    }

    toJSON() {
        return this.serialize();
    }
}

module.exports = Subtitle;