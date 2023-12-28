// 1.deposit some money
// 2. determine number of lines to bet on 
// 3. collect bet amount
// 4. spin the slot machine
// 5. check if the user wins
// 6. give the user their winnings
//7. play again

// eslint-disable-next-line no-undef
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

function deposit() {
    // eslint-disable-next-line no-constant-condition
    while(true){
    const depositAmount = prompt("Enter the deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    }
    else {
        return numberDepositAmount;
    }
}
}

function getNumberOfLines(){
 // eslint-disable-next-line no-constant-condition
 while(true){
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid number of lines, try again.");
    }
    else {
        return numberOfLines;
    }
}
}

function getBet(balance, lines){
  // eslint-disable-next-line no-constant-condition
  while(true){
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet, try again.");
    }
    else {
        return numberBet;
    }
}   
}

function spin() {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }

    const reels = [[]];
    for(let i = 0; i < COLS; i++){
         reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbols = reelSymbols[randomIndex];
            reels[i].push(selectedSymbols);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

function transpose(reels) {
    const rows = [];
}

let balance = deposit();
const lines = getNumberOfLines();
const bet = getBet(balance, lines);
const reels = spin();
