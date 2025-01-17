function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function imgChange(numb_dice, classe){

    document.querySelector(classe).setAttribute("src", "images/dice" + numb_dice + ".png");

}

function main() {
    const diceNumber1 = randomNumber();
    const diceNumber2 = randomNumber();

    const id1 = ".img1";
    const id2= ".img2";

    imgChange(diceNumber1, id1);
    imgChange(diceNumber2, id2);

    if (diceNumber1 > diceNumber2){
        document.querySelector("h1").textContent = 'Player 1 Wins!';
    } else if (diceNumber1 < diceNumber2){
        document.querySelector("h1").textContent = 'Player 2 Wins!';
    } else {
        document.querySelector("h1").textContent = 'Draw!';
    }
    
   
  }

main();