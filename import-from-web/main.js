import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti/+esm';

const confettiButton = document.getElementById("confettiButton");

if (confettiButton) {
  confettiButton.addEventListener("click", () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
}