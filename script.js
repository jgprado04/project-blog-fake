// https://jsonplaceholder.typicode.com/posts

async function doInsire() {
    let textArea = document.querySelector(".posts");
    textArea.innerHTML = "Carregando..."

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json()

    if (json.length > 0) {
        textArea.innerHTML = "";

        for (let i in json) {
            textArea.innerHTML += `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`
        }
    }

}

doInsire()