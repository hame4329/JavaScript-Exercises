
let accountBalance = 50000;


function deposit(depositAmount) {
    if (isNaN(depositAmount)||depositAmount<=0){
            return "invalid input"
}
  accountBalance += depositAmount;
  console.log(`Deposited: $${depositAmount}`);
  console.log(`New Balance: $${accountBalance}`);
}

const withdraw=(withdrawalAmount)=> {
    if (isNaN(withdrawalAmount)||withdrawalAmount<=0){
    return "invalid input";
}
  accountBalance -= withdrawalAmount;
  console.log(`new balance: ${accountBalance}`);
  console.log(`withdrawal amount: ${accountBalance}`);
}

function viewBalance() {
  console.log(`account Balance: $${accountBalance}`);
}


deposit(10000.00);          
withdraw(500);          
viewBalance();         