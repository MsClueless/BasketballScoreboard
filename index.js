let scoreOneEl = document.getElementById("scoreOne");
let scoreTwoEl = document.getElementById("scoreTwo");
let countHome = 0;
let countGuest = 0;




function addOneHome() {
    countHome +=1;
    scoreOneEl.textContent = countHome;
}

function addTwoHome() {
    countHome += 2;
    scoreOneEl.textContent = countHome;
}

function addThreeHome() {
    countHome += 3;
    scoreOneEl.textContent = countHome;
}

function addOneGuest() {
    countGuest +=1;
    scoreTwoEl.textContent = countGuest;
}

function addTwoGuest() {
    countGuest += 2;
    scoreTwoEl.textContent = countGuest;
}

function addThreeGuest() {
    countGuest += 3;
    scoreTwoEl.textContent = countGuest;
}
