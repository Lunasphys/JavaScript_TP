console.log("salut, salut");

document.querySelector('button')
.addEventListener('click', ()=> {
    const items = [
        'casino',
        'cherry',
        'diamond',
        'lemon',
    ]

    document.querySelectorAll('img').forEach((imgEl)=>{
        const random = Math.floor(Math.random() * items.length);
        const selectedItem = items[random];
        imgEl.src=`img/items/${selectedItem}.png`;
    });
});