let currentSlide = 0

let slides = document.querySelectorAll(".page")

function showSlide(index){

slides.forEach(slide => slide.classList.remove("active"))

slides[index].classList.add("active")

}

function nextSlide(){

currentSlide++

if(currentSlide >= slides.length){
currentSlide = 0
}

showSlide(currentSlide)

}

function prevSlide(){

currentSlide--

if(currentSlide < 0){
currentSlide = slides.length - 1
}

showSlide(currentSlide)

}

showSlide(currentSlide)
let workers = JSON.parse(localStorage.getItem("workers")) || []

function addWorker(){

let name = document.getElementById("name").value
let skill = document.getElementById("skill").value
let phone = document.getElementById("phone").value

let worker = {name,skill,phone}

workers.push(worker)

localStorage.setItem("workers",JSON.stringify(workers))

displayWorkers()

}

function displayWorkers(){

let list = document.getElementById("workerList")

list.innerHTML=""

workers.forEach(worker => {

list.innerHTML += `
<div class="worker">
<h3>${worker.name}</h3>
<p>Skill: ${worker.skill}</p>
<p>Phone: ${worker.phone}</p>
<a href="tel:${worker.phone}">Call</a>
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

filtered.forEach(worker => {

list.innerHTML += `
<div class="worker">
<h3>${worker.name}</h3>
<p>Skill: ${worker.skill}</p>
<p>Phone: ${worker.phone}</p>
</div>
`

})

}

let jobs = []

function postJob(){

let customer = document.getElementById("customer").value
let job = document.getElementById("job").value

jobs.push({customer,job})

let jobList = document.getElementById("jobList")

jobList.innerHTML += `
<p><b>${customer}</b> needs: ${job}</p>
`

}

displayWorkers()
