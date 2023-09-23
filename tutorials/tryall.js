import React from 'react';
import ReactDOM from 'react-dom/client';

const vehicleOne = {
    brand: 'ford',
    model: 'mustang',
    type: 'car',
    year: '2021',
    color: 'red',
    registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne);
function myVehicle(vehicle) {
    const message = vehicle.type
    console.log(message)
}
// -------------React Version---------------------------
myVehicle(vehicleOne);
function newMyVehicle({type, registration: { state }}) {
    const message = type
    console.log(message)
}


// ----the spread operator----

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]
console.log(numbersCombined);

const [one, two, ...rest] = numbersCombined;
console.log(rest);

function spread() {
    

    const firstname = {
        name: 'David'
    }
    const lastname = {
        name: 'Arhin'
    }

    const fullname = { ...firstname, ...lastname }
    console.log(fullname)
}
// ----the spread operator----


// ----------------import and export module
// import message from 'person.js';
// import { name, age } from "person.js";


// console.log(message());

// -----ternary operator------
let gain = true;
// gain ? console.log(message) : console.log('dacd');


const myFirstElement = <h1>Heellloool</h1>


const myArray = ['apple', 'banana', 'orange']
const listArray = myArray.map((item) => <p>{ item}</p>)

// ---destructing--
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, , suv] = vehicles;

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  return [add, subtract, multiply, divide];

}
const [add, subtract, multiply, divide] = calculate(4, 7);
console.log(add);
// --- destructing ---




// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);


// root.render(add)
// root.render(myFirstElement);


// --------------learning to code in JSX-------

//----------divs in JSX-------
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

//Singleton tags musts be closed properly(<.../)

// ClassName is used instead of class to represent the class attribute
const myClassElement = <h1 className="myclass">Hello World</h1>;


//if statement in jsx
const x = 5
let text = "Goodbye"
if (x = 10) {
    text = "Hello";
} 

const ifStatement = <h1>{text}</h1>

const ternaryStatement = <h1>{x < 10 ? "Hello" : "bye"}</h1>



// ------Props------
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red" />);


// components in components

function Garage(){
  return (
    <>
      <h3>Here is where a car parks</h3>
      <Car/>
    </>
  )
}