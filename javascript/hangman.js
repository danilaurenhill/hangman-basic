
// simply experimenting
function setup() {
    alphapet = "abcdefghijklmnopqrstuvwxyz";
    tries = 5;
    words = ["cat", "dog", "cow", "reindeer"];
    messages = {
        win: 'You win!',
        lose: 'You lost!!',
        guessed: ' Already guessed, please try again...',
        validLetter: 'Enter a letter from A-Z'
};
lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;

// choose word
    currentWord = words[Math.floor(Math.random() * words.length)];

    output = document.getElementById("output");
    man = document.getElementById("man");
    guessInput = document.getElementById("letter");

    man.innerHTML = 'You have ' + lives + ' lives remaining';
    output.innerHTML = '';

    document.getElementById("letter").value = '';

    // guess button
    guessButton = document.getElementById("guess");
    guessInput.style.display = 'inline';
    guessButton.style.display = 'inline';

    // display of letters in current word 
    letters = document.getElementById("letters");
    letters.innerHTML = '<li class="current-word">Current word:</li>';

    var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }
