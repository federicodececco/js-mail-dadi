
const player = Math.floor(Math.random() * 6 +1)
const machine = Math.floor(Math.random() * 6 +1)
if (player > machine) {
    console.log(`Player wins: ${player} - ${machine}`)
}
else if (player < machine) {
    console.log(`The computer wins: ${machine} - ${player}`)
}
else {
    console.log(`Tie! (${player})`)
}