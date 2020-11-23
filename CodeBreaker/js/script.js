console.log('CodeBreaker!');


let codeInput;
let number1;
let number2;
let number3;
let code = 456;
let code1;
let code2;
let code3;
let counter = 1;
let counterMax = 12;
let guessRightPosition = 0;
let resultLine = document.getElementById('resultLine');
function rounds(){
    counter = document.getElementById('counterInput').value;
}
function generateCode(){
    code = Math.random() * (999 - 111) + 111;
    console.log(code);
    code = Math.round(code);
    console.log(code);
    code = String(code);
    code1 = code.charAt(0);
    console.log(code1 + " code1");
    code2 = code.charAt(1);
    console.log(code2 + " code2");
    code3 = code.charAt(2);
    console.log(code3 + " code3");

}
generateCode();
function inputNumber(){
    rounds();
    
  if(counter <= counterMax) {
    codeInput = document.getElementById("codeInput").value;
    console.log(codeInput + ("=codeInput"))
    number1 = codeInput.charAt(0);
    console.log(number1 + " Zahl an der 1.Stelle");
    number2 = codeInput.charAt(1);
    console.log(number2 + " Zahl an der 2.Stelle");
    number3 = codeInput.charAt(2);
    console.log(number3 + " Zahl an der 3.Stelle");
    if(number1 == code1){
        guessRightPosition = guessRightPosition +1;
        console.log("1.Stelle erraten");
    }
    if(number2 == code2){
        guessRightPosition = guessRightPosition + 1;
        console.log("2.Stele erraten");
    }
    if(number3 == code3){
        guessRightPosition = guessRightPosition + 1;
        console.log("3.Stelle erraten");
    }
    let resultP = document.createElement('p');
    resultP.append("Erratene Stellen: " + guessRightPosition);
    resultLine.append(resultP);
    
    if(number1 == code1 && number2 == code2 && number3 == code3){
        console.log("CODE GEBREAKT!!! Gewonnen!!!");
        resultLine.remove(resultP);
        let win = document.getElementById('win');
        win.style.display = 'block';
    }
    let guessNumber = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++) {
            if(codeInput.charAt(j) == code.charAt(i)){
                console.log(codeInput.charAt(j) + " ist gleich " + code.charAt(i));
                // if(j < 2 && codeInput.charAT(j) == codeInput.charAt(j+1)){}
                guessNumber = guessNumber + 1;

            } else {
                console.log(code.charAt(i) + " ungleich " + codeInput.charAt(j))
            }
            
        }
    }
    console.log(guessNumber + (" = guessNumber"));

  } else {
      let gameOver = document.createElement('div');
      gameOver.append("Game over")
      console.log("GAME OVER");
  }

}

function playAgain(){
    location.reload();
}