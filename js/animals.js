let numOfButtons = document.querySelectorAll('.btn2').length;

let isPlaying = true;
for (let i = 0; i < numOfButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        let audio = new Audio("assets/sounds/animals/" + [i] + ".mp3");
        audio.play();
    })
}