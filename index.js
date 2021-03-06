const send = document.querySelector("#send")
const text = document.querySelector("#text")
const list = document.querySelector("#list")
const deleteAll = document.querySelector("#deleteAll")
const listContent = document.querySelectorAll(".listContent")

send.onclick = () => {
    if (text.value.length < 48 && text.value.length !== 0) {
        let span = document.createElement("span")
        let btn = document.createElement("BUTTON")
        let listText = document.createElement("h3")
        let img = document.createElement("img")
        let date = document.createElement("span")

        let today = new Date();
        let monthOfToday = today.getMonth() + 1;
        let dateOftext = today.getDate() + " " + monthOfToday + " " + today.getFullYear() + "- " +
            today.getHours() + ":" + today.getMinutes();
        if (today.getMinutes() < 10)
            dateOftext += today.getDate() + " " + monthOfToday + " " + today.getFullYear() + "- " +
                today.getHours() + ":0" + today.getMinutes();

        btn.className = "delete-btn"
        span.className = "listContent"
        img.src = "./deletebutton.svg"
        date.textContent = dateOftext
        date.className = "date"

        list.appendChild(span)
        span.appendChild(listText);
        span.appendChild(btn);
        span.appendChild(img);
        list.appendChild(date)

        listText.textContent += text.value
        text.value = ""

        btn.onclick = () => {
            list.removeChild(span)
            list.removeChild(date)
        }
    }
    else {
        alert("You wrote wrong text")
    }
}

deleteAll.onclick = () => {
    setTimeout(function () {
        while (list.firstChild) {
            list.removeChild(list.lastChild);
        }
    }, 300);
}
