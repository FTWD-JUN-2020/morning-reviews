let player1 = {
    name: 'Valerie',
    health: 100,
    money: 50
}

let player2 = {
    name: 'DP',
    health: 100,
    money: 50
}

let player3 = {
    name: 'Carlos',
    health: 100,
    money: 50
}

// Turn #1

// Math.random() 0-0.999999999....
// Math.random() * 10 0-9.999999999....
// Math.floor(Math.random() * 10) 0-9

// let p1Roll = Math.floor(Math.random() * 6)
// if(p1Roll > 3){
//     player1.money = player1.money + 10
// }
// console.log(p1Roll, player1)

// let p2Roll = Math.floor(Math.random() * 6)
// if(p2Roll > 3){
//     player2.money = player2.money + 10
// }
// console.log(p2Roll, player2)

// let p3Roll = Math.floor(Math.random() * 6)
// if(p3Roll > 3){
//     player3.money = player3.money + 10
// }
// console.log(p3Roll, player3)

// // Turn 2
// let p1Roll = Math.floor(Math.random() * 6)
// if(p1Roll > 3){
//     player1.money = player1.money + 10
// }
// console.log(p1Roll, player1)

// let p2Roll = Math.floor(Math.random() * 6)
// if(p2Roll > 3){
//     player2.money = player2.money + 10
// }
// console.log(p2Roll, player2)

// let p3Roll = Math.floor(Math.random() * 6)
// if(p3Roll > 3){
//     player3.money = player3.money + 10
// }
// console.log(p3Roll, player3)

const playerTurn = (playerObj) => {
    let playerRoll = Math.floor(Math.random() * 6)
    if(playerRoll > 3){
        playerObj.money = playerObj.money + 10
    }
    console.log(playerRoll, playerObj)
}

// Turn #1
playerTurn(player1)
playerTurn(player2)
playerTurn(player3)

const withdraw = (customerID, amount) => {
    // some code 
}

const phoneCall = (number) => {
    // some code to make call
}

// keywords: let, const, for, var, (), {}, = 

// single line comment 
/*
Multi 
line 
comment */

// let juancito = 'is awake without coffee'
// let juancito = "is awake without coffee"
let juancito = `is awake without coffee`

let num = 10

let tb = {
    car: 'toyota',
    mileage: 100
}

let arr = ['hello', 20]

// Naming rules
let variableName
let _varName
let $varName

num = `hello`
console.log(typeof num)

let gameOver = false

if(player1.money < 0){
    gameOver = true
}

if(gameOver === true){
    console.log('Loseeeeer!!')
}

let dec = 1.020200343 // floating-point number
let num1 = 7

let num2 = 'hi'
let num3 = 100

console.log( (2+1)*10 )

let str3 = 'Stefan'

console.log('hi ' + '4+5')   // string concatenation
console.log(`hi ${4+5}`)   // string interpolation // embed (insert) JS into a string


