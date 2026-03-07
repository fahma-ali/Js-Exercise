
// exercise 34
const list = document.querySelector(".list")
function addElement(){
const newitem= document.createElement("li")
newitem.textContent="list item"
list.appendChild(newitem);
}
function removeElement(){
    if(!list.lastChild){
        alert("there is no list to remove")
    }
    else{
list.removeChild(list.lastChild)

    }
}
