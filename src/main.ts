import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
const newDate = new Date();

let a: number = 4;
console.log(a)
a = 48
console.log(a)

let str: string = 'kam'
console.log(str)

let arrayOfNumbers = [1, 2, 3]
console.log(arrayOfNumbers)

const numbers: number[] = [1, 4, 5]
console.log(numbers)
numbers.push(6)
console.log(numbers)

const dateArray: Date[] = [new Date()];
console.log(newDate)
dateArray.push(newDate)
console.log(dateArray)


let xyz: any;
xyz = '3'

const res = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json).then(data => { data })
console.log(res)

const person: { name: string, experience: number, isProgrammer?: boolean } = { name: 'kam', experience: 3 }
console.log(person)
person.isProgrammer = true
console.log(person)

type Student = {
  name: string,
  gpa: number,
  isRich?: boolean
  friends: string[],
  address: {
    street: string,
    no: number
  }
}

const student1: Student = {
  name: 'kseniia',
  gpa: 2.9,
  friends: ['kam', 'messi'],
  address: {
    street: 'abc',
    no: 35
  }
}

const student2: Student = {
  name: 'kam',
  gpa: 2.3,
  friends: ['kseniia', 'messi'],
  address: {
    street: 'abc',
    no: 35
  }
}

console.log(student1, student2)
// only objects
interface Teacher {
  name: string,
  exp: number,
  isRich?: boolean
  friends: string[],
  address: {
    street: string,
    no: number
  }
}

const teacher1: Teacher = {
  name: 'kamT',
  exp: 44,
  isRich: true,
  friends: [],
  address: {
    street: 's',
    no: 3
  }
}


console.log(teacher1)


// functions



function printName(name: string) {
  console.log(name)
}

printName('kam')

function sumNumbers(a: number, b: number) {
  return a + b
}

function studentInfo(student: Student) {
  return student
}
const studentX = studentInfo(student2)
console.log(studentX)
const c = sumNumbers(10, 30)
console.log(c)

function optionalParameters(name: string, options?: { debugMode: boolean }) {
  console.log(name, options)
}

optionalParameters('kseniia', { debugMode: true })
type Option = {
  debugMode?: boolean,
  logLevel?: number
}
function op2(name: string, { debugMode = false, logLevel }: Option = {}) {
  console.log(name, debugMode, logLevel)
}

op2('kam', { debugMode: true, logLevel: 3 })

function restOperator(...nums: number[]) {
  let summ: number = 0;
  nums.forEach(num => {
    summ += num;
  })
  console.log(summ)
}
restOperator(1, 34, 53, 5, 8)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
