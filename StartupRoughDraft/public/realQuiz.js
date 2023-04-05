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
getPlayerName(){
    return localStorage.getItem('userName') ?? 'Mystery player';
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
        window.location.href = "water.html";
    }
    else if(bending == fire){
        window.location.href = "fire.html";
    }
    else if(bending==air){
        window.location.href = "air.html";
    }
    else if(bending==earth){
        window.location.href = "earth.html";
    }
}