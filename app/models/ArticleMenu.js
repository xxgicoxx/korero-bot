class ArticleMenu {
    constructor(articleMenuItem) {
        this.menu = articleMenuItem || [];
    }

    add(articleMenuItem) {
        this.menu.push(articleMenuItem);
    }

    get menu() {
        return this.menu;
    }

    toJSON() {
        return this.serialize();
    }
}

module.exports = ArticleMenu;