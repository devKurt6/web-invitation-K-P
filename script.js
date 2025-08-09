// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// Optional: Countdown Timer
const countDownDate = new Date("Oct 28, 2025 15:00:00").getTime();
const countdownFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.innerHTML =
      `<div><span>${days}</span><small>Days</small></div>` +
      `<div><span>${hours}</span><small>Hours</small></div>` +
      `<div><span>${minutes}</span><small>Minutes</small></div>` +
      `<div><span>${seconds}</span><small>Seconds</small></div>`;
  }

  if (distance < 0) {
    clearInterval(countdownFunction);
    if (countdown) countdown.innerHTML = "We’re Married!";
  }
}, 1000);

// 🔈 Music Toggle
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.querySelector(".music-control button");

  if (music.paused) {
    music.play();
    btn.innerText = "🔈";
  } else {
    music.pause();
    btn.innerText = "🔇";
  }
}




// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}
// Scroll shrink effect
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-section');
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    hero.classList.add('hero-shrink');
  } else {
    hero.classList.remove('hero-shrink');
  }
});

//--------------------------------------------------------------------FLOWER
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


window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero-section");
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 1 + "px";
});

