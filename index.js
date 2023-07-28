let num1 = 0
let num2 = 0
document.getElementById("home-el").textContent = num1
document.getElementById("guest-el").textContent = num2
let homeEL = document.getElementById("home-el")
let countHome = 0

let guestEL = document.getElementById("guest-el")
let countGeust = 0

function add1(){
    countHome +=1
    homeEL.textContent = countHome
}

function add2(){
    countHome +=2
    homeEL.textContent = countHome
}

function add3(){
    countHome +=3
    homeEL.textContent = countHome
}


function add2_1(){
    countGeust +=1
    guestEL.textContent = countGeust
}

function add2_2(){
    countGeust +=2
    guestEL.textContent = countGeust
}

function add2_3(){
    countGeust +=3
    guestEL.textContent = countGeust
}

let resultEl = document.getElementById("result-el")

function getWinner(){
if (homeEL.textContent === guestEL.textContent){
    resultEl.innerHTML = 'Draw'
}
else if (homeEL.textContent > guestEL.textContent){
    resultEl.innerHTML = 'Home is winning'
}
else if(homeEL.textContent < guestEL.textContent){
    resultEl.innerHTML = 'Guest is winning'
}
}

function startAgain() {

    homeEL.textContent = 0
    countHome = 0  
    
    guestEL.textContent = 0
    countGeust = 0
}