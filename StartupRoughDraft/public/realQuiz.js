class Game{
    constructor(){
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

saveElement(element){
    const userName = this.getPlayerName();
    let elements = [];
    const elementsText = localStorage.getItem('elements')
    if(elementsText){
        elements = JSON.parse(elementsText);
       }
    elements = this.updateElements(userName, element, elements);

    localStorage.setItem('elements', JSON.stringify(elements));
}
// updateElement(element){
//     const elementEl = document.querySelector('#element');
//     elementEl.textContent = element;
// }
    updateElement(userName, element, elements){
        const date = new Date().toLocaleDateString();
        const newElement = { name: userName, element: element, date: date };
        elements.push(newElement);
        return elements;
    }
getPlayerName(){
    return localStorage.getItem('userName') ?? 'Mystery player';
}
checkElement(){
    let bending = randomNumber();
    this.saveElement(bending);
}
}
const game = new Game();
function randomNumber(){
    let water = 1;
    let fire  = 2;
    let air = 3;
    let earth = 4;
    let bending = Math.floor(Math.random() * (4-1 +1))+1;
    if(bending == water){
        // this.saveElement("Water");
        bending = "Water";
        window.location.href = "water.html";
    }
    else if(bending == fire){
        // this.saveElement("Fire");
        bending = "Fire";
        window.location.href = "fire.html";
    }
    else if(bending==air){
        // this.saveElement("Air");
        bending = "Air";
        window.location.href = "air.html";
    }
    else if(bending==earth){
        // this.saveElement("Earth");
        bending = "Earth";
        window.location.href = "earth.html";
    }
    checkElement(bending);
}