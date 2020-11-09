/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
        this.phraseSplit = this.phrase.split('')
    }

    addPhraseToDisplay() {
        // const phraseSplit = this.phrase.split('')
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
    let selectedLetter = letter
    // const phraseSplit = this.phrase.split('') 
    return this.phraseSplit.includes(selectedLetter)
};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    let matchedLetter = checkLetter(letter)
    if(matchedLetter) {
        const phraseContainer = document.querySelector('#phrase ul li')
        phraseContainer.forEach(match => {
            if(match.className == `hide letter ${matchedLetter}`) {
                // Changes space from 'hide' to 'show' so we can see the letter
                match.className = `show letter ${matchedLetter}`
            }
        })
    }
 };
}
