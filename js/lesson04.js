// Задачи на математические функции JavaScript

// задача 1
// let a = 10
// let b = 3
// console.log(a%b)

// задача 2
// let a = prompt('a',)
// let b = prompt('b',)
// if ((a%b) == 0) {
//     alert('Delitsa')
// } else {
//     alert('Ne delitsa')
// }

// задача 3
// let st = Math.pow(2,10)
// console.log(st)

// задача 4
// let kor = Math.sqrt(245)
// console.log(kor.toFixed(2))

// задача 5
// let arr = [4,2,5,19,13,0,10]
// let sum = 0
// for (let i = 0; i < arr.length; i++ ) {
//     sum = sum + Math.pow(arr[i],3)
// }
// console.log(Math.sqrt(sum).toFixed(2))

// задача 6
// console.log(Math.ceil(Math.sqrt(379)))
// console.log(Math.sqrt(379).toFixed(1))
// console.log(Math.sqrt(379).toFixed(2))

// задача 7
// var obj = {
//     'floor': Math.floor(Math.sqrt(587)),
//     'ceil': Math.ceil(Math.sqrt(587))
// }
// for (var key in obj) {
//     console.log(obj[key])
// }

// задача 8
// первый вариант
// let arr = [4,-2,5,19,-130,0,10]
// let max = 0
// let min = 0
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (min > arr[i]) {
//         min = arr[i]
//     }
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log('Максимальное число: ' + max)
// console.log('Минимальное число: '+ min)

// задача 8
// второй вариант
// console.log('4,-2,5,19,-130,0,10')
// let max = Math.max(4,-2,5,19,-130,0,10)
// console.log('Max = ' + max)
// let min = Math.min(4,-2,5,19,-130,0,10)
// console.log('Min = ' + min)

// задача 9
// let ran = (Math.random()*100).toFixed(0)
// console.log(ran)

// задача 10
// let arr = [0,0,0,0,0,0,0,0,0,0]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.ceil(Math.random()*100)
//     console.log(arr[i] + ' ')
// }

// задача 11
// let a = parseInt(prompt('a',))
// let b = parseInt(prompt('b',))
// let result = Math.abs(a - b)
// console.log(result)

// задача 12
// let a = parseInt(prompt('a',))
// let b = parseInt(prompt('b',))
// let с = Math.abs(a - b)
// console.log(с)

// задача 13
// let arr = [12,15,20,25,59,79]
// let summ = 0
// for (let i = 0; i < arr.length; i++) {
//     summ = summ + arr[i]
//     }
// let result = summ / arr.length
// console.log(result)

// задача 14
// let fac = parseInt(prompt('число для факториала',))
// let i = 1
// let result = 1
// while (i <= fac) {
//     result = result*i
//     i++
// }
// console.log(result)