//Task1-easy
const empty = new Set()
console.log(empty)

//Task2-easy
const numbers = new Set()

for (let i = 0; i <= 10; i++) {
	numbers.add(i)
}

console.log(numbers)

//Task3-easy
numbers.delete(1)
console.log(numbers)

//Task4-easy
numbers.clear()
console.log(numbers)

//Task5-easy
const words = ['hello', 'text', 'hello', 'plant', 'tree']

const wordsSet = new Set(words)

console.log(wordsSet)

//Task6-easy
const countries3 = ['Finland', 'Sweden', 'Norway']

const countriesMap = new Map()

for (let i = 0; i <= countries3.length - 1; i++) {
	countriesMap.set(countries3[i], countries3[i].length)
}

//Task1-medium
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const A = new Set(a)
const B = new Set(b)

let c = new Set([...a, ...b])

console.log(c)

//Task2-medium
c = new Set(a.filter(num => B.has(num)))
console.log(c)

//Task3-medium
c = new Set(a.filter(num => !B.has(num)))
console.log(c)

console.log(countriesMap)

//Task1-hard
console.log(countries.length)

//Task2-hard
function mostSpokenLanguages(countries, n) {}
