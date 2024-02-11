// 1
fetch("https://reqres.in/api/unknown")
.then((response) => {
// console.log(data);
return response.json()
})
.then((data) => {
    // console.log(data);
    renderNameColor(data)
})



let div = document.querySelector(".mydiv")

function renderNameColor (data){
    data.forEach(name => {
        let h2 = document.createElement("h2")
        let colorDiv = document.querySelector("div")

        h2.textContent = name.name
        colorDiv.style.backgroundColor = name.color

        div.appendChild(h2)
        div.appendChild(colorDiv)
    });
}




// 2
let http = new XMLHttpRequest()

http.open("get", "https://reqres.in/api/users?page=2")

http.send()

http.onload = function(resp){
let data = JSON.parse(resp.target.response)

usersFirstName(data)
}

let ul = document.querySelector(".myul")

function usersFirstName(data) {
    for(let i = 0; i < data.length; i++){
        let li = document.createElement("li")
        li.textContent = data[i].email

        ul.appendChild(li)
    }
}