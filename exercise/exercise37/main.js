const blogForm =document.querySelector(".blog-form");
const postTitle=document.querySelector(".post-title");
const postBody =document.querySelector(".post-body");
const imageInput =document.querySelector(".image");
const postBodyBisplay=document.querySelector(".post-body-display")
const postTitleBisplay =document.querySelector(".post-title-display")
const postResult = document.querySelector(".post-result")
blogForm.addEventListener("submit",addPost)
document.addEventListener("DOMContentLoaded", loadposts)

function addPost(e){
    e.preventDefault();
    const title =postTitle.value.trim();
    const postbody =postBody.value.trim();
    const imageUrl = imageInput.value.trim();

    if( title !== '' && postBody !== ''){
       const postContent={
        id:Date.now(),
        postTitle:title,
        postBody:postbody,
        imageInput:imageUrl,

      }
      displayDomData(postContent);
      saveDataTolocalStorage(postContent);
      postTitle.value ="";
      postBody.value="";
      imageInput.value ="";

    }

}
function displayDomData(postContent){
          postResult.innerHTML += `<div class="post-card" data-id="${postContent.id}">
          <h3 class="post-title-display">${postContent.postTitle}</h3>
          ${postContent.imageInput ? `<img src="${postContent.imageInput}" alt="post image">` :""}
          <p class="post-body-display">${postContent.postBody}</p>
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>`
  
}
function loadposts(){
  const posts = getDataFromLocalStorage();
  posts.forEach(post => {
    displayDomData(post);
    
  });
}
function getDataFromLocalStorage(){
  const posts =localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}
function saveDataTolocalStorage(postContent){
  const oldpost =getDataFromLocalStorage(postContent);
  oldpost.push(postContent)
  localStorage.setItem("posts",JSON.stringify(oldpost));
}