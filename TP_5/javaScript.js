console.log("salut, salut");

document.querySelector('button')
.addEventListener('click', function() {
    const items = [
        'casino',
        'cherry',
        'diamond',
        'lemon',
    ]
    const random = Math.floor(Math.random() * items.length);
    const selectedItem = items[random];
    document.querySelector('img').src = "img/items/" + selectedItem + ".png";
});