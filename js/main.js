/* =========================================================
   NIKITA'S PORTFOLIO SCRIPTS (beginner friendly)
   ========================================================= */

// ✏️ EDIT: add or change your favourite facts here!
const facts = [
  "Bananas are berries, but strawberries aren't. 🍌",
  "A day on Venus is longer than a year on Venus. 🪐",
  "Saturn is less dense than water. In a giant enough bathtub, it would float! 🛁",
  "Wombat poop is cube-shaped. 🟫",
  "Octopuses have three hearts. 🐙",
  "Honey found in ancient Egyptian tombs was still edible. 🍯",
  "In 2019, astronauts on the ISS tried baking cookies in a special space oven. 🍪",
  "A teaspoon of neutron star would weigh about a billion tons. ⭐"
];

// 1. Sticky navbar gets a soft background after scrolling
const nav = document.getElementById('mainNav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll);
onScroll();

// 2. Close the mobile menu after tapping a link
document.querySelectorAll('#nav .nav-link, #nav .btn').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('nav');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

// 3. Gentle scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 4. Random fact button (never repeats the same fact twice in a row)
const factText = document.getElementById('factText');
let last = 0;
document.getElementById('factBtn').addEventListener('click', () => {
  let i;
  do { i = Math.floor(Math.random() * facts.length); } while (i === last);
  last = i;
  factText.style.opacity = 0;
  setTimeout(() => { factText.textContent = facts[i]; factText.style.opacity = 1; }, 200);
});

// 5. Contact form (UI only, no backend)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  if (!e.target.checkValidity()) { note.textContent = 'Please fill in every field ♡'; return; }
  note.textContent = 'Thank you! (Demo only. Connect a form service to receive messages.)';
  e.target.reset();
});

// 6. Footer year
document.getElementById('year').textContent = new Date().getFullYear();
