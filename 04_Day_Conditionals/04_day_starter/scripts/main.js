//Task1
let age = prompt('Enter your age: ')

if (age >= 18) {
	console.log('You are old enough to drive.')
} else {
	console.log('You are left with', 18 - age, 'years to drive.')
}

//Task2
let myAge = 16
let yourAge = prompt('Enter your age: ')

if (myAge > yourAge) {
	console.log('You are', myAge - yourAge, 'years younger than me.')
} else if (myAge == yourAge) {
	console.log('You are the same age as me.')
} else {
	console.log('You are ', yourAge - myAge, 'years older than me.')
}

//Task3
let a = prompt('Enter number a: ')
let b = prompt('Enter number b: ')

if (a > b) {
	console.log('a is greater than b')
} else {
	console.log('a is less than b')
}

a > b ? console.log('a is greater than b') : console.log('a is less than b')

//Task4
let n = prompt('Enter a number: ')

n % 2 == 0
	? console.log(n, 'is an even number')
	: console.log(n, 'is an odd number')
