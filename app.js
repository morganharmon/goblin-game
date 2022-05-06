// import functions and grab DOM elements
import { renderGoblin } from './utils.js';
const goblinArea = document.getElementById('goblinArea');
const form = document.getElementById('form');
const goblinsDestroyedDiv = document.getElementById('goblinsDestroyedDiv');
const hpDiv = document.getElementById('yourHP');
const resetButton = document.getElementById('reset');
const goldDiv = document.getElementById('goldDiv');

// let state
let goblinsDestroyed = 0;
goblinsDestroyedDiv.textContent = 0;
let goblins = [
    { id: 1, name: 'Horace', HitPoints: 5 },
    { id: 2, name: 'Gladys', HitPoints: 3 }
];
let HP = 10;
hpDiv.textContent = 10;
let currentID = 3;

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('goblinName');
    const newGuy = {
        id: currentID,
        name: name,
        HitPoints: 3
    };
    currentID++;
    goblins.push(newGuy);
    form.reset();
    displayGoblins();
});

function displayGoblins() {
    goblinArea.textContent = '';
    for (let goblin of goblins) {
        const gobbo = renderGoblin(goblin);
        gobbo.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinArea.append(gobbo);
    }
}

function goblinClickHandler(gobbo) {
    if (gobbo.HitPoints === 0) return;
    const num = Math.ceil(Math.random() * 10);
    if (num < 7) {
        alert(`${gobbo.name} hits you for 1 damage!`);
        HP--;
        hpDiv.textContent = HP;
        if (HP === 0) {
            alert('The goblins have prevailed. You lose. Don\'t do drugs.');
            resetButton.classList.toggle('hide');
            form.classList.toggle('hide');
            goblinArea.classList.toggle('hide');
        }
    } else {
        alert(`${gobbo.name} swung at you and missed!`);
    }
    
    const num2 = Math.ceil(Math.random() * 10);
    if (num2 < 6) {
        alert(`You hit ${gobbo.name} for 1 damage!`);
        gobbo.HitPoints--;
        if (gobbo.HitPoints === 0) {
            alert(`You killed ${gobbo.name}! Their gold is yours.`);
            goblinsDestroyed++;
            goblinsDestroyedDiv.textContent = goblinsDestroyed;
            const gold = document.createElement('img');
            gold.src = './assets/goldcoins.jpg';
            gold.classList.add('gold');
            goldDiv.append(gold);
        }
    } else {
        alert(`You swung at ${gobbo.name} and missed!`);
    }
    displayGoblins();
}

resetButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    HP = 10;
    hpDiv.textContent = 10;
    goblins = [
        { id: 1, name: 'Horace', HitPoints: 5 },
        { id: 2, name: 'Gladys', HitPoints: 3 }
    ];
    resetButton.classList.toggle('hide');
    form.classList.toggle('hide');
    goblinArea.classList.toggle('hide');
    goblinsDestroyed = 0;
    goblinsDestroyedDiv.textContent = 0;
    goldDiv.textContent = '';
    displayGoblins();
}
        
displayGoblins();