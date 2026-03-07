// const header =document.getElementById("header");
// console.log(header)
// const text =document.getElementsByClassName("text")[0];
// console.log(text)
// const btn =document.getElementsByTagName("button")[0];
// console.log(btn)
// const header =document.querySelectorAll("p");
// console.log(header)
// const text =document.querySelector(".text");
// console.log(text);
function changeElement() {
    text.textContent = "paragraph3";
}
function changeContent() {
    text.innerHTML = `<h2>test</h2>`
}

// create new element
// const list =document.querySelector(".list")
// console.log(list);
// function addElement(){
//  const newItem =document.createElement("li")
//  newItem.textContent="New Item";
//  console.log(newItem)
//  list.appendChild(newItem)
// }
// function removeElement()
// {
//     if(!list.lastChild){
//         alert("there is no lis1");
//     }
//     else{
//          list.removeChild(list.lastChild)
//         }

// }
// change element attribute
// function attributeImage(){
// const attrImage =document.querySelector('#images')
// const url =prompt("enter new image")
// attrImage.setAttribute('src',url)
// }
// style attribute
// function changeContentStyle(){
//  const header=document.querySelector("#header");
//  const text =document.querySelector("p");
//  header.style.color="blue"
//  text.style.color="gray"
//  text.style.backgroundColor="skyblue"
//  text.style.padding="6px"
//  text.style.margin="10px"
//  text.style.fontSize="30px"
// }
// dark mode and light mode
// function setDarkMode(){
//     document.body.style.backgroundColor="black";
//     document.body.style.color="white"
// }
// function setLightMode(){
//     document.body.style.backgroundColor="white"
//     document.body.style.color="black"
// }

// basic events addevent
// const button =document.querySelector("#myButton");
// function addClick(){
//     console.log("button clicked")
//  }
// button.addEventListener('click',addClick)
// remove event
// const buttonRemove =document.querySelector("#removeButton");

//  buttonRemove.addEventListener("click",function(){
//     button.removeEventListener("click",addClick);
//     console.log("removed event click")
//  })
// change event
// const color =document.querySelector("#color");
// const selectedColor =document.querySelector("#selectedColor");
// const userName =document.querySelector("#userName");
// const currentUserName =document.querySelector("#currentUserName");
// color.addEventListener("change",function(){
//     console.log("changed",color.value)
//     selectedColor.textContent =`Color Selected : ${color.value}`
// })
// userName.addEventListener("change",function(){
//     currentUserName.textContent =`Current UserName is :${userName.value}`
// })
// prevent preventDefault
// const message = document.querySelector("#message");
// const form =document.querySelector("#form")
// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     message.textContent ='prevented default...'
// })

// form validation


const errorMessage = document.querySelector("#errorMessage");
document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;

    if (userName === "") {
        errorMessage.textContent = "UserName is required"
        return
    }
    else if (email === "") {
        errorMessage.textContent = "Email is required";
        return

    }
    else if(password === ""){
        errorMessage.textContent = "password is required";
        return
    }
   
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPattern)){
        errorMessage.textContent="Email is not valid"
    }
    if(password !==confirmpassword){
        errorMessage.textContent="password did not match"
        return
    }
    if(!userName.length<10){
        errorMessage.textContent ="password must be at least 8 characters"
        return
    }
            errorMessage.textContent = "Register Successfully"

})


