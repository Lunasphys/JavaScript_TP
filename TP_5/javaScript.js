console.log("salut, salut");
let emplacements = document.querySelectorAll('.emplacement');
let pieces = document.querySelector('.pieces');
let cashPriceDiv = document.querySelector('.cashPrice');
let gainRoundDiv = document.querySelector('.gainRound');
let piecesDiv = document.querySelector('.pieces');
let itemImg = document.querySelectorAll('img')

let bourse = 500;
let cashPrice = 0;
let result = [];
let isPlaying = false;

function Init() {
    pieces.innerHTML = bourse;
}

/* Create an array of image */


const items = [
    '<img src="img/items/casino.png" alt="casino">',
    '<img src="img/items/cherry.png" alt="cherry">',
    '<img src="img/items/diamond.png" alt="diamond">',
    '<img src="img/items/lemon.png" alt="lemon">',
    '<img src="img/items/cherry.png" alt="cherry">',
    '<img src="img/items/diamond.png" alt="diamond">',
    '<img src="img/items/lemon.png" alt="lemon">',
    '<img src="img/items/casino.png" alt="casino">',
    '<img src="img/items/cherry.png" alt="cherry">',
    '<img src="img/items/diamond.png" alt="diamond">',
    '<img src="img/items/lemon.png" alt="lemon">',
    '<img src="img/items/cherry.png" alt="cherry">',
    '<img src="img/items/diamond.png" alt="diamond">',
    '<img src="img/items/lemon.png" alt="lemon">',
]

window.addEventListener('click', function (shuffle) {
    if (shuffle.target.id.includes('spinner')) {
        let i = shuffle.target.id.substring(7);
        if (isPlaying) {
            return;
        }
        spinningFunc(i);
    }
});



/* Shuffle the array of images */

function shuffle([...arr]) {
    let x = arr.length;
    while (x) {
        let i = Math.floor(Math.random() * x--);
        [arr[x], arr[i]] = [arr[i], arr[x]]
    };
    return arr;
}





/* Wait for the click on the bet button, then proceeds to shuffle the arrayy of image et replace it. Can stop the game if the player doesn't have enough money. Displayy the user info about his purse/wins bet etccc*/

function spinningFunc(i) {
    console.log("Bourse actuelle : ", bourse);
    console.log("Mise : ", i);
    piecesDiv.classList.add('log');
    if (bourse - i < 0) {
        console.log("Vous n'avez plus de jetons");
        for (let i = 0; i < emplacements.length; i++) {
            setTimeout(function () {
                emplacements[i].innerHTML = "<div class='boxes'>"+ '<img src="img/stop_sign.png">' +"</div>";
                let box = emplacements[i].querySelector('.boxes');
                box.classList.add('stop');
            }, i * 300);
        }
        return
    }
    isPlaying = true;
    bourse -= i;
    pieces.innerHTML = bourse;
    let shuffledItems = shuffle(items);
    for (let i = 0; i < emplacements.length; i++) {
        setTimeout(function () {
            emplacements[i].innerHTML = "<div class='boxes'>" + shuffledItems[i] + "</div>";
            let box = emplacements[i].querySelector('.boxes');
            box.classList.add('still');
        }, i * 300);
    }
    setTimeout(function () {
        winningGain(i);
        console.log("Bourse après : ", bourse);
    }, emplacements.length * 300);
}

/* Function that calcul how much you have wins */

function winningGain(i) {
    result = [];
    let gain = 0;
    for (let j = 0; j < emplacements.length; j++) {
        result.push(emplacements[j].children.item(0).innerHTML);
    }
    console.log(result);
    gain = diamondCalculs(i, gain);
    gain = casinoCalculs(i, gain);
    gain = lemonCalculs(i, gain);
    gain = cherryCalculs(i, gain);

    bourse += gain;
    console.log("Gain total : ", cashPrice);
    cashPriceDiv.innerHTML = "Gains : " + cashPrice;
    cashPriceDiv.classList.add('log');
    console.log("Gain de ce round : ", gain);
    gainRoundDiv.innerHTML = "Gagné ce tour : " + gain;
    gainRoundDiv.classList.add('log');
    pieces.innerHTML = bourse;
    isPlaying= false;
}

Init();


/* Check if there's a casino.png is the emplacement div, and count them. Then proceed to calculate the gain compared with the bet made */


function casinoCalculs(i, gain) {
    if (result.includes("<img src=\"img/items/casino.png\" alt=\"casino\">")) {
        let casinoCount = result.filter(x => x === "<img src=\"img/items/casino.png\" alt=\"casino\">").length;
        console.log(casinoCount, "casino");
        if (casinoCount === 3) {
            cashPrice += i * 10
            gain += i * 10;
        }
    }
    return gain;
}

/* Check if there's a diamond.png is the emplacement div, and count them. Then proceed to calculate the gain compared with the bet made */

function diamondCalculs(i, gain) {
    if (result.includes('<img src="img/items/diamond.png" alt="diamond">')) {
        let diamondCount = result.filter(x => x === '<img src="img/items/diamond.png" alt="diamond">').length;
        console.log(diamondCount, 'diamond');
        if (diamondCount === 1) {
            cashPrice += i * 0.5
            gain += i * 0.5;
        } else if (diamondCount === 2) {
            cashPrice += i * 1;
            gain += i * 1;
        } else if (diamondCount === 3) {
            cashPrice += i * 2.5;
            gain += i * 2.5;
        }
    }
    return gain;
}

/* Check if there's a lemon.png is the emplacement div, and count them. Then proceed to calculate the gain compared with the bet made */

function lemonCalculs(i, gain) {
    if (result.includes('<img src="img/items/lemon.png" alt="lemon">')) {
        let lemonCount = result.filter(x => x === '<img src="img/items/lemon.png" alt="lemon">').length;
        console.log(lemonCount, 'lemon');
        if (lemonCount === 3) {
            cashPrice += i * 1.25
            gain += i * 1.25;
        }
    }
    return gain;
    
}


function cherryCalculs(i, gain) {
    if (result.includes('<img src="img/items/cherry.png" alt="cherry">')) {
        let cherryCount = result.filter(x => x === '<img src="img/items/cherry.png" alt="cherry">').length;
        console.log(cherryCount, 'cherry');
        if (cherryCount === 3) {
            cashPrice += i * 1.5
            gain += i * 1.5;
        }
    }
    return gain;
}



