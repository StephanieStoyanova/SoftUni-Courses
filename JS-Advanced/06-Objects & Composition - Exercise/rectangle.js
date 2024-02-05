function rectangle(width, height, color) {
    return {
        width: width,
        height: height,
        color: capitalizeFirstLetter(color),
        calcArea: function() {
            return this.width * this.height;
        }
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());