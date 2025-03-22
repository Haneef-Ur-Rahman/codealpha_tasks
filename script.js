const songs = [
    "Music_1.mp3",
    "Music_2.mp3",
    "Music_3.mp3"
];

let currentSongIndex = 0;
const audioPlayer = new Audio(songs[currentSongIndex]);
const songTitle = document.getElementById("song-title");

function updateSongTitle() {
    songTitle.textContent = `Song Name : ${songs[currentSongIndex].split("/").pop()}`;
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    updateSongTitle();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    updateSongTitle();
}

audioPlayer.addEventListener("ended", nextSong);
updateSongTitle();
