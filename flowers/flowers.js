const container = document.getElementById('flower-container');
const flowerImages = [
  'white.png',
  'pngwing.com.png',
  'flow.png'
];

// Create falling flowers
function createFallingFlower() {
  const flower = document.createElement('img');
  flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  flower.classList.add('falling-flower');

  const size = Math.random() * 40 + 20; // size 20-60px
  flower.style.width = `${size}px`;
  flower.style.position = 'absolute';
  flower.style.top = '-50px';
  flower.style.left = `${Math.random() * window.innerWidth}px`;
  flower.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;

  container.appendChild(flower);

  // Remove after animation
  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// Create floating flowers
function createFloatingFlower() {
  const flower = document.createElement('img');
  flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  flower.style.width = '40px';
  flower.style.position = 'absolute';
  flower.style.left = `${Math.random() * window.innerWidth}px`;
  flower.style.top = `${Math.random() * window.innerHeight}px`;
  flower.style.animation = `float ${Math.random() * 5 + 3}s ease-in-out infinite alternate`;

  container.appendChild(flower);
}

// Burst flowers on click
document.addEventListener('click', (e) => {
  for (let i = 0; i < 8; i++) {
    const flower = document.createElement('img');
    flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.width = `${Math.random() * 30 + 20}px`;
    flower.style.position = 'absolute';
    flower.style.left = `${e.clientX}px`;
    flower.style.top = `${e.clientY}px`;
    flower.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
});

// Start animations
setInterval(createFallingFlower, 500); // every 0.5s
for (let i = 0; i < 10; i++) createFloatingFlower();
