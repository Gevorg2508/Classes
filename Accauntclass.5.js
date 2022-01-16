class Account {
    constructor(name, balance) {
        this.id = 0
        this._name = name
        this._balance = balance
       
    }
    
    get name() {
        return this._name;
    }
    get balance() {
        return this._balance + " $";
    }
    set name(name) {
        this._name = name;
    }
    set balance(balance) {
        this._balance = balance;
    }
    credit(amount) {
        this._balance = this._balance + amount;
        return this._balance + " $";
    }
    debit(amount) {
        if (amount < this._balance) {
            return "Amount exceeded balance.";
        } else {
            return amount - this._balance + " $";
        }
    }
    transferTo(anotherAcc, amount) {
        if (amount > this._balance) {
            return "Amount exceeded balance."
        }else{
            this._balance = this._balance - amount;
            anotherAcc.balance = anotherAcc.balance + amount;
            return this._balance + " $";
        }
    }
    static identifyAccounts(acc1, acc2){
        if(acc1.id === acc2.id && acc1.name === acc2.name && acc1.balance === acc2.balance){
            return `yes they are!`;
        }else{
            return `no they aren't!`
        }
    }
    toString(){
        return `${this._name}'s account balance is ${this._balance} $`;
    }
}
let acc1 = new Account("Card Account", 1000);
acc1.name = "Another Card";
let acc2 = new Account("Saving account", 2000);
// console.log(acc2.balance);
// console.log(acc2.credit(400));
// console.log(acc2.debit(2000));
console.log(acc1);
console.log(acc2);





















