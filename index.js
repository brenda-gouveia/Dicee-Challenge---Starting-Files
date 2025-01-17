function randomNumber1() {
  return Math.floor(Math.random() * 6) + 1;
}

function imgChange(numb_dice, jogador){

    document.querySelector(".img1").setAttribute("src", "images/dice" + numb_dice + ".png");

}
//  document.querySelector(".container").textContent = 'Player 1 Wins!'

function main() {
    const diceNumber = randomNumber1();
    imgChange(diceNumber, 1);
   
  }

main();