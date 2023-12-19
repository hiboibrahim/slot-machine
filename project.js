// 1. Deposit money


const prompt= require("prompt-sync") ();
const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid desposit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }
}; 
            const depositAmount number
const depositAmount = deposit();
console.log(depositAmount);
    
    // 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. give the user their wininngs
// 7. Play again
