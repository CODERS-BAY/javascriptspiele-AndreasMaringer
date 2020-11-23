console.log('Hallo HandyWeitWurf!!!');



var entfernungZumMonster;                                   // Var anlegen
entfernungZumMonster = Math.random() * 90 + 10;             // enfernungZumMonsterberechnen, Math.random()ergibt eine Zahl zwischen 0 und 1, mal 90 + 10
entfernungZumMonster = Math.round(entfernungZumMonster);    // Zusfallszahl runden um besser treffen zu können
                                                            //console.log(entfernungZumMonster);
alert('The MONSTER is ' + entfernungZumMonster + ' Meter away!');
let counter = 3; 

function speed() {
    let v0 = document.getElementById('speedinput').value;
    v0 = parseInt(v0);
    return v0;
}
function winkel() {
    let derWinkel = document.getElementById('angleinput').value;
    derWinkel = parseInt(derWinkel);
    derWinkel = derWinkel * (Math.PI/180);                        //Bogenmass aus Grad berechnen und derWinkel neu überschreiben.
    return derWinkel;
}
function shot() {
    
    if(counter > 0 && counter <4) { 
        var g = document.getElementById('planet').value;            // Selection planet 
        g = parseFloat(g);                                          // Input g in einen FLOAT umwandel um damit rechnen zu können
                                            
        let v0 = speed();
        let derWinkel = winkel();                                                               
        let wurfweite = parseFloat(((v0 * v0) * Math.sin(2 * derWinkel)) / g);
        wurfweite = Math.round(wurfweite);
        
        
        counter = counter -1;                                                               //console.log(wurfweite);
        alert('Your shot is' + wurfweite + '!!!');
        if(wurfweite == entfernungZumMonster) {                      // TREFFEN
        alert('You TARGET the MONSTER');
    }
    else {
        alert('You NOT target the MONSTER');
    }
    } else {
        alert('GAME OVER');
    }




    
    
}

 