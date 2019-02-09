'use strict';

let Arr = [1,2,3,4,5,6,7,8,9,10];

let forLoop = testFor => {
    for(let i = 0; i < testFor.legth; i ++) {
        console.log(testFor[i]);
    }

};

let whileLoop = testWhile => {
    let i = 0;
    while (i < 10) {
        console.log(testWhile[i]) + 1;
        i++;
    }
};

let map = testMap => {
    const map3 = testMap.map(x => x * 10);
    console.log(map3);
};

let filter = testFilter => {
    const filter3 = teestFilter.filter(x => x % 2 == 0);
    console.log(filter3);
};

let reduce = testReduce => {
    const reduce3 = (acc, curr) => acc - curr;
    console.log(testReduce.reduce(reduce3));
};

forLoop(Arr);
whileLoop(Arr);
map(Arr);
filter(Arr);
reduce(Arr);

// Objects

const people = ["Kookla", "Fran", "Ollie"];

const stuff = {
    tv: "huge",
    radio: "old",
    toothbrush: "frayed",
    cars: ["Toyota", "Mazda"]
};

let newPeople = [];

newPeople = ["Ollie", ...people, "Garfield"];

const newStuff = {
    ...stuff,
    cars: [...stuff.cars, "Chevy"]
};

const state = {
    people: people,
    stuff: stuff,
};

const newState ={
    people: ["Ollie", ...people, "Garfield"],
    stuff: {...stuff, cars: [...stuff.cars, "Chevy"]}
};

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);
console.log(people);
console.log(stuff);
console.log(state);


