const navbar = document.querySelector(".navbar");
const togglebutton = document.querySelector(".toggle-btn");
togglebutton.addEventListener("click",function(){
  navbar.classList.toggle("active");
})

