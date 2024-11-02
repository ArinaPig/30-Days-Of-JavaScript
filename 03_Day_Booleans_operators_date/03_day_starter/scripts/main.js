// //Task1-medium
let base = prompt('Enter base: ')
let height = prompt('Enter height: ')

let area = 0.5 * base * height

console.log(`The area of the triangle is ${area}`)

// //Task2-medium
let a = parseFloat(prompt('Enter side a: '))
let b = parseFloat(prompt('Enter side b: '))
let c = parseFloat(prompt('Enter side c: '))

let P = a + b + c

console.log(`The area of the triangle is ${P}`)

// //Task3-medium
let length = prompt('Enter length: ')
let width = prompt('Enter width: ')

area = length * width
P = 2 * (length + width)

console.log(`The area of the rectangle is ${area}.`)
console.log(`The perimeter of the rectangle is ${P}.`)

// //Task4-medium
let radius = prompt('Enter radius: ')
pi = 3.14

area = pi * radius * radius
let C = 2 * pi * radius

console.log(`The area of the circle is ${area}`)
console.log(`The circumference of the circle is ${C}`)

//Task5-mediums
//y = 2x - 2
let slope = 2
let xIntercept = [slope / 2, 0]
let yIntercept = [0, 2]

console.log(slope, xIntercept, yIntercept)

//Task6-medium
let point1 = '(2, 2)'
let point2 = '(6, 10)'

let comma1 = point1.indexOf(',')
let comma2 = point2.indexOf(',')

let x1 = parseFloat(point1.substring(1, comma1))
let y1 = parseFloat(point1.substring(comma1 + 1))
let x2 = parseFloat(point2.substring(1, comma2))
let y2 = parseFloat(point2.substring(comma2 + 1))

let m = (y2 - y1) / (x2 - x1)

console.log(m)

//Task7-medium
point1 = prompt('Enter the first point: ')
point2 = prompt('Enter the second point: ')

x1 = parseFloat(point1.substring(1, comma1))
y1 = parseFloat(point1.substring(comma1 + 1))
x2 = parseFloat(point2.substring(1, comma2))
y2 = parseFloat(point2.substring(comma2 + 1))

m = (y2 - y1) / (x2 - x1)

console.log(m)

// //Task8-medium
x = 2
y = x * x + 6 * x + 9
let y0 = 0

x = -6 / 2

console.log(y)
console.log(x)

// //Task9-medium
let hours = prompt('Enter hours: ')
let rate = prompt('Enter rate per hour: ')

let earning = hours * rate

console.log(`Your weekly earning is ${earning}`)

//Task10-medium
let name = 'Arina'
let isLong = name.length > 7

isLong ? console.log('My name is long') : console.log('My name is short')

//Task11-medium
firstName = 'Asabeneh'
lastName = 'Yetayeh'

let isLonger = firstName.length > lastName

isLonger
	? console.log(
			`Your first name, ${firstName} is longer than your family name, ${lastName}`
	  )
	: console.log(
			`Your first name, ${firstName} is shorter than your family name, ${lastName}`
	  )

//Task12-medium
let myAge = 250
let yourAge = 25

myAge > yourAge
	? console.log(`I am ${myAge - yourAge} yeats older than you.`)
	: console.log(`You are ${yourAge - myAge} yeats older than me.`)

// //Task13-medium
let birthYear = parseInt(prompt('Enter your birth year: '))
let currentYear = new Date().getFullYear()
age = currentYear - birthYear

age > 18
	? console.log(`You are ${age}. You are old enough to drive.`)
	: console.log(
			`You are ${age}. You will be allowed to drive after ${18 - age} years.`
	  )

//Task14-medium
age = prompt('Enter number of years you live: ')

let ageSeconds = age * 365 * 24 * 60 * 60

console.log(ageSeconds)

//Task15-medium
const now = new Date()

const year = now.getFullYear()
const month = now.getMonth()
const nowDate = now.getDate()
const nowHours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}-${month}-${nowDate} ${nowHours}:${minutes}`)
console.log(`${nowDate}-${month}-${year} ${nowHours}:${minutes}`)
console.log(`${nowDate}/${month}/${year} ${nowHours}:${minutes}`)
