document.querySelectorAll('.stop-item').forEach((item) => {
  const button = item.querySelector('.swap-button');
  const label  = item.querySelector('.route-label');
  const iframe = item.querySelector('.map-frame');

  const routeA = item.dataset.routeA;
  const mapA   = item.dataset.mapA;
  const routeB = item.dataset.routeB;
  const mapB   = item.dataset.mapB;

  let isRouteA = true;

  button.addEventListener('click', () => {
    if (isRouteA) {
      label.textContent = routeB;
      label.href = mapB;
      iframe.src = mapB;
      button.classList.add("active");  
    } else {
      label.textContent = routeA;
      label.href = mapA;
      iframe.src = mapA;
      button.classList.remove("active");
    }
    isRouteA = !isRouteA;
  });
});

const musicBtn = document.getElementById("musicBtn");
const audio = new Audio("assets/lagu.mp3"); 
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    musicBtn.textContent = "Ayo naik bus!";
  } else {
    audio.play();
    musicBtn.textContent = "Kiri, Pak!";
  }
  isPlaying = !isPlaying;
});
