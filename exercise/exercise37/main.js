const blogForm = document.querySelector(".blog-form");
const postTitle = document.querySelector(".post-title");
const postBody = document.querySelector(".post-body");
const imageInput = document.querySelector(".image");
const postResult = document.querySelector(".post-result");

blogForm.addEventListener("submit", addPost);
document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
  const posts = getDataFromLocalStorage();
  posts.forEach((post) => {
    displayDomData(post);
  });
}

function addPost(e) {
  e.preventDefault();

  const title = postTitle.value.trim();
  const body = postBody.value.trim();
  const imageUrl = imageInput.value.trim();

  if (title !== "" && body !== "") {
    const postContent = {
      id: Date.now(),
      postTitle: title,
      postBody: body,
      imageUrl: imageUrl,
    };

    saveDataToLocalStorage(postContent);
    blogForm.reset();
    loadPosts();
  }
}

function displayDomData(postContent) {
  const card = document.createElement("div");
  card.className = "post-card";
  card.dataset.id = postContent.id;

  card.innerHTML = `
    <h3 class="post-title-display">${postContent.postTitle}</h3>
    ${postContent.imageUrl ? `<img src="${postContent.imageUrl}" alt="post image">` : ""}
    <p class="post-body-display">${postContent.postBody}</p>
    <button class="btn-edit">Edit</button>
    <button class="btn-delete">Delete</button>
  `;

  postResult.appendChild(card);
  attachEventListeners(card, postContent.id);
}

function attachEventListeners(card, postId) {
  const editBtn = card.querySelector(".btn-edit");
  const deleteBtn = card.querySelector(".btn-delete");

  editBtn.addEventListener("click", function () {
    handleEdit(postId, card);
  });

  deleteBtn.addEventListener("click", function () {
    handleDelete(postId, card);
  });
}

function handleEdit(postId, card) {
  const posts = getDataFromLocalStorage();
  const post = posts.find((item) => item.id === postId);

  if (!post) return;

  const newTitle = prompt("Edit post title:", post.postTitle);
  if (newTitle === null || newTitle.trim() === "") return;

  const newImageUrl = prompt("Edit image URL:", post.imageUrl || "");
  if (newImageUrl === null) return;

  const newBody = prompt("Edit post body:", post.postBody);
  if (newBody === null || newBody.trim() === "") return;

  updatePost(postId, newTitle.trim(), newBody.trim(), newImageUrl.trim());

  card.querySelector(".post-title-display").textContent = newTitle.trim();
  card.querySelector(".post-body-display").textContent = newBody.trim();

  const oldImg = card.querySelector("img");

  if (newImageUrl.trim() !== "") {
    if (oldImg) {
      oldImg.src = newImageUrl.trim();
    } else {
      const img = document.createElement("img");
      img.src = newImageUrl.trim();
      img.alt = "post image";
      card.insertBefore(img, card.querySelector(".post-body-display"));
    }
  } else {
    if (oldImg) {
      oldImg.remove();
    }
  }
}

function handleDelete(postId, card) {
  deletePost(postId);
  card.remove();
}

function deletePost(postId) {
  let posts = getDataFromLocalStorage();
  posts = posts.filter((post) => post.id !== postId);
  localStorage.setItem("posts", JSON.stringify(posts));
}

function updatePost(postId, newTitle, newBody, newImageUrl) {
  const posts = getDataFromLocalStorage();

  const updatedPosts = posts.map((post) => {
    if (post.id === postId) {
      return {
        ...post,
        postTitle: newTitle,
        postBody: newBody,
        imageUrl: newImageUrl,
      };
    }
    return post;
  });

  localStorage.setItem("posts", JSON.stringify(updatedPosts));
}

function getDataFromLocalStorage() {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}

function saveDataToLocalStorage(postContent) {
  const oldPosts = getDataFromLocalStorage();
  oldPosts.push(postContent);
  localStorage.setItem("posts", JSON.stringify(oldPosts));
}