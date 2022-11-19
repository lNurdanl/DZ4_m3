const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "me.json")
    request.setRequestHeader('Content-type', "application/json")
    request.send();
    request.addEventListener('load', () => {
        console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response)
        document.querySelector(".name1").innerHTML = data.name1
        document.querySelector(".surname").innerHTML = data.surname
        document.querySelector(".age").innerHTML = data.age
        document.querySelector(".hobby").innerHTML = data.hobby
        document.querySelector(".school").innerHTML = data.school
    })
});
