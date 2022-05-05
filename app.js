// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const goblinButton = document.getElementById('goblinButton');
const goblinName = document.getElementById('goblinName');
const goblinArea = document.getElementById('goblinArea');

// let state
let goblinsDestroyed = 0;
let goblins = [
    { name: 'Horace', HitPoints: 5 },
    { name: 'Gladys', HitPoints: 3 }
];
let HP = 10;

// set event listeners 
// goblinButton.addEventListener('click', () => {
//     for (let goblin in goblins) {
//         const gobboEl = renderGoblin(goblin);
//         gobboEl.addEventListener('click', () => {
//             if ()
//         });
//         goblins.push(newGobbo);
//     }
// });



function displayGoblins() {
    goblinArea.textContent = '';
    for (let goblin in goblins) {
        const div = document.createElement('div');
        div.textContent = `${goblin.name} - ${goblin.HitPoints}`;
        goblinArea.append(div);
    }
}