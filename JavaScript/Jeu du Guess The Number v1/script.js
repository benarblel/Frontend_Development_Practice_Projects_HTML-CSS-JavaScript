function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerPick() {
    let computerPick = randomNumber(1, 10);
    let numPick = prompt('Pick a number between 1 to 10 :');

    if (numPick == computerPick) {
        document.getElementById('result-js').innerHTML = "You won!";
    } else {
        document.getElementById('result-js').innerHTML = `You lost.. The computer picked ${computerPick}`;
    }
}