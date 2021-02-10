const send = document.querySelector("#send")
const text = document.querySelector("#text")
const list = document.querySelector("#list")
const deleteAll = document.querySelector("#deleteAll")
const listContent = document.querySelectorAll(".listContent")

send.onclick = () => {
    let span = document.createElement("span")
    let btn = document.createElement("BUTTON")
    let listText = document.createElement("h3")
    var img = document.createElement("img")
    btn.className = "delete-btn"
    span.className = "listContent"
    btn.onclick = () => {
        list.removeChild(span)
    }
    img.src = "./deletebutton.svg"
    btn.style.hover
    list.appendChild(span)
    span.appendChild(listText);
    span.appendChild(btn);
    span.appendChild(img);

    listText.textContent += text.value
    text.value = ""
}
deleteAll.onclick = () => {
    setTimeout(function () {
        while (list.firstChild) {
            list.removeChild(list.lastChild);
        }
    }, 500);
}