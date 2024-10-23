if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./resources/js/service-worker.js")
      .then(function (registration) {
        console.log("Service Worker registriert:", registration);
      })
      .catch(function (error) {
        console.log("Service Worker Registrierung fehlgeschlagen:", error);
      });
  });
}

function playAudio(filename) {
  fetch(filename)
    .then((response) => response.blob())
    .then((blob) => {
      var audioUrl = URL.createObjectURL(blob);
      var audio = new Audio(audioUrl);
      audio.play();
    })
    .catch((error) => {
      console.error("Fehler beim Laden des Sounds:", error);
    });
}
