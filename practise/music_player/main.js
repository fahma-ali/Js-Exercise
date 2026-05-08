// Create audio element
const audioElement = document.createElement("audio");
document.body.appendChild(audioElement);

// Select DOM elements
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");
const songs = [
    {
        title: "song 1",
        artist: "artist 1",
        cover: "https://placehold.co/250/34b4eb/white",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
        title: "song 2", artist: "artist 2", cover: "https://placehold.co/250/eb34e5/white", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Local Song", artist: "artist 3", cover: "https://placehold.co/250/eb9834/white", src: "./song3.mp3"
    }
];

let songIdex = 0;
let isPlaying = false;
let speed = 1;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover
    audioElement.src = song.src
}
loadSong(songs[songIdex])
function playSong() {
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    audioElement.play();
    isPlaying = true;

}
function pauseSong() {
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    //its function from <audio play,pause src=""></audio>
    audioElement.pause();
    isPlaying = false;
}
function nextSong() {
    setTimeout(() => {
        pauseSong();
        songIdex++;

        if (songIdex > songs.length - 1) {
            songIdex = 0;
        }
        loadSong(songs[songIdex]);
        playSong();

    }, 300)


}
function prevSong() {
    setTimeout(() => {
        pauseSong();
        songIdex--;

        if (songIdex < 0) {
            songIdex = songs.length -1;
        }
        loadSong(songs[songIdex]);
        playSong();

    }, 300)


}
//Event handler
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
})
nextBtn.addEventListener("click", nextSong)
prevBtn.addEventListener("click",prevSong)