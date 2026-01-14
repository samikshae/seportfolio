document.addEventListener("DOMContentLoaded", () => {
  const line1Text = "Mechanical & Aerospace Engineering";
  const line2Text = "@ Cornell University";

  const line1 = document.getElementById("typing-line-1");
  const line2 = document.getElementById("typing-line-2");

  const typingSpeed = 40;
  const animationDuration = 900;

  let i = 0;
  let j = 0;

  function typeLine1() {
    if (i < line1Text.length) {
      line1.textContent += line1Text[i++];
      requestAnimationFrame(() => setTimeout(typeLine1, typingSpeed));
    } else {
      line1.classList.remove("typing-cursor");
      line2.classList.add("typing-cursor");
      requestAnimationFrame(typeLine2);
    }
  }

  function typeLine2() {
    if (j < line2Text.length) {
      line2.textContent += line2Text[j++];
      requestAnimationFrame(() => setTimeout(typeLine2, typingSpeed));
    } else {
      line2.classList.remove("typing-cursor");
    }
  }

  // start typing after fade animations
  setTimeout(() => {
    line1.classList.add("typing-cursor");
    typeLine1();
  }, animationDuration);
});

// ==================== STARFIELD ====================
function generateStars(selector, count) {
  const element = document.querySelector(selector);
  const width = window.innerWidth;
  const height = window.innerHeight;

  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    shadows.push(`${x}px ${y}px white`);
  }
  element.style.boxShadow = shadows.join(', ');
}

// Generate stars for all layers
function initStars() {
  generateStars('.stars', 255);   // Layer 1: small bright stars
  generateStars('.stars2', 75);  // Layer 2: medium stars
  generateStars('.stars3', 40);  // Layer 3: big stars
}

// Initialize on page load
window.addEventListener("load", initStars);

// Re-generate stars when window is resized
window.addEventListener("resize", initStars);

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

// Observe sections
document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Observe skill cards individually (stagger effect)
document.querySelectorAll(".skill-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.12}s`;
  observer.observe(card);
});

document.querySelectorAll(".skill-category").forEach(el => {
  observer.observe(el);
});
