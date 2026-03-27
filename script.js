let workers = JSON.parse(localStorage.getItem("workers")) || []

function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.style.display="none"
})

document.getElementById(page).style.display="block"

}

showPage("home")

function addWorker(){

let name = document.getElementById("name").value
let skill = document.getElementById("skill").value
let phone = document.getElementById("phone").value
let photoInput = document.getElementById("photo")

let photoURL = ""

if(photoInput.files.length > 0){
photoURL = URL.createObjectURL(photoInput.files[0])
}

let worker = {name,skill,phone,photo:photoURL}

workers.push(worker)

localStorage.setItem("workers",JSON.stringify(workers))

displayWorkers()

alert("Worker Registered Successfully")

}

function displayWorkers(){

let list = document.getElementById("workerList")

list.innerHTML=""

workers.forEach(w=>{

let rating = Math.floor(Math.random()*5)+1

list.innerHTML += `
<div class="worker">

<img src="${w.photo}" width="80">

<h3>${w.name}</h3>

<p>Skill: ${w.skill}</p>

<p>Phone: ${w.phone}</p>

<p>Rating: ${rating} ⭐</p>

<a href="tel:${w.phone}">Call Worker</a>

<br><br>

<a href="https://www.google.com/maps/search/${w.skill} near me" target="_blank">
View Location
</a>

</div>
`

})

}

function searchWorker(){

let search = document.getElementById("search").value.toLowerCase()

let filtered = workers.filter(w =>
w.skill.toLowerCase().includes(search)
)

let list = document.getElementById("workerList")

list.innerHTML=""

filtered.forEach(w=>{

list.innerHTML += `
<div class="worker">

<h3>${w.name}</h3>

<p>Skill: ${w.skill}</p>

<p>Phone: ${w.phone}</p>

</div>
`

})

}

function postJob(){

let customer = document.getElementById("customer").value
let job = document.getElementById("jobdesc").value

let jobList = document.getElementById("jobList")

jobList.innerHTML += `<p><b>${customer}</b> needs: ${job}</p>`

}

displayWorkers()
