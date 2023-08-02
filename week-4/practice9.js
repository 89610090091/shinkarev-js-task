// 1
class PrintMashine {
    fontSize;
    color;
    fontFamily;

    constructor(fontSize, color, fontFamily) {
        this.fontSize = `${fontSize}px`;
        this.color = color;
        this.fontFamily = fontFamily;
    }

    print(text) {
        const paragraph = document.createElement('p');
        paragraph.style.fontSize = this.fontSize;
        paragraph.style.color = this.color;
        paragraph.style.fontFamily = this.fontFamily;
        paragraph.innerText = text;
        document.body.append(paragraph);
    }
}


// 2
class Article {
    title;
    content;
    tags;
    date;
    constructor(title, content, tags, date) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.date = date;
    }
    print() {
        const title = document.createElement('h1');
        const content = document.createElement('p');
        const tags = document.createElement('footer');
        const date = document.createElement('span');

        title.innerText = this.title;
        content.innerText = this.content;
        tags.innerText = this.tags.map((item) => {
            return `#${item}`;
        }).join(' ');
        const datesArray = this.date.split('.');
        const publicationDate = new Date();
        publicationDate.setDate(datesArray[0]);
        publicationDate.setMonth(datesArray[1] - 1);
        publicationDate.setFullYear(datesArray[2]);

        if (new Date() - publicationDate < 8.64e+7) {
            date.innerText = 'сегодня'
        } else if (new Date() - publicationDate < 6.048e+8) {
            const daysAgo = (new Date() - publicationDate) / 8.64e+7;
            date.innerText = `${Math.floor(daysAgo)} назад`
        } else {
            date.innerText = `${publicationDate.getDate()}.${publicationDate.getMonth()}.${publicationDate.getFullYear()}`;
        }

        document.body.append(title, date, content, tags)
    }
}


const article2 = new Article('Наша статья2', 'В ней что-то написано', ['котики'], '15.10.2021');
const article1 = new Article('Наша статья1', 'В ней что-то написано', ['котики', 'море'], '19.10.2021');
const article3 = new Article('Наша статья3', 'В ней что-то написано', ['море'], '10.10.2021');

// article1.print()
// article2.print()
// article3.print()

// 3
class NewsFeed {
    // приватное свойство
    #articles;

    get feedLength() {
        return this.articles.length;
    }

    // к приватному свойству можно обратиться только через setter
    // set feedLength(value) {
    //     this.value = value;
    // }

    constructor(articles) {
        this.articles = articles
    }

    writeAllNews() {
        this.articles.forEach((article) => article.print());
    }

    addArticle(article) {
        this.articles.push(article);
    }

    removeArtile(title) {
        this.articles = this.articles.filter((article) => {
            // if (article.title === title) {
            //     return false;
            // } else {
            //     return true;
            // }
            return article.title === title ? false : true;
        })
    }

    sortByDate() {
        function dateComparer(article1, article2) {
            if (article1.date > article2.date) {
                return 1;
            } else if (article1.date < article2.date) {
                return -1;
            } else {
                return 0;
            }
        }

        this.articles.sort(dateComparer);
    }

    findByTag(tag) {
        return this.articles.filter((article) => article.tags.includes(tag));
    }

    findByTags(tags) {
        let result = [];
        tags.forEach((tag) => {
            result = result.concat(this.findByTag(tag))
        });

        return result;
    }
}