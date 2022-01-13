class Shiritori {
    constructor() {
        this.words = []
        this.gameOver = false
    }
    play(word) {
        if (this.words.length === 0) {
            this.words.push(word);
            console.log(this.words);
        } else if (this.words[this.words.length - 1][this.words[this.words.length - 1].length - 1] === word[0]) {
            this.words.push(word);
            console.log(this.words);
        } else if(this.words[this.words.length - 1][this.words[this.words.length - 1].length - 1] !== word[0]) {
            this.gameOver = true;
            console.log("game over");
        }
    }
    restart() {
        this.gameOver = false;
        this.words = [];
        console.log("game restarted");
    }
}

let shiritori = new Shiritori();
shiritori.play("apple");
shiritori.play("eat");
shiritori.play("table");
shiritori.play("hummer");
console.log(shiritori.words);
shiritori.restart();
console.log(shiritori.words);
console.log(shiritori.gameOver);
