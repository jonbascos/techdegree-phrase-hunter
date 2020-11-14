/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
        this.phraseSplit = this.phrase.split('')
    }

    // Places the phrase as blank boxes into the DOM
    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul')
        const phraseLI = document.createElement('li')
        let hiddenPhrase = ''
        for(let i = 0; i < this.phraseSplit.length; i++) {
            let currentLetter = this.phraseSplit[i]
            if(currentLetter === ' ') {
                hiddenPhrase += `<li class="space"> </li>`
            } else {
                hiddenPhrase += `<li class="hide letter ${currentLetter}">${currentLetter}</li>`
            }
              phraseContainer.innerHTML = hiddenPhrase
        }
    } 

    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    return this.phraseSplit.includes(letter)
};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
       const matchedLetter = document.getElementsByClassName(letter)
       console.log(matchedLetter)
       for(let i = 0; i < matchedLetter.length; i++) {
           matchedLetter[i].classList.replace('hide', 'show')
       }
    }
}
