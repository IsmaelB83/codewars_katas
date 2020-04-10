/* 
Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
*/
function hydrate(s) {
    
    const endSingular = 'glass of water';
    const endPlural = 'glasses of water';
    
    const drinks = String(s).split(' and ').join('#').split(',').join('#').split('#');
    let glasses = 0;
    drinks.forEach(d => {
        glasses += parseInt(d.trim().split(' ')[0]);
    });
    
    return `${glasses} ${glasses > 1 ? endPlural: endSingular}`;
}

hydrate("2 glasses of wine and 1 shot")
hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")

module.exports = hydrate;