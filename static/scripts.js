function setRandomBackground() {
    const bgIndex = Math.floor(Math.random() * 59) + 1;
    document.body.style.backgroundImage = `url('static/backgrounds/bg1 (${bgIndex}).jpg')`;
}
window.onload = function () {
    setRandomBackground();

    // Play background music
    const audio = document.getElementById("bg-music");
    if (audio) {
        audio.play().catch(e => {
            console.log("Autoplay blocked. User interaction needed.");
        });
    }
};

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        setRandomBackground();
    });
});
