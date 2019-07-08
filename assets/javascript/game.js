$(document).ready(function(){
var randomNumber = Math.floor(Math.random()*102+9);
console.log(randomNumber);
$("#TheNumber").html(randomNumber);
var num1 = Math.floor(Math.random()*10+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);
console.log(num3);

var playerTotal= 0; 
var wins= 0;
var losses = 0;



$("#wins").html(wins);
$("#losses").html(losses);

function reset() {
    randomNumber = Math.floor(Math.random() * 102+9);
    $("#TheNumber").html(randomNumber);
    num1 = Math.floor(Math.random()*10+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
    playerTotal = 0;
    $("#myScore").html(playerTotal);

}
function lost(){
    alert ("You Looser, try again");
    losses++;
    $('#losses').text(losses);
    reset();
};

function wons(){
    alert ("You cheated, but won. Try again");
    wins++;
    $("#wins").html(wins);
    reset();

}

$("#red").on("click", function(){
    playerTotal = playerTotal+num1;
    $("#myScore").html(playerTotal)
    if (playerTotal > randomNumber) {
        lost();}
         if (playerTotal == randomNumber) {
        wons()
         }})
    $("#blue").on("click", function(){
        playerTotal = playerTotal+num2;
        $("#myScore").html(playerTotal)
        if (playerTotal > randomNumber) {
            lost();
        } else if (playerTotal == randomNumber) {
            wons()
        }});
        $("#green").on("click", function(){
            playerTotal = playerTotal+num3;
            $("#myScore").html(playerTotal)
            if (playerTotal > randomNumber) {
                lost()};
            if (playerTotal == randomNumber) {
                wons()
            }});
            $("#yellow").on("click", function(){
                playerTotal = playerTotal+num4;
                $("#myScore").html(playerTotal)
                if (playerTotal > randomNumber) {
                    lost();
                } else if (playerTotal == randomNumber) {
                    wons()
                }});
    

    
})
