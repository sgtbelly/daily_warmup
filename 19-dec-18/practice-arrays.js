"use strict";

// ARRAY //
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FOR LOOP
let forloop = testfor => {
    for (let i = 0; i < testfor.length; i++) {
        console.log(testfor[i]);
    }
};

// WHILE LOOP
let whileloop = testwhile => {
    let i = 0;
    while (i < 10) {
        console.log(testwhile[i]) + 1;
        i++;
    }
};

// MAP
let map = testmap => {
    const map1 = testmap.map(x => x * 2);
    console.log(map1);
};

// FILTER
let filter = testfilter => {
    const filter1 = testfilter.filter(x => x % 2 == 0);
    console.log(filter1);
};

// REDUCE
let reduce = testreduce => {
    const reduce1 = (acc, curr) => acc * curr;
    console.log(testreduce.reduce(reduce1));
};

forloop(arr1);
whileloop(arr1);
map(arr1);
filter(arr1);
reduce(arr1);

// OBJECTS //
const people = ["Kookla", "Fran", "Ollie"];

const stuff = {
    tv: "huge",
    radio: "old",
    toothbrush: "frayed",
    cars: ["Toyota", "Mazda"]
};

let newPeople = [];

//SPREAD
newPeople = ["Ollie", ...people, "Garfield"];

// NEWSTUFF
const newStuff = {
    ...stuff,
    cars: [...stuff.cars, "Chevy"]
};

// STATE
const state = {
    people: people,
    stuff: stuff
};

const newState = {
    people: ["Ollie", ...people, "Garfield"],
    stuff: { ...stuff, cars: [...stuff.cars, "Chevy"] }
};

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);
console.log(people);
console.log(stuff);
console.log(state);
