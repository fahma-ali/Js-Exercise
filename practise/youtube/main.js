document
  .querySelector("#search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = document.querySelector("#search-input").value;


    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query='${query}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4701cca41dmsh1e9d707573eec3bp18c3bcjsn4189c877789d",
        "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      displayvideo(result.data);
    } catch (error) {
      console.error("Error fetching search:", error.message);
    }
  });
function displayvideo(videos) {
  const videoList = document.querySelector("#video-list");
  videoList.innerHTML = "";
  videos.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.innerHTML = `
    <div class="video-thumbnail" style="background-image:url('${video.thumbnail[0].url}')"></div>
    <div class="video-info>
    <div class="video-title">${video.title}</div>
    <div class="video-channel">${video.channelTitle}</div>
    </div>
    `;
    videoList.appendChild(videoItem);
    videoItem.addEventListener("click", () => openModel(video.videoId));
  });
}
function openModel(videoId) {
  const model = document.querySelector("#video-model");
  const videoPlayer = document.querySelector("#video-player");
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  videoPlayer.src = videoUrl;
  model.style.display = "block";
  document
    .querySelector("#download-mp3")
    .addEventListener("click", async function () {
      const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
      console.log(url);
      const options = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "x-rapidapi-key": "4701cca41dmsh1e9d707573eec3bp18c3bcjsn4189c877789d",
          "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
        },

      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.status === 'ok'){
          window.location.href=result.link
        } else{
          alert("Error Dowloaded mp3:"+result.msg)
        }
       
      } catch (error) {
        console.error("Error fetching search:", error.message);
      }
    });
}
document.querySelector(".close-model").addEventListener('click',closeModel)
function closeModel(){
  const model = document.querySelector("#video-model");
  const videoPlayer=document.querySelector("#video-player")
  videoPlayer.src=""
  model.style.display='none'
}
window.onclick=function(event){
    const model = document.querySelector("#video-model");
if(event.target == model)
  closeModel();
  console.log("model",event.target)
}