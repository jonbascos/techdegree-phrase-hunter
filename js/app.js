/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game

document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game()
    game.startGame()

    // After the game is won or lost, pressing start will reset the keys
    let allKeys = document.querySelectorAll('.key')
    for(let i = 0; i < allKeys.length; i++) {
        if(allKeys[i].classList.contains('chosen')) {
            allKeys[i].classList.remove('chosen')
        } else if(allKeys[i].classList.contains('wrong')) {
            allKeys[i].classList.remove('wrong')
        }
    }

    // After the game is won or lost, pressing start will reset the lives
    let scoreBoard = document.querySelectorAll('#scoreboard img')
    for(let i = 0; i < scoreBoard.length; i++) {
            scoreBoard[i].src = 'images/liveHeart.png'
    }
})

// After clicking on a letter, sends value to handleInteraction()
document.querySelector('#qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target)
    }
})

