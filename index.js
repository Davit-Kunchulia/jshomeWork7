// 1
fetch("https://reqres.in/api/unknown")

    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderNameColor(data)
    })



let div = document.querySelector(".mydiv")

function renderNameColor(data) {
    data.data.forEach(name => {
        let h2 = document.createElement("h2")

        h2.textContent = `${name.name} : ${name.color}` ;

        
    
        div.appendChild(h2)

    });
}




// 2
let http = new XMLHttpRequest()

http.open("get", "https://reqres.in/api/users?page=2")

http.send()

http.onload = function (resp) {
    let data = JSON.parse(resp.target.response)

    usersFirstName(data)
}

let ul = document.querySelector(".myul")

function usersFirstName(data) {
    data.data.forEach( (elm, i) => {
        let li = document.createElement("li");


        li.textContent = `${data.data[i].first_name} ${data.data[i].last_name}` 



        ul.appendChild(li);
    });
}