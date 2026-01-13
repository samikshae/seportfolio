document.addEventListener("DOMContentLoaded", () => {
  const line1Text = "Mechanical Engineering Student";
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
function generateStars(layerSelector, count, minSize, maxSize) {
  const layer = document.querySelector(layerSelector);
  layer.innerHTML = ""; // clear old stars

  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * (maxSize - minSize) + minSize;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * width}px`;
    star.style.top = `${Math.random() * height}px`;
    layer.appendChild(star);
  }
}

// Initialize all layers
function initStars() {
  generateStars('.stars', 300, 1, 2);   // small stars
  generateStars('.stars2', 200, 2, 3);  // medium stars
  generateStars('.stars3', 150, 3, 4);  // big stars
}

// Initialize on load and resize
window.addEventListener("load", initStars);
window.addEventListener("resize", initStars);