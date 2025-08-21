// Typewriter Effect
const text = "Hi, I'm Pradeep Rajan";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  let triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});