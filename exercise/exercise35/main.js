// exercise 35
const image = document.querySelector("#imageId");
console.log(image);
function changeImageStyle() {
  const imagepromt = prompt("Enter Image");
  image.setAttribute("src", imagepromt);
  const borderColor = prompt("enter border color");
  image.style.border = "5px solid " + borderColor;
  const width = prompt("enter width px");
  image.style.width = width + "px";
  const height = prompt("enter height px");
  image.style.height = height + "px";
  const radius = prompt("enter radius px");
  image.style.borderRadius=radius + "px";
}
