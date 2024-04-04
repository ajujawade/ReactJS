let names = ["Ajay", "Sachin", "Sarika"]

let [a, b, c] = names

console.log(a)
console.log(b)
console.log(c)

// program

let info = {

    firstName: "Ajay",
    lastName: "Jawade"

}

let { firstName: fn, lastName: ln } = info

console.log(fn)
console.log(ln)

// program

let names2 = ['raj', 'ram', 'rajesh']

let names3 = [...names2, "Ajay"]

let names4 = ["Ajay", ...names2]

console.log(names3)
console.log(names4)

let city = ['Pune', 'Mumbai', 'Banglore', 'Kolkata']

console.log(city)

let [x, ...cities] = city

console.log(x)
console.log(cities)

// Program
// Template Literals

let firstName = "Snehal"
let lastName = "Kamble"

console.log(`My First Name is ${firstName} and Last Name is ${lastName}`)

console.log(`addition of 20 + 32 is ${20+32}`)

// Program

let age = 18
let q1 = age > 18 ? "Can Drive" : "Cannot Drive"
console.log(q1)

// Program

let birthyear = [2000, 2001, 2003]

let ages = birthyear.map(el => 2024 - el)

console.log(ages)

// Program 

// &&

let x1 = 7 == 7 && 3
console.log(x1)

let x2 = 7 > 2 && 3
console.log(x2)

let x3 = 8 === 8 && "Hello"

console.log(x3)

// ||

let x4 = 7 != 7 || 8 != 9

console.log(x4)

let x5 = 7 == 5 || 8 == 9

console.log(x5)

// Program  

let info4 = [{
        firstName: "Ajay",
        lastName: "Jawade",
        parent: {

            mother: "Surekha",
            father: "Latari"

        }
    },
    {
        firstName: "Snehal",
        lastName: "Kamble",
        parent: {

            father: "Kawadu",
            mother: "Jyotsana"

        }
    }
]

console.log(`${info4[0] ?.paren ?.father}`)






//