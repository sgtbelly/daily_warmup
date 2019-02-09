"use strict";

// Array//
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For loop

let forLoop = testFor => {
    for(let i =0; i < testFor.length; i++) {
        console.log(testFor[i]);
    }
};

//While Loop

let whileLoop = testWhile => {
    let i = 0;
    while (i < 10) {
        console.log (testWhile[i]) + 1;
        i++;
    }
};

// Map

let map = testMap => {
    const map2 = testMap.map(x => x * 5);
    console.log(map2);
};

// Filter

let filter = testFilter => {
    const filter2 = testFilter.filter(x => x % 2 == 0);
    console.log(filter2);
};

// Reduce

let reduce = testReduce => {
    const reduce2 = (acc, curr) => acc * curr;
    console.log(testReduce.reduce(reduce2));
};



forLoop(num);
whileLoop(num);
map(num);
filter(num);
reduce(num);

// OBJECTS

const people = ["Kookla", "Fran", "Ollie"];

const stuff = {
  tv: "huge",
  radio: "old",
  toothbrush: "frayed",
  cars: ["Toyota", "Mazda"]
};

let newPeople = [];

// Spread

newPeople = ["Ollie", ...people, "Garfield"];

// NeStuff

const newStuff = {
    ...stuff,
    cars: [...stuff.cars, "Chevy"]
};

//State

const state = {
  people: people,
  stuff: stuff,
};

//NewState

const newState ={
    people: ["Ollie", ...people, "Garfield"],
    stuff: {...stuff, cars: [...stuff.cars, "Chevy"]}
};

// Console.logs

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);
console.log(people);
console.log(stuff);
console.log(state);




