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

    serialize() {
        return { 
            url: this.url ? this.url : undefined, 
            filename: this.filename ? this.filename : undefined, 
            lang: this.lang ? this.lang : undefined
        }
     }
    
    toJSON() {
        return this.serialize();
    }
}

module.exports = Subtitle;