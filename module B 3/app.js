// Global Scope
var myName = "Hilal"
let myAge = 20
const myCity = "Karachi"

console.log(myName)
console.log(myAge)
console.log(myCity)
// haan teeno globally accessible hain


// Function Scope
function checkScope() {
    var salary = 50000
    let bonus = 5000
    const tax = 1000

    console.log(salary)
    console.log(bonus)
    console.log(tax)
}
checkScope()
// bahar call karo toh error aata hai, andar hi rehte hain


// Block Scope
if(true) {
   var blockVar = "var hai ye"
   let blockLet = "let hai ye"
   const blockConst = "const hai ye"
}
console.log(blockVar)  // ye nikal aata hai bahar
// console.log(blockLet)    ERROR
// console.log(blockConst)  ERROR


// Hoisting with var
console.log(score)   // undefined — error nahi aata
var score = 100


// Hoisting with let and const
// console.log(points)  ReferenceError
// let points = 50


// Re-declaration
var city = "Lahore"
var city = "Karachi"   // var mein chalti hai ye
console.log(city)

// let name = "Ali"
// let name = "Ahmed"   ERROR — let mein nahi chalta


// Re-assignment
var food = "biryani"
food = "nihari"
console.log(food)   // nihari

let drink = "chai"
drink = "lassi"
console.log(drink)   // lassi

const country = "Pakistan"
// country = "India"   ERROR — const change nahi hoti


// TDZ
// {
//    console.log(x)   ERROR — TDZ
//    let x = 10
// }


// When to use
var i = 0   // loop counter — purana tarika
let total = 0   // badalta rehta hai
const PI = 3.14   // kabhi nahi badlega


// String Interpolation
let firstName = "Hilal"
let lastName = "Ilyas"
console.log(`mera naam hai ${firstName} ${lastName}`)


// Multi-line String
let address = `Street 5
Block B
Karachi`
console.log(address)


// Simple Expressions
let num1 = 10
let num2 = 20
console.log(`dono ka sum hai ${num1 + num2}`)


// Function Calls
function multiply(a, b) {
    return a * b
}
console.log(`result hai ${multiply(5, 4)}`)


// Tagged Template
function myTag(strings) {
    console.log(strings)
}
myTag`hello yaar kya haal`


// Formatting
function makeUpper(strings) {
    return strings[0].toUpperCase()
}
let result = makeUpper`hello world`
console.log(result)


// Conditional Logic
let hour = 10
console.log(`${hour < 12 ? "Good Morning!" : "Good Afternoon!"}`)


// Loops in Template Literals
let items = ["bread", "milk", "eggs", "butter"]
let list = `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`
console.log(list)


// Escaping Backticks
let str = `yaar ye ek backtick hai \` dekho`
console.log(str)


// Nested Template Literals
let table = `<table>
    <tr>${`<td>cell 1</td><td>cell 2</td>`}</tr>
</table>`
console.log(table)


// Ternary — Simple
let age = 17
let canVote = age >= 18 ? "Yes" : "No"
console.log(canVote)


// Even or Odd
let number = 7
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd"
console.log(evenOrOdd)


// Grade
let score2 = 85
let grade = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : score2 >= 60 ? "D" : "F"
console.log(grade)


// Login Status
let isLoggedIn = true
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in"
console.log(statusMessage)


// Discount
let isMember = true
let purchaseAmount = 150
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.10 : 0
console.log(discount)


// Max Value
function maxValue(a, b) {
    return a > b ? a : b
}
console.log(maxValue(10, 20))


// Greeting
function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!"
}
console.log(greet("Hilal"))
console.log(greet(""))


// Mapping
let nums = [1, 2, 3, 4, 5]
let mapped = nums.map(n => n % 2 === 0 ? n * 2 : n * 3)
console.log(mapped)


// Filtering
let words = ["hi", "hello", "ok", "yaar", "bhai"]
let filtered = words.filter(w => w.length > 3)
console.log(filtered)


// Spread — Copy Array
let originalArray = [1, 2, 3]
let copiedArray = [...originalArray]
console.log(originalArray)
console.log(copiedArray)


