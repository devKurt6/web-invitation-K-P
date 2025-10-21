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

// Create popup elements dynamically
const popup = document.createElement('div');
const popupImg = document.createElement('img');
const closeBtn = document.createElement('span');

// Set IDs and styles
popup.id = 'imagePopup';
popup.style.cssText = `
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
`;

popupImg.style.cssText = `
  max-width: 90%;
  max-height: 80%;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(255,255,255,0.2);
  transition: transform 0.3s ease;
`;

closeBtn.textContent = '×';
closeBtn.style.cssText = `
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
`;

// Add elements to DOM
popup.appendChild(popupImg);
popup.appendChild(closeBtn);
document.body.appendChild(popup);

// Add functionality
const galleryImages = document.querySelectorAll('.photos img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.style.display = 'flex';
    popupImg.style.transform = 'scale(1.05)';
    setTimeout(() => (popupImg.style.transform = 'scale(1)'), 150);
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
// Dynamic guest name input
// --- Add and remove guest names dynamically ---
const addGuestBtn = document.getElementById('addGuestBtn');
const guestList = document.getElementById('guest-list');
let guestCount = 0;

addGuestBtn.addEventListener('click', () => {
  guestCount++;

  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.gap = '10px';
  wrapper.style.marginTop = '10px';

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'guest_name[]'; // Netlify collects these as a list
  input.placeholder = `Family Member ${guestCount}`;
  input.required = true;
  input.style.flex = '1';
  input.style.padding = '10px';
  input.style.borderRadius = '8px';
  input.style.border = '1px solid #ccc';
  input.style.fontFamily = 'Poppins, sans-serif';

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.textContent = '×';
  remove.style.background = '#ff5b5b';
  remove.style.color = '#fff';
  remove.style.border = 'none';
  remove.style.borderRadius = '5px';
  remove.style.cursor = 'pointer';
  remove.style.fontSize = '16px';
  remove.style.padding = '5px 10px';
  remove.addEventListener('click', () => guestList.removeChild(wrapper));

  wrapper.appendChild(input);
  wrapper.appendChild(remove);
  guestList.appendChild(wrapper);
});

// --- Netlify fix so dynamic inputs are included ---
document.querySelector("form[name='rsvp']").addEventListener('submit', e => {
  const form = e.target;
  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.name = 'form-name';
  hidden.value = form.getAttribute('name');
  form.appendChild(hidden);
});



document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photos img");
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    const initialCount = 6; // show 6 photos first
    let showingAll = false;

    // Hide all except the first 6
    photos.forEach((img, index) => {
      if (index < initialCount) img.classList.add("visible");
    });

    seeMoreBtn.addEventListener("click", () => {
      if (!showingAll) {
        photos.forEach(img => img.classList.add("visible"));
        seeMoreBtn.textContent = "See Less";
        showingAll = true;
      } else {
        photos.forEach((img, index) => {
          if (index >= initialCount) img.classList.remove("visible");
        });
        seeMoreBtn.textContent = "See More";
        showingAll = false;
      }
    });
  });

  // Safe, self-contained popup for images inside .money
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // If popup already exists (maybe from previous run), reuse it
    let popup = document.getElementById('moneyImagePopup');
    let popupImg;

    if (!popup) {
      // Create popup container
      popup = document.createElement('div');
      popup.id = 'moneyImagePopup';
      popup.style.position = 'fixed';
      popup.style.top = '0';
      popup.style.left = '0';
      popup.style.width = '100%';
      popup.style.height = '100%';
      popup.style.backgroundColor = 'rgba(0,0,0,0.85)';
      popup.style.display = 'none';
      popup.style.justifyContent = 'center';
      popup.style.alignItems = 'center';
      popup.style.zIndex = '99999';
      popup.style.cursor = 'zoom-out';
      popup.style.padding = '20px';
      popup.style.boxSizing = 'border-box';

      // Create popup image element
      popupImg = document.createElement('img');
      popupImg.id = 'moneyPopupImg';
      popupImg.style.maxWidth = '92%';
      popupImg.style.maxHeight = '92%';
      popupImg.style.borderRadius = '12px';
      popupImg.style.boxShadow = '0 8px 30px rgba(0,0,0,0.6)';
      popupImg.style.objectFit = 'contain';
      popupImg.style.background = '#fff';
      popupImg.style.padding = '6px';
      popupImg.style.boxSizing = 'border-box';

      // Optional close button (small)
      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.innerHTML = '✕';
      closeBtn.setAttribute('aria-label', 'Close image');
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '18px';
      closeBtn.style.right = '24px';
      closeBtn.style.background = 'transparent';
      closeBtn.style.color = '#fff';
      closeBtn.style.border = 'none';
      closeBtn.style.fontSize = '28px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.zIndex = '100000';
      closeBtn.style.padding = '4px 8px';
      closeBtn.style.lineHeight = '1';

      // Append image and close to popup
      popup.appendChild(popupImg);
      popup.appendChild(closeBtn);
      document.body.appendChild(popup);

      // Close on clicking close button
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        popupImg.src = '';
      });

      // Close on clicking outside the image
      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          popup.style.display = 'none';
          popupImg.src = '';
        }
      });
    } else {
      // if popup exists, get its image element
      popupImg = document.getElementById('moneyPopupImg');
    }

    // Attach click listeners (event delegation is safe too)
    const moneyImgs = document.querySelectorAll('.money img');

    if (!moneyImgs || moneyImgs.length === 0) {
      // nothing to do
      return;
    }

    moneyImgs.forEach(img => {
      // make sure the cursor indicates clickable
      img.style.cursor = 'zoom-in';

      img.addEventListener('click', (ev) => {
        ev.stopPropagation();
        // Use the clicked image src (or data-src if you use lazy loading)
        const src = img.dataset.src || img.src || img.getAttribute('src');
        if (!src) return;
        popupImg.src = src;
        popup.style.display = 'flex';
      });
    });
  });
})();
