class ArticleMenu {
    constructor(articleMenuItem) {
        this.menu = articleMenuItem || [];
    }

    add(articleMenuItem) {
        this.menu.push(articleMenuItem);
    }

    get() {
        return this.menu;
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

module.exports = ArticleMenu