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
let fieldStr;


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
    
fieldStr = arr.join('');
console.log(fieldStr);
let myArr = fieldStr.split('');

function fieldMatrix(list, elePerArr) {
    let matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elePerArr === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    console.log(matrix);
}

fieldMatrix(myArr, width);


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


class Field {
    constructor(field) {
        this._field = field;


    }
    
    get field() {
        return this.field
    }
};

let y = 0;
let x = 0;




buildField();





