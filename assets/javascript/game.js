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
    
    // $("#crystalClick1").attr("data-number", hiddenNum1);
    document.getElementById("crystalClick1").setAttribute("data-number", hiddenNum1)
    document.getElementById("crystalClick2").setAttribute("data-number", hiddenNum2)
    document.getElementById("crystalClick3").setAttribute("data-number", hiddenNum3)
    document.getElementById("crystalClick4").setAttribute("data-number", hiddenNum4)
    
    document.getElementById("total-score").innerHTML = totalScore = 0;

    document.getElementById("random-number").innerHTML = randomNum;

    // checkScore();


};

startGame();


function checkScore() {

    if (totalScore === randomNum) {
        winCounter++;
        startGame();
        console.log(winCounter);
        $("#win-counter").html(winCounter);

    }
    else if (totalScore > randomNum) {
        lossCounter++;
        startGame();
        console.log(lossCounter);
        $("#loss-counter").html(lossCounter);
    }
    

}


$(".clickEvent").on("click", function(){

    var num = $(this).attr("data-number")

    var numba = parseInt(num);
    
    console.log('numba', typeof(numba));
    console.log('ts', typeof(totalScore));


    console.log('totalScoreBEFORE', totalScore);
    totalScore += numba;

    console.log('totalScoreAFTER', totalScore);
    
    
    document.getElementById("total-score").innerHTML = totalScore;

    checkScore();


})

