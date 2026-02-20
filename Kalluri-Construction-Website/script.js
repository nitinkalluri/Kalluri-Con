// ============================================================
// KALLURI CONSTRUCTION — SHARED JS
// ============================================================

// Mobile nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(8,8,12,0.97)';
  } else {
    nav.style.background = 'rgba(8,8,12,0.92)';
  }
});
