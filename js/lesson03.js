'use strict'

// 
// задача 1 FOR
// for (let i = 1;i <=100; i++) {
//     console.log(i)
// }

// задача 1 WHILE
// let i = 1
// while  (i <= 100) {
//     console.log(i)
//     i++
// }

// задача 2 FOR
// for (let i = 11; i <= 33; i++) {
//     console.log(i)
// }

// задача 2 WHILE
// let i = 11
// while (i <=33) {
//     console.log(i)
//     i++
// }

// задача 3 FOR
// for (let i = 1; i <= 100; i++) {
//     if ((i % 2) == 0) {
//         console.log(i)
//     }
// }

// задача 3 WHILE
// let i = 1
// while (i <= 100) {
//     if ((i % 2) == 0) {
//         console.log(i)
//     }
//     i++
// }

// задача 4 FOR
// let sum = 0
// for (let i = 1; i <=100; i++) {
//     sum = sum + i
// }
// console.log(sum)

// задача 4 WHILE
// let i = 1
// let sum = 0
// while (i <= 100) {
//     sum = sum + i
//     i++
// }
// console.log(sum)

// Работа с for для массивов
// задача 1
// let arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// задача 2
// let arr = [1,2,3,4,5]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//    result = result + arr[i]
// }
// console.log(result)

// Работа с for-in
// задача 1
// var obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'синий'
// }

// for (var key in obj) {
//     console.log(obj[key] + ' ' + key)
// }

// задача 2
// var obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400'
// }
// for (var key in obj) {
//     if (obj[key] == '200'){
//     console.log('Коля зп = 200 доларов')
//     }
// }

// ЗАДАЧА
// задача 1
// let arr = [2,5,9,15,0,4]
// for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] > 3)&&(arr[i] < 10)) {
//         console.log(arr[i])
//     }
// }

// задача 2
// let arr = [1,2,-3,-5]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result = result + arr[i]
//     }
// console.log(result)
// }

// задача 3
// let arr = [1,2,5,4,9,13,10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         console.log('Есть!')
//     }
// }

// задача 4
// let num = 0
// let arr = [10,20,30,50,235,3000]
// for (let i = 0; i < arr.length; i++) {
//     num = arr[i].toString()
//     num = num[0]
//     if ((num == 1)||(num == 2)||(num == 5)) {
//         console.log(arr[i])
//     }
// }

// задача 5
// let arr = [1,2,3,4,5,6,7,8,9]
// let str = ''
// for (let i = 0; i < arr.length; i++) {
//     str = str + '-' + arr[i]
// }
// console.log(str + '-')

// задача 6
// let arr = ['пн','вт','ср','чт','пт','сб','вс']
// for (let i = 0; i <arr.length; i++) {
//     if ((0 <= i)&& (i < 5)) {
//         document.write(arr[i] + ' ')
//     }else {
//         document.write("<b>" + arr[i] + ' ' + "<b>")
//     }
// }

// задача 7
// let day = 'чт'
// let arr = ['пн','вт','ср','чт','пт','сб','вс']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == day) {
//         document.write("<i>" + arr[i] + ' ' + "</i>")
//     } else {
//         document.write(arr[i] + ' ')
//     }
// }

// задача 8
// let n = 1000
// let num = 0
// while (n >= 50) {
//     n = n / 2
//     num++
// }
// console.log(num + ' ' + n)