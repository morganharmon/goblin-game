export function renderGoblin(gobbo) {
    const newGobbo = document.createElement('div');
    const name = document.createElement('p');
    const hp = document.createElement('p');
    
    newGobbo.classList.add('goblin');
    name.textContent = gobbo.name;
    hp.textContent = gobbo.HitPoints;
    hp.id = `${gobbo.id}-hp`;
    
    newGobbo.append(name, hp);

    if (gobbo.HitPoints < 1) {
        gobbo.classList.add('dead');
    }

    return newGobbo;

}

