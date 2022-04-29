"use strict";
const WHITE_KEYS = ["q", "w", "e", "r", "t", "y", "u"];
const BLACK_KEYS = ["a", "s", "d", "f", "g"];
const keys = document.querySelectorAll(".key");
const whites = document.querySelectorAll(".key.white");
const blacks = document.querySelectorAll(".key.black");
if (keys !== null) {
    keys.forEach(key => {
        key.addEventListener("click", () => playNote(key));
    });
}
document.addEventListener("keydown", e => {
    if (e.repeat) {
        return;
    }
    else {
        const key = e.key;
        const whiteKeyIndex = WHITE_KEYS.indexOf(key);
        const blackKeyIndex = BLACK_KEYS.indexOf(key);
        if (blacks !== null && blackKeyIndex > -1)
            playNote(blacks[blackKeyIndex]);
        if (whites !== null && whiteKeyIndex > -1)
            playNote(whites[whiteKeyIndex]);
    }
});
function playNote(key) {
    let data = key.getAttribute("data-note");
    if (data !== null) {
        const noteAudio = document.getElementById(data);
        noteAudio.currentTime = 0;
        noteAudio.play();
        key.classList.add("pressed");
        noteAudio.addEventListener("ended", () => {
            key.classList.remove("pressed");
        });
    }
}
