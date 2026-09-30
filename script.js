// ==============================
// TEACHER'S DAY PHOTO GALLERY
// ==============================

const photos = [

    "images/teacher-photo-1.jpg",

    "images/teacher-photo-2.jpg",

    "images/teacher-photo-3.jpg",

    "images/teacher-photo-4.jpg"

];


function changePhoto(number) {

    const photo =
        document.getElementById("teacherPhoto");


    // Fade out

    photo.style.opacity = "0";


    setTimeout(function() {

        photo.src = photos[number - 1];

        photo.style.opacity = "1";

    }, 200);

}



// ==============================
// TEACHER'S DAY MUSIC
// ==============================

function playMusic() {

    const music =
        document.getElementById("teacherMusic");

    const button =
        document.querySelector(".music-button");

    if (music.paused) {

        music.play();

        button.innerHTML = "⏸️ Pause Music";

    } else {

        music.pause();

        button.innerHTML = "🎵 Play Music 💕";

    }
}