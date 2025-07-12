/* ----------  NAV TOGGLE  ---------- */
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

/* ----------  ADD‑TO‑CART  ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name  = btn.dataset.name;
      const price = Number(btn.dataset.price);

      /* read current cart */
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      /* check if item already in cart */
      const existing = cart.find(p => p.name === name);
      if (existing) {
        existing.qty += 1;                     // ⬆️ increase qty
      } else {
        cart.push({ name, price, qty: 1 });    // ➕ new line
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      showPopup(`${name} added (Qty ${existing ? existing.qty : 1})`);
    });
  });
});

/* ----------  POP‑UP  ---------- */
function showPopup(msg) {
  const popup = document.getElementById('cart-popup');
  if (!popup) return;
  popup.querySelector('p').textContent = msg;
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.add('hidden'), 3000);
}

