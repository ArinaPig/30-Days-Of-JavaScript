//Task1-easy
for (let i = 0; i <= 10; i++) {
	console.log(i)
}

let i = 0
while (i <= 10) {
	console.log(i)
	i++
}

i = 0
do {
	console.log(i)
	i++
} while (i <= 10)

//Task2-easy
for (let i = 10; i >= 0; i--) {
	console.log(i)
}

i = 10
while (i >= 0) {
	console.log(i)
	i--
}

i = 10
do {
	console.log(i)
	i--
} while (i >= 0)

//Task3-easy
let n = 20
for (let i = 0; i <= n; i++) {
	console.log(i)
}

//Task4-easy
let char = '#'
for (let i = 1; i <= 7; i++) {
	console.log(char.repeat(i))
}

//Task5-easy
for (i = 0; i <= 10; i++) {
	console.log(`${i} x ${i} = ${i * i}`)
}

//Task6-easy
console.log('i ', 'i^2 ', 'i^3 ')
for (let i = 0; i <= 10; i++) {
	console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)}`)
}

//Task7-easy
for (i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}

//Task8-easy
for (i = 0; i <= 100; i++) {
	if (i % 2 != 0) {
		console.log(i)
	}
}

//Task9-easy

//Task10-easy
let sum = 0
for (i = 0; i <= 100; i++) {
	sum += i
}

console.log(`The sum or all numbers from 0 to 100 is ${sum}.`)

//Task11-easy
let sumOfEvens = 0
let sumOfOdds = 0

for (i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		sumOfEvens += i
	} else if (i % 2 != 0) {
		sumOfOdds += i
	}
}

console.log(
	`The sum of all evens from 0 to 100 is ${sumOfEvens}. And the sum of all odds from 0 to 100 is ${sumOfOdds}.`
)

//Task12-easy
sumOfEvens = 0
sumOfOdds = 0

for (i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		sumOfEvens += i
	} else if (i % 2 != 0) {
		sumOfOdds += i
	}
}

const arrayOfSums = [sumOfEvens, sumOfOdds]
console.log(arrayOfSums)

//Task13-easy
const rand1 = []
let r = 0

for (let i = 0; i < 5; i++) {
	r = Math.random() * 100
	rand1.push(Math.round(r))
}

console.log(rand1)

//Task14-easy
const rand2 = []
r = 0
i = 0

while (i < 5) {
	r = Math.random() * 10
	if (!rand2.includes(Math.round(r))) {
		rand2.push(Math.round(r))
		i++
	}
}

console.log(rand2)

//Task15-easy
const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
let id = []
i = 0

while (i < 6) {
	r = Math.round(Math.random() * (chars.length - 1))
	char = chars[r]
	if (!id.includes(char)) {
		id.push(char)
		i++
	}
}

let strId = id.join('')
console.log(strId)
