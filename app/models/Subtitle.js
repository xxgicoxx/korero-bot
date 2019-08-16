class Subtitle {
    constructor(url, filename, lang) {
        this.url = url
        this.filename = filename,
        this.lang = lang
    }

    serialize() {
        return { 
            url: this.url ? this.url : undefined,
            filename: this.filename ? this.filename : undefined,
            lang: this.lang ? this.lang : undefined
        }
    }

    toJSON() {
        return this.serialize()
    }
}

module.exports = Subtitle