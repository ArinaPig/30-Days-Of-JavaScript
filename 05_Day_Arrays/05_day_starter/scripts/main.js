//Task1-easy
const emptyArr = []

//Task1-easy
const valArr = [12, 'js', true, 43, 'hello', 'array']

//Task3-easy
let lenValArr = valArr.length
console.log(lenValArr)

//Task4-easy
let firstElem = valArr[0]
let middleElem1 = valArr[lenValArr / 2 - 1]
let middleElem2 = valArr[lenValArr / 2]
let lastElem = valArr[lenValArr - 1]

console.log(firstElem)
console.log(middleElem1)
console.log(middleElem2)
console.log(lastElem)

//Task5-easy
const mixedDataTypes = [34, 'text', false, 83, 'data', 29]

let lenMixedDataTypes = mixedDataTypes.length

console.log(lenMixedDataTypes)

//Task6-easy
let itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
]

//Task7-easy
console.log(itCompanies)

//Task8-easy
let lenItCompanies = itCompanies.length

console.log(lenItCompanies)

//Task9-easy
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[(lenItCompanies - 1) / 2]
let lastCompany = itCompanies[lenItCompanies - 1]

console.log(firstCompany)
console.log(middleCompany)
console.log(lastCompany)

//Task10-easy
for (let i = 0; i < lenItCompanies; i++) {
	console.log(itCompanies[i])
}

//Task11-easy
for (let i = 0; i < lenItCompanies; i++) {
	console.log(itCompanies[i].toUpperCase())
}

//Task12-easy
let part1 = itCompanies.slice(0, lenItCompanies - 1).join(', ')
let part2 = itCompanies[lenItCompanies - 1]
console.log(`${part1} and ${part2} are big IT companies.`)

//Task13-easy
let company = 'Nike'

if (itCompanies.includes(company)) {
	console.log(company)
} else {
	console.log('not found')
}

//Task14-easy
let filterItCompanies = []
let k = 0

for (let i = 0; i < lenItCompanies; i++) {
	k = 0
	for (let j = 0; j < itCompanies[i].length - 1; j++) {
		if (itCompanies[i][j] == 'o') {
			k++
		}
	}
	if (k >= 2) {
		filterItCompanies.push(itCompanies[i])
	}
}

console.log(filterItCompanies)

//Task15-easy
itCompanies.sort()
console.log(itCompanies)

//Task16-easy
itCompanies.reverse()
console.log(itCompanies)

//Task17-easy
console.log(itCompanies.slice(0, 3))

//Task18-easy
console.log(itCompanies.slice(lenItCompanies - 3, lenItCompanies))

//Task19-easy
console.log(
	itCompanies.slice((lenItCompanies - 1) / 2, (lenItCompanies + 1) / 2)
)

//Task20-easy
itCompanies.shift()
console.log(itCompanies)

//Task21-easy
itCompanies.splice(lenItCompanies / 2 - 1, 2)
console.log(itCompanies)

//Task22-easy
itCompanies.pop()
console.log(itCompanies)

//Task23-easy
itCompanies.splice(0)
console.log(itCompanies)
