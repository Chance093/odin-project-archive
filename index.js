// ASK USER ROCK PAPER SCISSORS
// SET USER INPUT EQUAL TO VARIABLE



// COMPUTER GIVES US RANDOM INPUT
// USE MATH.RANDOM TO GET NUMBER 1-3
// SET NUMBER EQUAL TO ROCK PAPER OR SCISSORS
// RETURN STRING


// SEE WHICH ONE WINS

// IF USER IS ROCK, HE BEATS SCISSORS BUT LOSES TO PAPER

// IF USER IS PAPER, HE BEATS ROCK BUT LOSES TO SCISSORS

// IF USER IS SCISSORS, HE BEATS PAPER BUT LOSES TO ROCK

// OUTPUT WINNER

// PLAY BEST TO 5

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}