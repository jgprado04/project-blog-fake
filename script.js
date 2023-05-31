// https://jsonplaceholder.typicode.com/posts

async function doRead() {
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

document.querySelector("#insertButton").addEventListener('click', () => {
    let titleField = document.querySelector("#titleField");
    let bodyField = document.querySelector("#bodyField");


    let title = document.querySelector("#titleField").value;
    let body = document.querySelector("#bodyField").value;

    if (title && body) {
        doInsire(title, body, titleField, bodyField);
    } else {
        alert("Insira um titulo e um texto no area certa!")
    }

})

async function doInsire(title, body, titleField, bodyField) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 2
        })
    });

    doRead()

    titleField.value = "";
    bodyField.value = "";


}



doRead()
