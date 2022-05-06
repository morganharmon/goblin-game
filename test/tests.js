import './example.test.js';
import { renderGoblin } from '../utils.js';

const test = QUnit.test;

test('renderGoblin should return a newGobbo div', (expect) => {
    const expected = `<div class="goblin"><p>Phyllis</p><p>5 hp</p></div>`;
    const gobbo = {
        name: 'Phyllis',
        HitPoints: 5,
        id: 'Phyllis'
    };
    const actual = renderGoblin(gobbo);
    expect.equal(actual.outerHTML, expected);
});