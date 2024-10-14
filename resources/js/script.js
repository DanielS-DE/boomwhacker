var played = [];

const alleMeineEntchen = [
  "./resources/sounds/SOUND_C.mp3",
  "./resources/sounds/SOUND_D.mp3",
  "./resources/sounds/SOUND_E.mp3",
  "./resources/sounds/SOUND_F.mp3",
  "./resources/sounds/SOUND_G.mp3",
  "./resources/sounds/SOUND_G.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_G.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_A.mp3",
  "./resources/sounds/SOUND_G.mp3",
  "./resources/sounds/SOUND_F.mp3",
  "./resources/sounds/SOUND_F.mp3",
  "./resources/sounds/SOUND_F.mp3",
  "./resources/sounds/SOUND_F.mp3",
  "./resources/sounds/SOUND_E.mp3",
  "./resources/sounds/SOUND_E.mp3",
  "./resources/sounds/SOUND_D.mp3",
  "./resources/sounds/SOUND_D.mp3",
  "./resources/sounds/SOUND_D.mp3",
  "./resources/sounds/SOUND_D.mp3",
  "./resources/sounds/SOUND_C.mp3",
];

function playAudio(filename) {
  let audio = new Audio(filename);
  audio.play();
  played.push(filename);
  if (played.length >= 27) {
    easterEgg(played);
  }
}

function easterEgg(played) {
  if (JSON.stringify(played) === JSON.stringify(alleMeineEntchen)) {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Schließe das Popup nach 3 Sekunden
    setTimeout(function () {
      popup.style.display = "none";
    }, 3000);
  }
  played.length = 0;
}
