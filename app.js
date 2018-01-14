const rs = require("readline-sync");
const max = rs.question("Z jakiego zakresu chcesz szukać liczb (od 1 do ?)");
const secret = Math.floor(Math.random() * max) + 1;
let turns = 0;

let lastGuess = Math.floor(max / 2);
let guess = secret + 1;
while (guess != secret) {
    guess = rs.question("Jaką liczbę skrywam? (1-" + max + ") ");
    const sign = Math.abs(secret - guess);
    if (sign < lastGuess) {
        console.log("Cieplej");
    }
    else {
        console.log("Zimniej");
    }
    lastGuess = sign;
    turns++;
}
console.log("Dobrze misiu zajeło Ci to " + turns + " ruchów");
