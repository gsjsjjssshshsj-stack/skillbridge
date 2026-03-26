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
