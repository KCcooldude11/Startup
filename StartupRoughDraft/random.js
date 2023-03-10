function randomNumber(){
    let water = 1;
    let fire  = 2;
    let air = 3;
    let earth = 4;
    let bending = Math.floor(Math.random() * (4-1 +1))+1;
    if(bending == water){
        window.location.href = "index.html";
    }
    else if(bending == fire){
        window.location.href = "about.html";
    }
    else if(bending==air){
        window.location.href = "contact.html";
    }
    else if(bending==earth){
        window.location.href = "quiz.html";
    }
}