  const element = document.createElement("h1")
element.innerHTML = "This appended"
const newElm = document.getElementById("id")
newElm.appendChild(element)