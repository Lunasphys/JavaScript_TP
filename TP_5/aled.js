/* Create an array of images and assign a string to each of them. */
let items = [
    '<img src="img/items/casino" alt="casino">',
    '<img src="img/items/cherry.png" alt="cherry">',
    '<img src="img/items/diamond.png" alt="diamond">',
    '<img src="img/items/lemon.png" alt="lemon">',
    '<img src="img/items/seven.png" alt="seven">' ]

/* Shuffle the array of each image individually, display the shuffled image in the slot and assign a string to each of them. */
function shufttfle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array[currentIndex];
}

/* It's shuffling the array. */
function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
        let i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]]
    };
    return i;
}