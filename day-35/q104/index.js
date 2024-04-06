function genRandomColor() {
    var randomRed = Math.floor(Math.random() * 255); // Random number between 0 to 255
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    var red = randomRed.toString(16).padStart(2, '0'); // Converts to hexadecimal and ensures 2 digits
    var green = randomGreen.toString(16).padStart(2, '0');
    var blue = randomBlue.toString(16).padStart(2, '0');
    return "#".concat(red).concat(green).concat(blue);
    // OR
    // 1. Math.random(): Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
    // 2. Math.random() * 0xffffff: Multiplies a random decimal number by 0xffffff (or 16777215 in decimal) generating a random number within the range of possible hexadecimal color codes
    // 3. Math.floor(): rounds down the resulting number to the nearest integer
    // 4. .toString(16): Converts the rounded number to a hexadecimal string
    // 5. .padString(6, '0'): Converts to hexadecimal and ensures 6 digits
    var color = "#".concat(Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'));
    return color;
}
console.log(genRandomColor());
