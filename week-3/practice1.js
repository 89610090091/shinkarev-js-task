const rectangle = {
    coordLeftTop: [1, 1],
    coordRightBottom: [10, 10],
    logCoords: function () {
        console.log('rectangle coordinates: ', `${this.coordLeftTop}:${this.coordRightBottom}`);
    },
    getWidth: function () {
        return Math.abs(this.coordRightBottom[0] - this.coordLeftTop[0])
    },
    getHeight: function () {
        return Math.abs(this.coordRightBottom[1] - this.coordLeftTop[1])
    },
    getArea: function () {
        return this.getHeight() * this.getWidth();
    },
    getPerimeter: function () {
        return (this.getHeight() + this.getWidth()) * 2;
    }
}

function changeWidth(rec, width) {
    rec.coordRightBottom[0] += width
}

function changeHeight(rec, width) {
    rec.coordRightBottom[1] += width
}