export function renderGoblin(gobbo) {
    const newGobbo = document.createElement('div');
    const name = document.createElement('p');
    const hp = document.createElement('p');
    
    newGobbo.classList.add('goblin');
    name.textContent = gobbo.name || (gobbo.name = `spawn#${Math.ceil(Math.random() * 100)}`);
    hp.textContent = gobbo.HitPoints;
    // hp.id = `${gobbo.id}-hp`;
    
    newGobbo.append(name, hp);
    
    if (gobbo.HitPoints === 0) {
        newGobbo.classList.add('dead');
    }

    return newGobbo;

}

