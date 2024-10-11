//Task1-easy
const dog = {
	//Task3-easy
	name: 'Bobik',
	legs: 4,
	color: 'brown',
	age: 3,
	bark: function () {
		return 'woof woof'
	},
	//Task5-easy
	breed: function () {
		return Object.assign({}, dog)
	},
	getDogInfo: function () {
		return `I'm ${this.name} and I've ${this.legs} legs. I'm ${this.age} years old and my color is ${this.color}.`
	},
}

//Task2-easy
console.log(dog)

//Task4-easy
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

console.log(dog.breed())
console.log(dog.getDogInfo())
