// var firstCard = 20
// var secondCard = 1
// var sum = firstCard + secondCard + 3
// console.log(sum)

// if (sum < 21) {
// 	console.log("do you want to draw a new card? ")
// } else if (sum === 21) {
// 	console.log("whoa, you've got blackjack ")
// } else {
// 	console.log("you're out of the game ")
// }

// let age = 20

// if (age < 21) {
// 	console.log("you can not enter the night club ")
// } else {
// 	console.log("you're welcome ")
// }

// let ages = 100

// if (ages < 100) {
// 	console.log("not eligible")
// } else if (ages === 100) {
// 	console.log("here is your birthday card from the king")
// } else {
// 	console.log("not eligible , you have already gotten one")
// }







// let firstCard = getRandom()
//let secondCard = getRandom()
 //let cards = [firstCard, secondCard]
 //let sum = firstCard + secondCard
let cards = []
 let sum = 0
 let hasBlackJack = false
 //let isAlive = true
 let isAlive = false
 let message = " "
let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 //let sumEl = document.querySelector("#sum-el")
//let sumEl = document.querySelector(".sum-el");
let cardEl = document.getElementById("card-el")
 
let player = {
	name: "Tchinonso",
	chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
 

function getRandom() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
 }
function start() {
	isAlive = true
	let firstCard = getRandom()
	let secondCard = getRandom()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardEl.textContent = "cards: " 
	//cardEl.textContent = "cards: " + cards[0] + " " + cards[1];
	//cardEl.textContent = "cards: " + firstCard + " " + secondCard

	for (let i = 0; i < cards.length; i++){
		cardEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "sum: " + sum
	 if (sum <= 20) {
     message = "do you want to draw a new card?";
   } else if (sum === 21) {
     message = "you've got the blackjack!";
     hasBlackJack = true;
   } else {
     message = "you're out of the game!";
     isAlive = false;
   }

	messageEl.textContent = message
 }

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		console.log("drawing a new card");
		let card = getRandom();

		sum += card;
		cards.push(card);
		console.log(cards);

		renderGame();
	}
	
}