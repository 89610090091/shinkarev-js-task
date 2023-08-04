// 1
class Cycle {
    _radius;

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    constructor(radius) {
        this._radius = radius;
    }

    calcArea() {
        return Math.PI * (this._radius ** 2);
    }

    calcLength() {
        return 2 * Math.PI * this._radius;
    }
}

// 2
class HtmlElement {
    name;
    selfClosing;
    innerText = '';
    attributs = [];
    styles = [];
    children = [];

    constructor(name) {
        this.name = name;
        this.selfClosing = name === 'img' || name === 'hr' ? true : false;
    }

    setAttribute(attributeName, value) {
        this.attributs.push([attributeName, value]);
    }

    setStyle(styleName, value) {
        this.styles.push([styleName, value]);
    }

    prepend(element) {
        this.children.unshift(element);
    }

    append(element) {
        this.children.push(element);
    }

    getHTML() {
        let outerHTML = '<';
        outerHTML += this.name;
        if (this.attributs.length > 0) {
            this.attributs.forEach((attr) => {
                outerHTML += ` ${attr[0]}="${attr[1]}"`
            });
        }

        if (this.styles.length > 0) {
            outerHTML += ' style="';
            this.styles.forEach((style) => {
                outerHTML += ` ${style[0]}: ${style[1]};`;
            });
            outerHTML += '"';
        }

        outerHTML += '>';

        if (!this.selfClosing) {
            if (this.children.length > 0) {
                outerHTML += this.children.map((child) => child.getHTML())
            }

            outerHTML += `</${this.name}>`;
        }

        return outerHTML;
    }
}

// Использование:
// const myElement = new HtmlElement('div')
// myElement.setAttribute('', '') 

// 3
class CssClass {
    className;
    styles = [];

    constructor(className) {
        this.className = className;
    }

    setStyle(styleName, value) {
        this.styles.push([styleName, value]);
    }

    removeStyle(styleName) {
        this.styles = this.styles.filter((style) => style[0] === styleName ? false : true)
    }

    getCss() {
        return this.styles.map((style) => `${style[0]}:${style[1]};`).join('');
    }
}

// 4
class HtmlClass {
    styleClasses = [];
    document;
    body;

    constructor(styleClasses) {
        this.styleClasses = styleClasses;
        this.document = new HtmlElement('html');
        this.body = new HtmlElement('body');

    }

    getCode() {
        let code = '';
        code += '<html>'
        code += '<head>'
        if (this.styleClasses.length > 0) {
            code += '<style>'
            this.styleClasses.forEach((styleClass) => {
                code += `.${styleClass.className} {`;
                code += styleClass.getCss();
                code += '}';
            })
            code += '</style>'
        }
        code += '</head>'
        code += this.body.getHTML();
        code += '</html>'

        return code;
    }
}

const rectangleStyle = new CssClass('rectangle');
rectangleStyle.setStyle('border', '1px solid black');
rectangleStyle.setStyle('width', '100px');
rectangleStyle.setStyle('height', '100px');

const myHTML = new HtmlClass([rectangleStyle]);


const wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

const child = new HtmlElement('div');
child.setStyle('width', '100%');
child.setStyle('margin', '10px');

wrapper.append(child);

document.write(wrapper.getHTML());