var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push('queen');
console.log("User flipped " + cardsInPlay);
var cardTwo = cards[1];
cardsInPlay.push('king');
console.log("User flipped " + cardTwo);



if (cardOne === cardTwo){
		alert("You have found a match!");
} else if (cardOne === !cardTwo){
		alert("Sorry Try again.");
} else {
		alert("Sorry Try again.");
}

