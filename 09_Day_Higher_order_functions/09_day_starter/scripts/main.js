const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '' },
]

//Task1-easy
//Task2-easy
//Task3-easy
function callbackCountries(element) {
	console.log(element)
}

countries2.forEach(callbackCountries)

//Task4-easy
names.forEach(elem => {
	console.log(elem)
})

//Task5-easy
numbers.forEach(elem => {
	console.log(elem)
})

//Task6-easy
const newCountries2 = countries2.map(country => country.toLocaleUpperCase())
console.log(newCountries2)

//Task7-easy
const lengthCountries2 = countries2.map(elem => elem.length)
console.log(lengthCountries2)

//Task8-easy
const numbersSqr = numbers.map(num => num * num)
console.log(numbersSqr)

//Task9easy
const namesUpperCase = names.map(name => name.toUpperCase)
console.log(namesUpperCase)

//Task10-easy
const price = products.map(
	product => `Price of ${product.product} = ${product.price}`
)
console.log(price)

//Task11-easy
const countriesWithLand = countries2.filter(country => country.includes('land'))
console.log(countriesWithLand)

//Task12-easy
const countriesSix = countries2.filter(country => country.length == 6)
console.log(countriesSix)

//Task13-easy
const countriesSixAndMore = countries2.filter(country => country.length >= 6)
console.log(countriesSixAndMore)

//Task14-easy
const countriesStartsWithE = countries2.filter(country => country[0] == 'E')
console.log(countriesStartsWithE)

//Task15-easy
const priceWithValue = products.filter(
	product => typeof product.price == 'number'
)
console.log(priceWithValue)

//Task16-easy
const arr = [1, 'string', 'lntlns', 'lekj', 590]

function getStringLists(array) {
	const newArray = array.filter(elem => typeof elem == 'string')

	return newArray
}
console.log(getStringLists(arr))

//Task17-easy
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum)

//Task18-easy
const countriesToString = countries2.reduce((acc, cur, index) => index != countries2.length - 1 ? acc.concat(`, ${cur}`) : acc.concat(`, and ${cur} are north European countries`))
console.log(countriesToString)

//Task19-easy
//Task20-easy
const namesLength = names.some(name => name.length > 7)
console.log(namesLength)

//Task21-easy
const countriesContainsLand = countries2.every(country =>
	country.includes('land')
)
console.log(countriesContainsLand)

//Task22-easy
//Task23-easy
const countryWithSixLetters = countries2.find(country => country.length == 6)
console.log(countryWithSixLetters)

//Task24-easy
const countryWithSixLetters2 = countries2.findIndex(
	country => country.length == 6
)
console.log(countryWithSixLetters2)

//Task25-easy
const norwayPosition = countries2.findIndex(country => country == 'Norway')
console.log(norwayPosition)

//Task26-easy
const russiaPosition = countries2.findIndex(country => country == 'Russia')
console.log(russiaPosition)
