const imgSources = ["./assets/rock_small.png", "./assets/paper_small.png", "./assets/scissors_small.png"];
const winConditions = [[1, 3], [2, 1], [3, 2]].map(x => x.toString());

var wins = draws = losses = 0;

function playHand(playerHand) {
    /*
        ROCK     = 1
        PAPER    = 2
        SCISSORS = 3
    */

    var cpuHand = Math.floor(Math.random() * 3) + 1;

    document.getElementById("player-img").src = imgSources[playerHand - 1];
    document.getElementById("cpu-img").src = imgSources[cpuHand - 1];

    if (playerHand == cpuHand) {
        document.getElementById("draws").innerHTML = "Draws: " + ++draws;

        document.getElementById("player").style.borderColor = "white";
        document.getElementById("cpu").style.borderColor = "white";
    }
    else if (winConditions.includes([playerHand, cpuHand].toString())) {
        document.getElementById("wins").innerHTML = "Wins: " + ++wins;

        document.getElementById("player").style.borderColor = "green";
        document.getElementById("cpu").style.borderColor = "red";
    }
    else {
        document.getElementById("losses").innerHTML = "Losses: " + ++losses;

        document.getElementById("player").style.borderColor = "red";
        document.getElementById("cpu").style.borderColor = "green";
    }
}

function reset() {
    wins = draws = losses = 0;

    document.getElementById("wins").innerHTML = "Wins: 0";
    document.getElementById("draws").innerHTML = "Draws: 0";
    document.getElementById("losses").innerHTML = "Losses: 0";

    document.getElementById("player-img").src = "";
    document.getElementById("cpu-img").src = "";

    document.getElementById("player").style.borderColor = "white";
    document.getElementById("cpu").style.borderColor = "white";
}
