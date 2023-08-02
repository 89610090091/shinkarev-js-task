class Button {
    constructor(height, width, text) {
        this.height = height;
        this.width = width;
        this.text = text;
    }

    showBtn() {
        const button = document.createElement('button');
        button.style.height = `${this.height}px`;
        button.style.width = `${this.width}px`;
        button.innerText = this.text;
        document.body.append(button);
    }
}