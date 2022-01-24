const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }
    
    get field() {
        return this.field
    }

    static buildField(width, height, percentageOfHoles) {
        let holePlacement = Math.floor(Math.random() * width * height);
        let emptyField = []
        let hatNum;
        let fullFieldStr;
        let fullFieldArr = [];

        //creates field arrat with just 'fieldcharacters'
        while (emptyField.length < width * height) {
            emptyField.push(fieldCharacter)
        }

        //adds the 'holes' to the field at a rate of 20%
        while (percentageOfHoles >= 0) {
            holePlacement = Math.floor(Math.random() * width * height);
            emptyField[holePlacement] = hole;
            percentageOfHoles = percentageOfHoles - 1;
        }

        //adds the 'hat' to the field at a random location
        hatNum = Math.floor(Math.random() * emptyField.length)
        emptyField[hatNum] = hat;

        //turns the field into a string then into an array;
        fullFieldStr = emptyField.join('');
        fullFieldArr = fullFieldStr.split('');

        let matrix = [], i, k;
        for (i = 0, k = -1; i < fullFieldArr.length; i++) {
            if (i % width === 0) {
                k++;
                matrix[k] =  [];
            }
            matrix[k].push(fullFieldArr[i]);
        }

        return matrix;
        
    };

    printField() {
        return this._field.map(row => row.join('')).join('\n');
    }

    letsPlay() {
        let currentlyPlaying = true;
        let x = 5;
        let y = 0;
        this._field[y][x] = pathCharacter;
        console.log(this.printField());
        while (currentlyPlaying) {
            let selection = prompt('Which direction would you like to go? Using letters a w d s to move')
            if (selection === 'd') {
                this._field[0][0] = fieldCharacter;
                y++
            } else {
                return 'error'
            }
            console.log(this.printField());
        }
    }

};

//Initiates the game
const userWidth = prompt('How wide do you want your field?');
const userHeight = prompt('How tall do you want your field?');
let normalPercentageOfHoles = Math.ceil(userHeight * userWidth * 0.2);

const newFieldstr = Field.buildField(Number(userWidth), Number(userHeight), Number(normalPercentageOfHoles));
const gameField = new Field(newFieldstr);

gameField.letsPlay();


