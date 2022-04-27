const keysBoard = ['q','a', 'w', 's', 'e', 'r','d', 't', 'f', 'y','g','u']

const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", e => {
    let key = e.key
    let position = keysBoard.indexOf(key)
    if(position != -1){
        playNoteMusic(position)
    }
});

keys.forEach(e => {
    e.addEventListener("click", () => {
        let position = keysBoard.indexOf(e.dataset.note)
        if(position != -1){
            playNoteMusic(position)
        }
    })
});

function playNoteMusic(position){
    const note = document.querySelectorAll(".note");
    note[position].currentTime = 0
    note[position].play();
    keys[position].classList.add("pressed");
    note[position].addEventListener("ended", () => {
        keys[position].classList.remove("pressed")
    })
}
