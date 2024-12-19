// Ensure the heart video auto-plays and is muted
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heart-video");
    if (video) {
        video.muted = true;
        video.loop = true;
        video.play();
    }
});
