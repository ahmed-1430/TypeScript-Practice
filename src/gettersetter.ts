class BankAccount {
    userId: number;
    userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    // addBalance(balance: number){
    //     this.userBalance = this.userBalance + balance
    // }

    // using setter
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    // get
    // getBalance() {
    //     return this.userBalance
    // }

    // using getter to get
    get Balance () {
        return this.userBalance
    }

}

const AhmedBankAccount = new BankAccount(152, 'Ahmed', 50);

// AhmedBankAccount.addBalance(50);
// AhmedBankAccount.addBalance(1100);

// console.log(AhmedBankAccount);

// console.log(AhmedBankAccount.getBalance());

AhmedBankAccount.addBalance = 500
console.log(AhmedBankAccount.Balance);