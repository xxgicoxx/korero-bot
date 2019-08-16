class ArticleMenuItem {
    constructor(message_text, title, url, caption, description) {
        this.id = Math.random().toString(36).substring(7)
        this.type = 'article',
        this.message_text = message_text
        this.title = title
        this.url = url
        this.caption = caption
        this.description = description
    }

    serialize() {
        return { 
            id: this.id ? this.id : undefined,
            type: this.type ? this.type : undefined,
            message_text: this.message_text ? this.message_text : undefined,
            title: this.title ? this.title : undefined,
            url: this.url ? this.url : undefined,
            caption: this.caption ? this.caption : undefined,
            description: this.description ? this.description : undefined
        }
    }

    toJSON() {
        return this.serialize()
    }
}

module.exports = ArticleMenuItem