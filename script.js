let balance = 1000;

function toggleMenu(){

let menu = document.getElementById("menu");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}

function add(){

let money = document.getElementById("money").value;

balance += Number(money);

document.getElementById("balance").innerText = "₹"+balance;

}

function withdraw(){

let money = document.getElementById("money").value;

balance -= Number(money);

document.getElementById("balance").innerText = "₹"+balance;

}

function voice(){

alert("Voice job search coming soon");

}

let lang = "en";

function changeLang(){

if(lang === "en"){

document.getElementById("welcome").innerText="स्वागत है";

lang = "hi";

}else{

document.getElementById("welcome").innerText="Welcome";

lang = "en";

}

}
