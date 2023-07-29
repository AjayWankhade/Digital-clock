// src/main.ts
function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
  const currentTime = getCurrentTime();
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.textContent = currentTime;
  }
}

setInterval(updateClock, 1000);
