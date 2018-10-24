var randomNum = 0;

var hiddenNum1 = 0;
var hiddenNum2 = 0;
var hiddenNum3 = 0;
var hiddenNum4 = 0;

var winCounter = 0;
var lossCounter = 0;

var totalScore = 0;

function startGame() {
    randomNum = Math.floor((Math.random() * 120) + 19);
    console.log(randomNum);

    var hiddenNum1 = Math.floor((Math.random() * 12) + 1);
    console.log(hiddenNum1);
    var hiddenNum2 = Math.floor((Math.random() * 12) + 1);
    console.log(hiddenNum2);
    var hiddenNum3 = Math.floor((Math.random() * 12) + 1);
    console.log(hiddenNum3);    
    var hiddenNum4 = Math.floor((Math.random() * 12) + 1);
    console.log(hiddenNum4);
    
    document.getElementById("total-score").innerHTML = totalScore;

    document.getElementById("random-number").innerHTML = randomNum;


}


