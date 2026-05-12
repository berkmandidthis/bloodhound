console.log("script connected");

let button = document.getElementById("music-button");
console.log(button);

let music = document.getElementById("bg-music");
music.volume = 0.05;
console.log(music);
button.addEventListener("click", function () {
    console.log("button clicked");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});