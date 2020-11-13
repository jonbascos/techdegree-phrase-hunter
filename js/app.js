/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game

document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game()
    game.startGame()

    if(game.)
})

document.querySelector('#qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target)
    }
})

