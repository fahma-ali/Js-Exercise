const toggleButton=document.querySelector("#mode-toggle");
toggleButton.addEventListener("click",switchMmode);


function switchMmode(){
    document.body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        toggleButton.textContent = "toggle light mode";
        localStorage.setItem("mode","dark")
    }
    else{
        toggleButton.textContent ="toggle dark mode";
         localStorage.setItem("mode","light");
    }
}