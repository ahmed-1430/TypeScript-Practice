// access > modify

class BankAccount {
    userId: number;
    userName: string;
    private userBalance: number;            //  another option is 'protected' => protected use for access in the child class

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }

}

const AhmedBankAccount = new BankAccount(152, 'Ahmed', 50);

AhmedBankAccount.addBalance(50);
AhmedBankAccount.addBalance(110);

console.log(AhmedBankAccount);