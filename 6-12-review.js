
// let customer = {
//     name: 'Valerie',
//     balance: 10000000
// }

// let customer2 = {
//     name: 'Mat',
//     balance: 10000000
// }


// // function getMoney(person, amountTheyWant) {
// //     personID
// // }

// // const getMoney = (personObj, amountTheyWant) => {
// //     personObj.balance -= amountTheyWant
// //     console.log(`${personObj.name} remaining balance: ${personObj.balance}`)
// // }


// // getMoney(customer, 100)
// // getMoney(customer2, 10000)



// // customer2.balance -= 100000
// // console.log(`${customer2.name} remaining balance: ${customer2.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer3.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer4.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer5.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)


// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)


// // customer.balance -= 100000
// // console.log(`${customer.name} remaining balance: ${customer.balance}`)

// let car = {
//     color: 'Red',
//     make: 'Toyota',
//     model: 'Tundra',
//     mileage: 1000,
//     ownerDetails: {
//         name: 'Mat',
//         age: '20',
//         obj: {
//             str: 'hi'
//         }
//     }
// }

// console.log(car.color)

// car.color = 'Blue'

// console.log(car['color'])

// console.log(car.ownerDetails.obj.str)


// let objArr = {
//     0: 'hi',
//     1: 'Hello'
// }


// let arr = ['hi', 'hello', 'hola', 'bonjour', 100]
// //.length = 5

// // console.log(arr.length)
// // i++ is the same i = i + 1 or i += 1
// for(let i=arr.length-1; i>=0; i--){ // loop 1 i = 4
//     //block of code
//     console.log(arr[i])
// }


// let arr = [2, 5, 3, 4, 6, 7, 10]

// let squareArr = arr.map(function (num) { // [value, value, value, value, value, value, value]
//     return num*num
// })
// let squareArr = arr.map((num) => { // [value, value, value, value, value, value, value]
//     return num*num
// })

// console.log(squareArr)

// let squareArr2 = []
// for(let i=0; i< arr.length; i++){
//     squareArr2.push(arr[i]*arr[i])
// }
// console.log(squareArr2)


let arr = [2, 5, 3, 4, 6, 7, 10]


let sum2 = arr.slice(5).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    
},0)

console.log('with reduce ',sum2)

let sum = 0

for(let i=0; i< arr.length; i++){
    sum += arr[i]
}
console.log(sum)

// let creditNumber = {
//     balance: 1000000
// }
// function getBalance(creditNumber) {    
//     return creditNumber.balance
// }

// let currentBalance;
// console.log(currentBalance)

// currentBalance = 1000000

// console.log(currentBalance)

