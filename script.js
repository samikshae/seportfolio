document.addEventListener("DOMContentLoaded", () => {
  const line1 = "Mechanical Engineering Student";
  const line2 = "@ Cornell University";

  const line1El = document.getElementById("typing-line-1");
  const line2El = document.getElementById("typing-line-2");

  if (!line1El || !line2El) {
    console.error("Typing elements not found");
    return;
  }

  let i = 0;
  let j = 0;

  function typeLine1() {
    if (i < line1.length) {
      line1El.textContent += line1.charAt(i);
      i++;
      setTimeout(typeLine1, 45);
    } else {
      line1El.classList.remove("typing-cursor");
      line2El.classList.add("typing-cursor");
      setTimeout(typeLine2, 400);
    }
  }

  function typeLine2() {
    if (j < line2.length) {
      line2El.textContent += line2.charAt(j);
      j++;
      setTimeout(typeLine2, 45);
    } else {
      line2El.classList.remove("typing-cursor");
    }
  }

  line1El.classList.add("typing-cursor");
  setTimeout(typeLine1, 900);
});
