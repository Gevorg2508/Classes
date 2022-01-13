class Console{
    constructor(string){
        this.history = string+":"
        this.current = ""
    }
    log(...args){
        this.current += ` ${JSON.stringify(...args)}`;
        console.log(this.history += this.current);
    }
    clearHistory(){
        this.current = "";
        console.log("true");
    }
}
let myConsole = new Console("Regular");
let fancyConsole = new Console("Fancy");
// fancyConsole.log("hello");
// myConsole.log("hello");
// myConsole.clearHistory();
// myConsole.log([1,2,3,4,5]);
myConsole.clearHistory();
myConsole.log({a: 1, b: 2});
myConsole.log([1,2,3,4]);

