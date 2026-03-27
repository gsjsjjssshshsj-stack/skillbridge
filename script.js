let balance = 2000;

function addMoney(){

let amount = document.getElementById("amount").value;

balance = balance + Number(amount);

document.getElementById("balance").innerText = "₹" + balance;

}

function withdrawMoney(){

let amount = document.getElementById("amount").value;

balance = balance - Number(amount);

document.getElementById("balance").innerText = "₹" + balance;

}

function applyJob(){

alert("Job Application Sent!");

}
