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
    btn.innerHTML = '<img src="K&P.png" alt="K&P" style="width: 50px; height: auto;">';
  } else {
    music.pause();
    btn.innerHTML = '<img src="K&P.png" alt="K&P" style="width: 50px; height: auto;">';
  }
}



document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("invitation-overlay");
    const openBtn = document.getElementById("open-btn");
    const loadingMsg = document.getElementById("loading-msg");

    let countdown = 3; // seconds

    // Disable button initially
    openBtn.disabled = true;
    openBtn.style.opacity = "0.6";
    openBtn.style.cursor = "not-allowed";

    // Show countdown
    loadingMsg.textContent = `⏳ Please wait... ${countdown}s`;

    // Countdown timer
    const timer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            loadingMsg.textContent = `⏳ Please wait... ${countdown}s`;
        } else {
            clearInterval(timer);
            loadingMsg.style.display = "none";
            openBtn.disabled = false;
            openBtn.style.opacity = "1";
            openBtn.style.cursor = "pointer";
        }
    }, 1000);

    // When user clicks after countdown
    openBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        setTimeout(() => overlay.style.display = "none", 500);
        toggleMusic(); // play music
        
    });
});



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

// Scroll shrink effect
// window.addEventListener('scroll', () => {
//   const hero = document.querySelector('.savethedate');
//   const scrollY = window.scrollY;

//   if (scrollY > 300) {
//     hero.classList.add('savethedate');
//   } else {
//     hero.classList.remove('savethedate');
//   }
// });

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

/************fix scroll in safari*********** */
window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero-section");
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.2 + "px";
});


/************fix scroll in safari*********** */
// window.addEventListener("scroll", function () {
//     const hero = document.querySelector(".savethedate");
//     let offset = window.pageYOffset;
//     hero.style.backgroundPositionY = offset * 0.2 + "px";
// });
/************************** */
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".zoom-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.remove("animate-zoom-in");
      entry.target.classList.remove("animate-zoom-out");
      if (entry.isIntersecting) {
        // Add animation when visible
        
        entry.target.classList.add("animate-zoom-in");
      } else {
        // Remove animation when hidden (so it can replay)
        entry.target.classList.add("animate-zoom-out");
      }
    });
  }, { threshold: 0.3 }); // Trigger at 20% visibility

  images.forEach(img => observer.observe(img));
});
/********************************************************************** */
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(".bounce-top");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.remove("bounce-top");
      
      if (entry.isIntersecting) {
        // Add animation when visible
        
        entry.target.classList.add("bounce-top");
      } else {
        // Remove animation when hidden (so it can replay)
        entry.target.classList.remove("bounce-top");
      }
    });
  }, { threshold: 0.3 }); // Trigger at 20% visibility

  textElements.forEach(txt => observer.observe(txt));
});

/********************************************************************** */
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("typing");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.remove("typing");
      
      if (entry.isIntersecting) {
        // Add animation when visible
        
        entry.target.classList.add("typing");
      } else {
        // Remove animation when hidden (so it can replay)
        entry.target.classList.remove("typing");
      }
    });
  }, { threshold: 0.3 }); // Trigger at 20% visibility

  textElements.forEach(txt => observer.observe(txt));
});

/************************code for animation Paola & Kurt************************** */
const textElement = document.querySelector(".typing");
const resetBtn = document.getElementById("open-btn");

const phrases = ["Hello!","Welcome", "We're getting married", "Kurt & Paola"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let delay = 100;
let timeoutId;

function type() {
  let currentPhrase = phrases[currentPhraseIndex];
  document.getElementById("hide").classList.add("hide");
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    delay = 80;
  } else {
    textElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    delay = 100;
  }

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    if (currentPhraseIndex < phrases.length - 1) {
      delay = 1000;
      isDeleting = true;
    } else {
      document.getElementById("hide").classList.remove("hide");
      sysmain();
      
      return; // Stop completely after last phrase is typed
    }
  }

  if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentPhraseIndex++;
    delay = 500;
  }

  timeoutId = setTimeout(type, delay);
}

function resetAnimation() {
  clearTimeout(timeoutId); // Stop current animation
  textElement.textContent = ""; // Clear text
  currentPhraseIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  type(); // Restart
}

resetBtn.addEventListener("click", resetAnimation);



function sysmain() {
  const el = document.getElementById("K&P");
const el2 = document.getElementById("hide");
  if (el.classList.contains("tracking-in-expand")) {
    el.classList.remove("tracking-in-expand");
  } else {
    el.classList.add("tracking-in-expand");
    
  }

}
