let player = {
    name: "Javier",
    chips: 50
};

let cards=[]
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");

playerEl.textContent= player.name + ": $" + player.chips;


function getRandomCard(){
    let aleatorio = Math.floor(Math.random()*13)+1;
    if (aleatorio===1){
        return 11;
    } else if (aleatorio>10){
        return 10
    } else{
        return aleatorio;
    }
}

function renderGame(){

    cardEl.textContent = "Cards: ";
    for (let i=0; i<cards.length;i++){
        cardEl.textContent +=cards[i]+" ";
    }
    
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent=message;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
    

    renderGame();
}

function newCard(){

    if(isAlive===true && hasBlackJack===false){
        let newCard=getRandomCard();
        cards.push(newCard);
        sum+=newCard;
        renderGame();
    }   

}