// for (let count = 1; count < 11; count += 2){
// 	console.log(count)
// }

// for (let i = 10; i < 101; i += 10){
// 	console.log(i)
// }

// let cards = [2, 3, 4, 5, 6, 7]

// for (let i = 0; i < cards.length; i++){
// 	console.log(cards[i])
// }

let sentence = [
	"hello dear",
	"where are you from",
	"are you there"
]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++){
	greetingEl.textContent += sentence[i] + " "
}

let player1Time = 102
let player2Time = 107

const getFastestRaceTime = () => {
	if (player1Time < player2Time) {
		return player1Time
	} else if (player2Time < player1Time) {
		return player2Time
	} else {
		return player1Time
	}
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)

let randomNumber = Math.random() * 6
console.log(randomNumber)

let floorNumber = Math.floor(3.99456985)
console.log(floorNumber)

let florr = Math.floor(Math.random() * 6) + 1
console.log(florr)

function rollDice() {
	let florr = Math.floor(Math.random() * 6) + 1
	return florr
}
console.log(rollDice())

let person = {
	name: "Tchinonso",
	age: 27,
	country: "Nigeria"
}

function logData() {
	console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()

let hands = ["cars", "flight", "ship"]

function getHand() {
	let randomIndex = Math.floor(Math.random() * 3)
	return hands [randomIndex]
}
console.log(getHand())

let fruits = [
  "apple",
  "orange",
  "apple",
  "orange",
  "apple",
  "orange",
  "apple",
  "orange",
  "apple",
  "orange"
]

let appleShelf = document.getElementById("apple-el")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruits() {
	for (let i = 0; i < fruits.length; i++){
		if (fruits[i] === "apple") {
			appleShelf.textContent += "apple"
		} else if (fruits[i] === "orange") {
			orangeShelf.textContent += "orange"
		}
	}
}

sortFruits()