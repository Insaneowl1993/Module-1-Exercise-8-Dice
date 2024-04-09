/*export function rollDice (sides) {
    return 1
}*/
var button = document.getElementById("dice-roll");
var number = document.getElementById("number");

var min = 1;
var max = 7;


button.addEventListener("click", function() {
    const random =generateNumber();
    number.innerHTML = random;
});


let diceNumberInput = document.getElementById('dice-number')
let diceImage = document.querySelector('#dice-div')
let diceCloneDiv = document.getElementById('div-clone-div')

// set a default value of your input
let diceCurrValue = 1;

diceNumberInput.addEventListener('change', function() {
    // convert the value to type number
    let diceNumberValue = parseInt(diceNumberInput.value, 10)

    // make sure that value is a number
    if (!isNaN(diceNumberValue)) {
        // this is just to monitor your current value of the input
        if (diceNumberValue > diceCurrValue) {
          // loop through the value to add if the dice number goes up
          for (let i = diceCurrValue + 1; i <= diceNumberValue; i++) {
            // set the clone element
            const cloneDice = diceCloneDiv.cloneNode(true);

            // append the clone if you add a value
            diceImage.parentNode.appendChild(cloneDice);
          }
        } else if (diceNumberValue < diceCurrValue) {
          // remove clones when the input value is going down
          let diceValueTotal = diceCurrValue - diceNumberValue;

           // this is just to monitor your current value of the input
          for (let i = 0; i < diceValueTotal; i++) {
             // set the last clone element
            let lastChild = diceImage.parentNode.lastChild;
            // remove the last clone if value decreses
            diceImage.parentNode.removeChild(lastChild);
          }
        }
        // update the current value of input
        diceCurrValue = diceNumberValue;
    } else {
        alert('invalid dice number value')
    }
})

// you already did an amazing job Dale, this is just for learning purposes.


function generateNumber(){
    return Math.floor((Math.random() * (max-min) + min));
//  console.log(Math.floor((Math.random() * (max-min) + min)));
}


