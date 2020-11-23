console.log('ZahlenRaten');
let anzahlDerVersuche = 0;
let zuerrateneZahl = 0;
let oberGrenze = 0;
let startscreen = document.getElementById('startscreen');
let numberscreen = document.getElementById('numberscreen');
let ratenButton = document.getElementById('raten');
let playButton = document.getElementById('play');
let againButton = document.getElementById('again');

function saveCounter() {
    if(anzahlDerVersuche > 0) {
    console.log("saveCounterAnzVers: " + anzahlDerVersuche);
    
    } else {
        againButton.style.display = 'block';
        ratenButton.style.display = 'none';   
        
        // Game over einblenden
        let lastsceen = document.getElementById('lastscreen');
        lastsceen.style.display = 'block';
    }
}

    
function play() {
    //OberGrenze: 
    oberGrenze = document.getElementById('oberGrenze').value;
    console.log("oberGrenze: " + oberGrenze);
    //Anzahl der Versuche 
    anzahlDerVersuche = document.getElementById('anzahlDerVersuche').value;
    console.log('Anzahl Versuche: ' + anzahlDerVersuche);
    // zu erratene Zahl:
    zuerrateneZahl = Math.random() * oberGrenze;
    zuerrateneZahl = Math.round(zuerrateneZahl);
    console.log("zu erratente Zahle: " + zuerrateneZahl);
    // Counterfeld
    saveCounter();
    //let startscreen = document.getElementById('startscreen');
        startscreen.style.display = 'none';
    //let numberscreen = document.getElementById('numberscreen');
        numberscreen.style.display = 'block';
    //let playButton = document.getElementById('raten');
        playButton.style.display = 'none';
        ratenButton.style.display = 'block';


}
function rateZahl() {
        
        //let playButton = document.getElementById('play');
        playButton.style.display = 'none';
        againButton.style.display = 'none';
        if(anzahlDerVersuche > 0) {
                 
                let gerateneZahl = document.getElementById('gerateneZahl').value;
                console.log('Meine Zahl: ' + gerateneZahl);
                
                // Ergebnis einblenden:
                let secondscreen = document.getElementById('secondscreen');
                secondscreen.style.display = 'block';
                
                if(gerateneZahl > zuerrateneZahl) {
                    let resultP = document.createElement('p');
                    resultP.append('Deine Zahl ' + gerateneZahl + ' ist zu groß!');
                    let result = document.getElementById('secondscreen');
                    result.append(resultP);
                    
                } else if(gerateneZahl < zuerrateneZahl) {
                        let resultP = document.createElement('p');
                        resultP.append('Deine Zahl ' + gerateneZahl + ' ist zu klein!');
                        let result = document.getElementById('secondscreen');
                        result.append(resultP);
                        
                } else {
                    let resultP = document.createElement('p');
                    resultP.append('Deine Zahl ' + gerateneZahl + ' ist richtig!');
                    let result = document.getElementById('secondscreen');
                    result.append(resultP);
                    
                }
                anzahlDerVersuche = anzahlDerVersuche -1 ; // Zähler der Versuche wird reduziert
                console.log(' Neue Anzahl der Versuche: ' + anzahlDerVersuche);   
        }
        saveCounter();
        //let numberscreen = document.getElementById('numberscreen');
        //numberscreen.style.display = 'none';

    }
    

function playAgain() {
    location.reload();
}