//count occurence of letters in a string
const string = 'wehelloooo'
let count={}
for (s of string){
  if (count[s]){
    count[s]++
  } else {
    count[s]=1
  }
}
console.log(count)


//1 use filter

const evenNumber = [2,3,4,5,6,7,12].filter(number=> number % 2 == 0)

const oddNumber = [2,3,4,5,6,7,12].filter(number=> number % 2 != 0)

console.log('even Number:', evenNumber)
console.log('odd Number:', oddNumber)

//2 
const divisibleBy6 = [2,3,4,5,6,7,12].filter(number=> number % 6 == 0)
console.log('divisible By 6:', divisibleBy6)

//3
const sum = [10,12,20,50].reduce((acc, current) =>
acc + current)
console.log(sum)

//4
const multiply = [1,2,3,4,5].reduce((acc, current) =>acc * current)
console.log(multiply)

//5
const squareNumber = [3,2,3].reduce((acc,current) => acc**current)
console.log(squareNumber)

//6
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

  users.filter(user=>user.role == 'Full Stack Resident')

  //7 obejct returns an object
  const profile = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

  profile.reduce((accu, current)=> ({age : accu.age + current.age}))