// Spread — Merge Arrays
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let mergedArray = [...array1, ...array2]
console.log(mergedArray)


// Spread — Add Elements
let numbers = [2, 3, 4]
let updated = [1, ...numbers, 5]
console.log(updated)


// Spread — Copy Object
let originalObject = {name: "Hilal", age: 20}
let copiedObject = {...originalObject}
console.log(originalObject)
console.log(copiedObject)


// Spread — Merge Objects
let obj1 = {name: "Hilal", age: 20}
let obj2 = {city: "Karachi", age: 25}
let mergedObject = {...obj1, ...obj2}
console.log(mergedObject)   // age: 25 — doosra wala override karta hai


// Update Object
let user = {name: "Hilal", age: 20, email: "old@gmail.com"}
let updatedUser = {...user, email: "new@gmail.com", address: "Karachi"}
console.log(updatedUser)


// Spread as Arguments
function sum(a, b, c) {
    return a + b + c
}
let nums2 = [1, 2, 3]
console.log(sum(...nums2))


// Combine Arrays
function combineArrays(...arrays) {
    return [].concat(...arrays)
}
console.log(combineArrays([1,2], [3,4], [5,6]))


// Rest + Spread
function multiplyAll(num, ...rest) {
    return rest.map(n => n * num)
}
console.log(multiplyAll(2, 3, 4, 5))


// Nested Spread
let nestedArray = [[1,2], [3,4]]
let shallowCopy = [...nestedArray]
shallowCopy[0][0] = 99
console.log(nestedArray)    // original bhi badal gaya — shallow copy!
console.log(shallowCopy)


// Rest — Sum
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0)
}
console.log(sumAll(1,2,3))
console.log(sumAll(1,2,3,4,5))


// Rest — Average
function average(...nums) {
    return nums.reduce((total, n) => total + n, 0) / nums.length
}
console.log(average(10, 20, 30))


// First and Rest
let [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first)
console.log(rest)


// Skip and Rest
let [,, ...remainingColors] = ["red", "green", "blue", "yellow", "pink"]
console.log(remainingColors)


// Object Destructuring + Rest
let {name, email, ...restProps} = {name: "Hilal", age: 20, email: "h@gmail.com", address: "Karachi"}
console.log(name)
console.log(email)
console.log(restProps)


// Nested Destructuring
let {id, name: stdName, info: {major}, ...restStudent} = {
    id: 1,
    name: "Hilal",
    grades: "A",
    info: {age: 20, major: "CS"}
}
console.log(id)
console.log(stdName)
console.log(major)


// Filter Even
function filterEven(...nums) {
    return nums.filter(n => n % 2 === 0)
}
console.log(filterEven(1,2,3,4,5,6))


// Combine and Sort
function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a,b) => a - b)
}
console.log(combineAndSort([3,1], [4,2], [6,5]))


// Array Destructuring
let [firstFruit, secondFruit, thirdFruit] = ["apple", "banana", "cherry"]
console.log(firstFruit)
console.log(secondFruit)
console.log(thirdFruit)


// Skipping Elements
let [primaryColor, , tertiaryColor] = ["red", "green", "blue", "yellow"]
console.log(primaryColor)
console.log(tertiaryColor)


// Rest Operator
let [firstNumber, ...remainingNumbers] = [1, 2, 3, 4, 5]
console.log(firstNumber)
console.log(remainingNumbers)


// Object Basic Destructuring
let {name: pName, age: pAge, city: pCity} = {name: "Hilal", age: 20, city: "Karachi"}
console.log(pName)
console.log(pAge)
console.log(pCity)


// Renaming
let {make: carMake, model: carModel, year: carYear} = {make: "Toyota", model: "Corolla", year: 2020}
console.log(carMake)
console.log(carModel)
console.log(carYear)


// Default Values
let {theme = "dark", language = "English"} = {theme: "light"}
console.log(theme)
console.log(language)


// Array of Arrays
let [[a], [b], [c]] = [[1,2], [3,4], [5,6]]
console.log(a, b, c)


