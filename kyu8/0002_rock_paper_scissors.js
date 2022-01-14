let rps = (p1, p2) => {
    let res = 0;
    if (p1 !== p2) {
        if (p1 === 'scissors') p2 === 'paper' ? res = 1 : res = 2;
        if (p1 === 'paper') p2 === 'scissors' ? res = 2 : res = 1;
        if (p1 === 'rock') p2 === 'scissors' ? res = 1 : res = 2;
    }
    return res === 0 ? 'Draw!' : `Player ${res} won!`;
}
console.log(rps('scissors','paper'))
console.log(rps('scissors','rock'))
console.log(rps('paper','paper'))