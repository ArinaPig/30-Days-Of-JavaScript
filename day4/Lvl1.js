//Task1
let age = prompt('Enter your age: ') //Выдает ошибку на prompt()

if (age >= 18) {
	console.log('You are old enough to drive.')
} else {
	console.log('You are left with ${18 - age} years to drive.') //Не работает выражение ${18-age}
}
