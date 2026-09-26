// ===== Charger les données du catalogue =====
let collectionsData = { homme: [], femme: [], enfant: [] };

async function loadCollections() {
  try {
    const res = await fetch('data/collections.json');
    collectionsData = await res.json();
  } catch (e) {
    console.error('Impossible de charger le catalogue :', e);
  }
  renderCollection('homme');
}

function renderCollection(cat) {
  const grid = document.getElementById('collectionGrid');
  const items = collectionsData[cat] || [];

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="collection-empty">
        <div class="em-icon">🧵</div>
        <h3>Collection ${cat === 'enfant' ? 'Enfant' : cat} — bientôt disponible</h3>
        <p>De nouvelles créations arrivent prochainement dans cette catégorie. Contactez-nous sur WhatsApp pour être informé en priorité.</p>
      </div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="piece-card">
      <div class="piece-photo">
        <img src="${item.image}" alt="${item.titre}" loading="lazy">
      </div>
      <div class="piece-info">
        <h3>${item.titre}</h3>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

// ===== Onglets Collections =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCollection(btn.dataset.cat);
  });
});

// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Navbar shrink on scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.padding = window.scrollY > 40 ? '8px 0' : '14px 0';
});

loadCollections();
