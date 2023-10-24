// Question-01: Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

class BankAccount {
constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
}

deposit(amount) {
    if (amount <= 0) {
    throw new Error("Invalid deposit amount. Please enter a positive amount.");
    }
    this.balance += amount;
}

withdraw(amount) {
    if (amount <= 0) {
    throw new Error("Invalid withdrawal amount. Please enter a positive amount.");
    }
    if (amount > this.balance) {
    throw new Error("Insufficient funds for withdrawal.");
    }
    this.balance -= amount;
}

checkBalance() {
    return this.balance;
}
}

const myAccount = new BankAccount("1234567890", "John Doe", 1000);

try {
myAccount.deposit(-50);
} catch (error) {
console.log(error.message);
}

try {
myAccount.withdraw(1500);
} catch (error) {
console.log(error.message);
}

myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.checkBalance());