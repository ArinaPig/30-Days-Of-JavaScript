//Task1-easy
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//Task2-easy
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries2

console.log(fin, est, sw, den, nor)

//Task3-easy
const rectangle = {
	width: 20,
	height: 10,
	area: 200,
	perimeter: 60,
}

let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)

//Task1-medium
const users = [
	{
		name: 'Brook',
		scores: 75,
		skills: ['HTM', 'CSS', 'JS'],
		age: 16,
	},
	{
		name: 'Alex',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18,
	},
	{
		name: 'David',
		scores: 75,
		skills: ['HTM', 'CSS'],
		age: 22,
	},
	{
		name: 'John',
		scores: 85,
		skills: ['HTML'],
		age: 25,
	},
	{
		name: 'Sara',
		scores: 95,
		skills: ['HTM', 'CSS', 'JS'],
		age: 26,
	},
	{
		name: 'Martha',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18,
	},
	{
		name: 'Thomas',
		scores: 90,
		skills: ['HTM', 'CSS', 'JS'],
		age: 20,
	},
]

for (let { name, scores, skills, age } of users) {
	console.log(name, scores, skills, age)
}

//Task2-medium
for (let { name, skills } of users) {
	if (skills.length < 2) {
		console.log(name, skills)
	}
}
