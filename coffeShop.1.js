class CoffeeShop {
    constructor(name) {
        this.name = name
        this.flag = true
        this.index = 0;
        this.menu = [
            {
                name: "pepsi",
                type: "drink",
                price: 300,
            },
            {
                name: "havi krcqamis",
                type: "food",
                price: 2000,
            },
            {
                name: "coca",
                type: "drink",
                price: 1000,
            },
            {
                name: "kebab",
                type: "food",
                price: 1100,
            }
        ]
        this.orders = []
    }
    addOrder(item) {
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].name === item.toLowerCase()) {
                this.orders.push(item);
                console.log("order added!");
                this.flag = true;
                break;
            } else {
                this.flag = false;
            }
        }
        if (this.flag === false) {
            console.log("this item is currently unavailable!");
        }
    }
    fulfillOrder() {
        if (this.orders.length === 0) {
            console.log("All orders have been fulfilled!")
        } else {
            console.log(`The ${this.orders[0]} is ready!`);
            this.orders.splice(0, 1);
        }
    }
    listOrders() {
        if (!(this.orders.length === 0)) {
            console.log(this.orders);
        } else {
            console.log([]);
        }
    }
    dueAmount() {
        let totalSum = 0;
        for (let i = 0; i < this.menu.length; i++) {
            for (let j = 0; j < this.orders.length; j++) {
                if (this.orders[j].toLowerCase() === this.menu[i].name.toLowerCase()) {
                    totalSum += this.menu[i].price;
                }
            }
        }
        console.log(totalSum);
    }
    cheapestItemOfOrder() {
        let cheapest = [];
        for (let i = 0; i < this.menu.length; i++) {
            for (let j = 0; j < this.orders.length; j++) {
                if (this.orders[j].toLowerCase() === this.menu[i].name.toLowerCase()) {
                    cheapest.push(this.menu[i]);
                }
            }
        }
        cheapest.sort((a, b) => a.price - b.price);
        console.log(cheapest[0].name);
    }
    cheapestItemOfMenu(){
        this.menu.sort((a, b) => a.price - b.price);
        console.log(this.menu[0].name);
    }
    drinksOnly() {
        let drinks = [];
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type === "drink") {
                drinks.push(this.menu[i].name);
            }
        }
        console.log(drinks);
    }
    foodOnly() {
        let foodOnly = [];
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type === "food") {
                foodOnly.push(this.menu[i].name);
            }
        }
        console.log(foodOnly);
    }
}
let coffeeShop = new CoffeeShop();
// coffeeShop.addOrder('Pepsi');
coffeeShop.addOrder("coca");
coffeeShop.addOrder("havi krcqamis");
// coffeeShop.fulfillOrder();
// coffeeShop.fulfillOrder();
// coffeeShop.fulfillOrder();
// coffeeShop.fulfillOrder();
// coffeeShop.fulfillOrder();


// coffeeShop.listOrders();
// coffeeShop.dueAmount();
coffeeShop.cheapestItemOfMenu();
coffeeShop.cheapestItemOfOrder();

// coffeeShop.drinksOnly();
// coffeeShop.foodOnly();


















