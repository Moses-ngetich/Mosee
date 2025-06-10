// Slight mouse-follow animation
document.addEventListener("mousemove", (e) => {
  const container = document.getElementById("effect");
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = (x - centerX) * 0.02;
  const offsetY = (y - centerY) * 0.02;
  container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Music toggle
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "🔊";
  } else {
    music.pause();
    toggle.textContent = "🔈";
  }
});