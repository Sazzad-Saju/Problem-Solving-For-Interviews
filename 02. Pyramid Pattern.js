function makePyramid(n) {
    let pyramid = "";
    for (let i = 1; i <= n; i++) {
        // Add spaces before the stars
        for (let j = 1; j <= n - i; j++) {
            pyramid += " ";
        }

        // Add stars for each row
        for (let k = 0; k < 2 * i - 1; k++) {
            pyramid += "*";
        }

        // Move to the next line after each row
        pyramid += "\n";
    }
    console.log(pyramid);
}

makePyramid(5);
