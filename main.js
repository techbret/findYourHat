const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const width = prompt('How wide do you want your field?')
const height = prompt('How tall do you want your field?')
let percentageOfHoles = Math.ceil(height * width * 0.19)
console.log(percentageOfHoles);
let holeyHole = 0;
let arr = []
let arr2 = []
let position = 0;


function buildField() {

    //Creates field array with just 'fieldCharacter'
    while (arr.length < width * height) {
        arr.push(fieldCharacter)
    }
    
    //Adds 'holes' to the field at a rate of 19%
    while (percentageOfHoles >= 0) {
        holeyHole = Math.floor(Math.random() * width * height)
        arr[holeyHole] = hole;
        percentageOfHoles = percentageOfHoles - 1;
    }
    
    //Adds the 'hat' to the field
    let hatNum = Math.floor(Math.random() * arr.length)
    arr[hatNum] = hat;    
    
    console.log(arr.join(''));

    //creates first array and starting position    
    while (arr2.length < 10) {
        arr2.push(arr[0])
        arr.shift();
        arr2[position] = pathCharacter;
    }
    console.log(arr2.join(''));
    

}

function changePosition() {
    arr2[position] = pathCharacter;
    console.log(arr2.join(''));
}

function playGame() {
    let choice = prompt('What direction do you want to go?')
    if (choice === 'd') {
        position = position + 1;
    } else if (choice === 'a') {
        position--;
    } else {

    }
    console.log(arr2.join(''));
}


class Field {
    constructor(field) {
        this._field = field;


    }
    
    get field() {
        return this.field
    }
};

buildField();
playGame();


