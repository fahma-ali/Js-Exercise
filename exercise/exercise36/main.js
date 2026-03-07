// exercise 36
const colorPreview = document.querySelector("#colorPreview")
const colorPicker = document.querySelector("#colorPicker")
const colorList = document.querySelector("#colorList")
const clearHistory = document.querySelector("#clearHistory")

colorPicker.addEventListener("change", colorChange)


// clearHistory.removeEventListener("click",clearColor)
clearHistory.addEventListener("click", clearColor)

function colorChange() {
  colorPreview.style.backgroundColor = colorPicker.value

  const li = document.createElement("li")
  li.textContent = colorPicker.value
  li.style.color = colorPicker.value
  li.style.listStyle = "none"

  colorList.appendChild(li)
}


function clearColor() {
  colorPreview.style.backgroundColor = "";
  colorList.innerHTML = ""
}