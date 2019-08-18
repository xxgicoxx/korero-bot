class ArticleMenuItem {
    constructor(message_text, title, url, caption, description) {
        this.id = Math.random().toString(36).substring(7);
        this.type = 'article';
        this.message_text = message_text;
        this.title = title;
        this.url = url;
        this.caption = caption;
        this.description = description;
    }

    get id() {
        return this.id
    }

    get type() {
        return this.type;
    }

    get message_text() {
        return this.message_text;
    }

    get title() {
        return this.title;
    }

    get url() {
        return this.url;
    }

    get caption() {
        return this.caption;
    }

    get description() {
        return this.description;
    }

    toJSON() {
        return this.serialize();
    }
}

module.exports = ArticleMenuItem;