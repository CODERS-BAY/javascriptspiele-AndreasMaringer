console.log('Game Schere Stein Papier');
var symbolComputer;
var symbolSpieler;
var anzahlRunden = 0;
var gewinneComputer = 0;
var gewinneSpieler = 0;
var gewinnBedingung = 3;
let counter;
let container = document.getElementById('container');
let computer = document.getElementById('computer');
let cut = document.getElementById('cut');
let stone = document.getElementById('stone');
let paper = document.getElementById('paper');
let againButton = document.getElementById('againButton');


function saveCounter(){
    counter = document.getElementById('counter').value;
    console.log(counter +'=counter');
    let inputfield = document.getElementById('inputfield');
    inputfield.style.display = "none"; 
    container.style.visibility = "visible";
    
}
    



function play(choicePlayer) {          //0 = cut 1 = stone 2 = paper
    let random = Math.random() * 3;
    random = Math.floor(random);        // generelles Abrunden
    console.log(random);
    let result = document.getElementById('gameResult'); /// id immer mit string mitgeben
    result.style.visibility = 'visible';

    if(choicePlayer == 0) {
        if(random == 0) {
            gewinneSpieler = gewinneSpieler +1;
            gewinneComputer = gewinneComputer +1;
        } else if(random == 1) {
            gewinneComputer = gewinneComputer +1;
        } else {
            gewinneSpieler = gewinneSpieler +1;
        } 
        
    }
    if(choicePlayer == 1) {
        if(random == 0) {
            gewinneSpieler = gewinneSpieler +1;
        }else if(random == 1) {
            gewinneSpieler = gewinneSpieler +1;
            gewinneComputer = gewinneComputer +1;
        }else {
            gewinneComputer = gewinneComputer +1;
        }
    }
    if(choicePlayer == 2) {
        if(random == 0) {
            gewinneComputer = gewinneComputer + 1;
        }else if(random == 1) {
            gewinneSpieler = gewinneSpieler +1;
        }else {
            gewinneSpieler = gewinneSpieler +1;
            gewinneComputer = gewinneComputer +1;
        }
    }
    cut.style.visibility = 'hidden';
    stone.style.visibility = 'hidden';
    paper.style.visibility = 'hidden';

    //Computerergebnis:

   if(random == 0) {
       cut.style.visibility = 'visible';
   }else if(random == 1){
       stone.style.visibility = 'visible';
   }else {
           paper.style.visibility ='visible';
       }       
   
    // aktueller Spielstand
    let spielstandC = document.getElementById('spielstandC');
    let spielstandP = document.getElementById('spielstandP');
    spielstandC.innerHTML ='COMPUTER: ' + gewinneComputer;
    spielstandP.innerHTML ='PLAYER:   ' + gewinneSpieler; 
    // Rundenzähler
    anzahlRunden = anzahlRunden + 1;                            
    let endResult = document.getElementById('endResult');
    
    
    if (gewinneComputer == counter || gewinneSpieler == counter) {
        cut.style.visibility = 'hidden';
        stone.style.visibility = 'hidden';
        paper.style.visibility = 'hidden';
        container.style.visibility = "hidden";
        
    }
    
    // spielergebnis/result
    if(gewinneComputer == counter || gewinneSpieler == counter ) {
        let computer = document.getElementById('computer');
        computer.style.visibility = 'hidden';
        endResult.style.visibility = 'visible';
        againButton.style.visibility ='visible';

    }
    let spielergebnis = document.getElementById('spielergebnis');
    if(gewinneComputer== counter && gewinneSpieler < counter ) {
        spielergebnis.innerHTML = 'Leider verloren!';
    } else if(gewinneSpieler == counter && gewinneComputer < counter) {
        spielergebnis.innerHTML = 'Gewonnen!';
    } else if(gewinneComputer == counter && gewinneSpieler == counter) {
        spielergebnis.innerHTML = 'Unentschieden!';
    }
    
}
function again() {
    location.reload();
}
