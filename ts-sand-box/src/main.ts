import './style.css'

//infered types
const firstaName = 'ahmed'
console.log(firstaName)

//Explicit typing
const myFavNumb : number = 77
console.log(typeof myFavNumb)

let isABoolean = true;
isABoolean = false

const nums: number[] = [1,2,3,4]
console.log(nums)
nums.push(55)


const unknownArr : unknown[] = [1,'hello',true]
console.log(unknownArr)

const UnionArr : (null | undefined)[] = [null,undefined]

const emptyNumArr: number[] = []

for(let i: number = 0; i< nums.length; i++){

}


const strinOfNum: string = myFavNumb.toString();

//using AS keyword
//we have an array of numbers and we wazant a new array with all the values in the original used to build a info stirng about loal temps
const temps = [12,32,23]


const info = temps.map((num) =>{
  return `it is ${num}c`
}) as string[]

const info1 = (<string[]>temps.map((num) =>{
  return `it is ${num}c`
})) as string[]

const info2: string[] = temps.map((num) =>{
  return `it is ${num}c`
}) as string[]

//typing functions
function lowerCaseWord(word: string){
  return word.toLowerCase();
}
console.log('5')

//create a function that will generate an array of 5 random number between 1 and n.


// Math.floor(Math.random())

const randomNum = (n: number) => {
  let numbArr:number[] = []
  for (let i: number = 1; i<=5; i++){
    numbArr.push(Math.floor(Math.random() * n))
  }
  return numbArr
}

console.log(randomNum(9))
