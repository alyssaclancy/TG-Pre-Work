const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*The while loop should be used when you don't know how many times a for loop should run. It runs while a certain condition is true and stops running when it is no longer true.
The loop above continunes to run as the random number generated to become the index position does not return 'spade'. This number of rounds could not be defined within a for loop.
*/
