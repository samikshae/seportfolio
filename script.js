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