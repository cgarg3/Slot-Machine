// 1.deposit some money
// 2. determine number of lines to bet on 
// 3. collect bet amount
// 4. spin the slot machine
// 5. check if the user wins
// 6. give the user their winnings
//7. play again

// eslint-disable-next-line no-undef
const prompt = require("prompt-sync")();

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

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >= 3) {
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

// eslint-disable-next-line no-unused-vars
let balance = deposit();
// eslint-disable-next-line no-unused-vars
const lines = getNumberOfLines();
// eslint-disable-next-line no-unused-vars
const bet = getBet(balance, lines);
