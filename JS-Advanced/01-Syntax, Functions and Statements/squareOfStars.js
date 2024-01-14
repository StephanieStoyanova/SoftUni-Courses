function squareOfStars(size = 5) {
    for (let i = 0; i < size; i++) {
        let stars = "* ".repeat(size);
        console.log(stars.trim());
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);