// Object within Object
let {username, details: {email: dEmail, address: dAddress}} = {
    username: "hilal123",
    details: {email: "h@gmail.com", address: "Karachi"}
}
console.log(username)
console.log(dEmail)
console.log(dAddress)


// Array Parameters
function printCoordinates([x, y]) {
    console.log(x, y)
}
printCoordinates([10, 20])
printCoordinates([5, 15])


// Object Parameters
function displayUser({name, age}) {
    console.log(name, age)
}
displayUser({name: "Hilal", age: 20})


// Object.keys
let book = {title: "JS Book", author: "John", year: 2020}
console.log(Object.keys(book))


// Count Properties
let student = {name: "Hilal", age: 20, grade: "A", school: "ABC"}
console.log(Object.keys(student).length)


// Iterate Keys
let product = {name: "Phone", price: 50000, category: "Electronics"}
Object.keys(product).forEach(key => console.log(`${key}: ${product[key]}`))


// Object.values
let movie = {title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi"}
console.log(Object.values(movie))


// Sum Values
let scores = {math: 80, science: 90, english: 70}
let totalScore = Object.values(scores).reduce((t, n) => t + n, 0)
console.log(totalScore)


// Iterate Values
let userObj = {username: "hilal", email: "h@gmail.com", location: "Karachi"}
Object.values(userObj).forEach(val => console.log(val))


// Object.entries
let car = {make: "Toyota", model: "Corolla", year: 2020}
console.log(Object.entries(car))


// Convert to Array
let person = {firstName: "Hilal", lastName: "Ilyas", age: 20}
console.log(Object.entries(person))


// Iterate Entries
let settings = {theme: "dark", notifications: true, privacy: "high"}
Object.entries(settings).forEach(([key, val]) => console.log(`${key}: ${val}`))


// Filter Keys
let inventory = {apples: 15, bananas: 5, oranges: 20, grapes: 8}
let highStock = Object.keys(inventory).filter(key => inventory[key] > 10)
console.log(highStock)


// Transform Values
let temps = {morning: 20, afternoon: 35, evening: 28}
let fahrenheit = Object.fromEntries(
    Object.entries(temps).map(([key, val]) => [key, (val * 9/5) + 32])
)
console.log(fahrenheit)


// Key-Value Swap
let roles = {admin: "Ali", editor: "Ahmed", viewer: "Usman"}
let swapped = Object.fromEntries(
    Object.entries(roles).map(([key, val]) => [val, key])
)
console.log(swapped)


// Filter and Map
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn)
}
let nums3 = [1,2,3,4,5,6,7,8,9,10]
let result2 = filterAndMap(nums3, n => n % 2 !== 0, n => n * n)
console.log(result2)


// Sort and Reduce
function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn)
}
let wordsList = ["apple", "banana", "cherry", "date"]
let combined = sortAndReduce(wordsList, (a,b) => a.localeCompare(b), (acc, w) => acc + " " + w)
console.log(combined)


// Simple Callback
function greetUser(name, callback) {
    callback(`Hello ${name}!`)
}
function printGreeting(msg) {
    console.log(msg)
}
greetUser("Hilal", printGreeting)


// Async Callback
function fetchData(callback) {
    setTimeout(() => {
        callback("data aa gaya!")
    }, 2000)
}
function displayData(data) {
    console.log(data)
}
fetchData(displayData)


// Arrow Function
const add = (a, b) => a + b
console.log(add(3, 5))


// Arrow with Map
let nums4 = [1, 2, 3, 4, 5]
let squared = nums4.map(n => n * n)
console.log(squared)


// Variable Scope
function outer() {
    let x = 10
    function inner() {
        console.log(x)
    }
    inner()
}
outer()


// Closure
function createCounter() {
    let count = 0
    return function() {
        count++
        console.log(count)
    }
}
let counter1 = createCounter()
let counter2 = createCounter()
counter1()   // 1
counter1()   // 2
counter2()   // 1 — alag state hai!


// Default Parameters
function greetDefault(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}
greetDefault("Hilal")
greetDefault("Hilal", "Salam")


// Calculate Area
function calculateArea(width = 10, height = 5) {
    return width * height
}
console.log(calculateArea())
console.log(calculateArea(7, 3))