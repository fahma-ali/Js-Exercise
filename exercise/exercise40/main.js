// Create audio element

// Select DOM elements
const videoElement = document.getElementById("video");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");
const videos = [
    {
    title: "City Drive",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
  {
    title: "Big Buck Bunny",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Bear Video",
    src: "https://www.w3schools.com/html/movie.mp4",
  },

  {
    title: "Nature Walk",
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  },
];

let videoIdex = 0;
let isPlaying = false;
let speed = 1;

function loadVideo(video) {
  title.textContent = video.title;
  videoElement.src = video.src;

}
loadVideo(videos[videoIdex]);

function playVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  videoElement.play();
  isPlaying = true;
}
function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  //its function from <audio play,pause src=""></audio>
  videoElement.pause();
  isPlaying = false;
}
function nextVideo() {
    setTimeout(() => {
        pauseVideo();
        videoIdex++;

        if (videoIdex > videos.length - 1) {
            videoIdex = 0;
        }
        loadVideo(videos[videoIdex]);
        playVideo();

    }, 300)


}
function prevVideo() {
    setTimeout(() => {
        pauseVideo();
        videoIdex--;

        if (videoIdex < 0) {
            videoIdex = videos.length -1;
        }
        loadVideo(videos[videoIdex]);
        playVideo();

    }, 300)


}
function updateProgress(e){
   
        const {duration,currentTime}=e.srcElement
        if(isNaN(duration)) return
        const progressPercentage=(currentTime/duration)*100;
        progress.style.width=`${progressPercentage}%`;
        let durationMini=Math.floor(duration /60)
        let durationSeconds =Math.floor(duration % 60);

        if(durationSeconds < 10)
        {
            durationSeconds = `0${durationSeconds}`
            durationEl.textContent =`${durationMini}:${durationSeconds}`;

        }

        let currentMini = Math.floor(currentTime / 60);
        let currentSeconds =Math.floor(currentTime % 60)
            if(currentSeconds <10){
                currentSeconds =`0${currentSeconds}`
            }
        
        currentTimeEl.textContent =`${currentMini}:${currentSeconds}`
        videoElement.playbackRate=speed
}
function setProgress(e){
    let setWidth=this.clientWidth;
    let horzantalWidth =e.offsetX
    console.log(horzantalWidth)
    const duration = videoElement.duration;
    const newTime =(horzantalWidth/setWidth)*duration;
    console.log(newTime)
    videoElement.currentTime =`${newTime}`;
}
//events
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseVideo();
  }else
  {
    playVideo();
  }
});
nextBtn.addEventListener("click", nextVideo)
videoElement.addEventListener("ended", nextVideo);
prevBtn.addEventListener("click",prevVideo)

videoElement.addEventListener("timeupdate",updateProgress)

progressContainer.addEventListener("click",setProgress)

volumeSlider.addEventListener("input", (e)=>{
    videoElement.volume = e.target.value;

})
speedSelect.addEventListener("change",(e)=>{
    speed =parseFloat(e.target.value);
    videoElement.playbackRate =speed;
})
videoElement.addEventListener("loadedmetadata",updateProgress)
loadVideo(videos[videoIndex]);