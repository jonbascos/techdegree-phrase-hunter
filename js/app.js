/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game

document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game()
    game.startGame()

    // After the game is won or lost, pressing start will reset the keys
    let allKeys = document.querySelectorAll('.key')
    allKeys.forEach(key => {
        key.className = 'key'
        key.disabled = false
    })

    // After the game is won or lost, pressing start will reset the lives
    let scoreBoard = document.querySelectorAll('#scoreboard img')
    scoreBoard.forEach(score => score.src='images/liveHeart.png')
})

// After clicking on a letter, sends value to handleInteraction()
document.querySelector('#qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target)
    }
})

