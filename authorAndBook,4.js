class Author {
    constructor(name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender.toLowerCase()
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name !== "string") {
            throw new Error();
        } else {
            this._name = name;
        }
    }
    get gender() {
        return this._gender;
    }
    get email() {
        return this._email;
    }
    toString() {
        if (this._gender === "male") {
            return `Mr ${this.name}`;
        } else if (this._gender = "female") {
            return `Ms ${this._gender}`;
        }
    }
}
let author1 = new Author("Koelyu", "koelyu13@gmail.com", "mAle");

class Book {
    constructor(title, price, quantity) {
        this._title = title
        this._author = author1.name
        this._price = price
        this._quantity = quantity
    }
    get author() {
        return this._author;
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price + " $;"
    }
    set quantity(quantity) {
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    getProfit() {
        return this._quantity * this._price + " $";
    }
    toString() {
        return `${author1.toString()} ${this._title}`;
    }
}



let book1 = new Book("The Alchemist", 40, 170000,);
// console.log(book1.author);
// console.log(book1.price)
// console.log(book1.quantity);
// console.log(book1.getProfit());
// console.log(book1.toString());
// book1.title = "Tresure island";
// book1.price = 39;
// book1.quantity = 10000;
// console.log(book1.getProfit());
// console.log(book1.toString());






















