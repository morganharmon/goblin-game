// import functions and grab DOM elements
import { renderGoblin } from './utils.js';
const goblinArea = document.getElementById('goblinArea');
const form = document.getElementById('form');
const goblinsDestroyedDiv = document.getElementById('goblinsDestroyedDiv');

// let state
let goblinsDestroyed = 0;
let goblins = [
    { id: 1, name: 'Horace', HitPoints: 5 },
    { id: 2, name: 'Gladys', HitPoints: 3 }
];
let HP = 10;
let currentID = 3;
goblinsDestroyedDiv.textContent = goblinsDestroyed;

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('goblinName');
    const newGuy = {
        id: currentID,
        name: name,
        HitPoints: Math.ceil(Math.random() * 5)
    };
    currentID++;
    goblins.push(newGuy);
    form.reset();
    displayGoblins();
});

function displayGoblins() {
    goblinArea.textContent = '';
    for (let goblin of goblins) {
        console.log(goblin);
        const gobbo = renderGoblin(goblin);
        gobbo.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinArea.append(gobbo);
    }
}

function goblinClickHandler(gobbo) {
    if (gobbo.HitPoints === 0) {
        return;
    }
    const num = Math.ceil(Math.random() * 10);
    if (num < 5) {
        alert(`${gobbo.name} hits you for 1 damage!`);
        HP--;
    } else {
        alert(`You hit ${gobbo.name} for 1 damage!`);
        gobbo.HitPoints--;
    }
    if (gobbo.hp === 0) {
        alert(`You killed ${gobbo.name}! Their gold is yours.`);
        goblinsDestroyed++;
    }
    if (HP === 0) {
        alert('The goblins have prevailed. You lose. Don\'t do drugs.');
    }
    displayGoblins();
}

