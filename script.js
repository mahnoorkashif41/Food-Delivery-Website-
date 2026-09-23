const menuItems = [
  { id: 'spring-table', name: 'Spring Table', description: 'Young peas, asparagus, lemon, and pecorino.', price: 18, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85', alt: 'Fresh seasonal salad with greens and vegetables' },
  { id: 'roasted-chicken', name: 'Roasted Chicken', description: 'Herbs, preserved lemon, and pan jus.', price: 29, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85', alt: 'Roasted chicken with herbs and vegetables' },
  { id: 'rigatoni', name: 'Sunday Rigatoni', description: 'Slow tomato sugo, basil, and salted ricotta.', price: 24, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85', alt: 'Rigatoni pasta with tomato sauce and basil' },
  { id: 'market-fish', name: 'Market Fish', description: "Today's catch, fennel, and salsa verde.", price: 32, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85', alt: 'Fresh fish fillet plated with herbs' },
  { id: 'crispy-potatoes', name: 'Crispy Potatoes', description: 'Garlic aioli, rosemary, and sea salt.', price: 12, image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=85', alt: 'Crispy roasted potatoes with herbs' },
  { id: 'burrata', name: 'Burrata & Figs', description: 'Creamy burrata, ripe figs, and toasted sourdough.', price: 16, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85', alt: 'Burrata cheese served with figs and bread' },
  { id: 'chocolate-tart', name: 'Chocolate Tart', description: 'Dark chocolate, olive oil, and flaky salt.', price: 11, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85', alt: 'Slice of rich chocolate cake with berries' },
  { id: 'house-spritz', name: 'House Spritz', description: 'Blood orange, rosemary, and sparkling wine.', price: 14, image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=85', alt: 'Orange spritz cocktail with rosemary' }
];

const cart = {};
const money = value => `$${value.toFixed(2)}`;
const getItem = id => menuItems.find(item => item.id === id);

const menuGrid = document.querySelector('#menu-grid');
const cartCount = document.querySelector('#cart-count');
const cartContent = document.querySelector('#cart-content');
const cartTotal = document.querySelector('#cart-total');
const checkoutTotal = document.querySelector('#checkout-total');
const cartDrawer = document.querySelector('#cart-drawer');
const drawerBackdrop = document.querySelector('#drawer-backdrop');
const checkoutModal = document.querySelector('#checkout-modal');
const checkoutBackdrop = document.querySelector('#checkout-backdrop');
const toast = document.querySelector('#toast');

function renderMenu() {
  menuGrid.innerHTML = menuItems.map(item => `
    <article class="menu-card">
      <div class="menu-card-image"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div>
      <div class="menu-card-body">
        <div class="menu-card-header"><h3>${item.name}</h3><span class="price">${money(item.price)}</span></div>
        <p>${item.description}</p>
        <button class="add-button" type="button" data-add="${item.id}">Add to bag <span aria-hidden="true">+</span></button>
      </div>
    </article>`).join('');
}

function cartEntries() {
  return Object.entries(cart).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => ({ item: getItem(id), quantity }));
}

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = entries.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  cartCount.textContent = count;
  cartContent.innerHTML = entries.length ? entries.map(({ item, quantity }) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.alt}">
      <div><h3>${item.name}</h3><p>${money(item.price)}</p><div class="qty-controls"><button type="button" data-decrease="${item.id}" aria-label="Decrease ${item.name}">&minus;</button><span>${quantity}</span><button type="button" data-increase="${item.id}" aria-label="Increase ${item.name}">+</button></div></div>
      <span class="item-total">${money(item.price * quantity)}</span>
    </div>`).join('') : '<p class="empty-cart">Your bag is waiting for something delicious.<br><br><a class="text-link" href="#menu" data-close-cart>Browse the menu &rarr;</a></p>';
  cartTotal.textContent = money(total);
  checkoutTotal.textContent = money(total);
  document.querySelector('#checkout-trigger').disabled = !entries.length;
  document.querySelector('#checkout-trigger').style.opacity = entries.length ? '1' : '.45';
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast(`${getItem(id).name} added to your bag`);
}

function changeQuantity(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function setOverlay(element, visible) {
  element.hidden = !visible;
}

function openCart() {
  setOverlay(drawerBackdrop, true);
  cartDrawer.classList.add('is-open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartDrawer.classList.remove('is-open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  setOverlay(drawerBackdrop, false);
}
function openCheckout() {
  if (!cartEntries().length) return;
  closeCart();
  setOverlay(checkoutBackdrop, true);
  checkoutModal.classList.add('is-open');
  checkoutModal.setAttribute('aria-hidden', 'false');
  checkoutModal.querySelector('input').focus();
}
function closeCheckout() {
  checkoutModal.classList.remove('is-open');
  checkoutModal.setAttribute('aria-hidden', 'true');
  setOverlay(checkoutBackdrop, false);
}
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

menuGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-add]');
  if (button) addToCart(button.dataset.add);
});
cartContent.addEventListener('click', event => {
  const decrease = event.target.closest('[data-decrease]');
  const increase = event.target.closest('[data-increase]');
  if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  if (increase) changeQuantity(increase.dataset.increase, 1);
  if (event.target.closest('[data-close-cart]')) closeCart();
});
document.querySelector('#open-cart').addEventListener('click', openCart);
document.querySelector('#close-cart').addEventListener('click', closeCart);
drawerBackdrop.addEventListener('click', closeCart);
document.querySelector('#checkout-trigger').addEventListener('click', openCheckout);
document.querySelector('#close-checkout').addEventListener('click', closeCheckout);
checkoutBackdrop.addEventListener('click', closeCheckout);
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCart(); closeCheckout(); } });

document.querySelector('#checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = [...form.querySelectorAll('input[required]')];
  let valid = true;
  fields.forEach(field => {
    const error = field.parentElement.querySelector('.form-error');
    if (!field.value.trim()) { error.textContent = 'Please fill in this field.'; valid = false; } else if (field.name === 'phone' && field.value.replace(/\D/g, '').length < 10) { error.textContent = 'Please enter a valid phone number.'; valid = false; } else { error.textContent = ''; }
  });
  if (!valid) { form.querySelector('.form-status').textContent = 'Please check the highlighted fields.'; return; }
  const name = form.elements.name.value.trim().split(' ')[0];
  Object.keys(cart).forEach(id => delete cart[id]);
  renderCart();
  form.reset();
  form.querySelector('.form-status').textContent = '';
  closeCheckout();
  showToast(`Thank you, ${name}. Your order is on its way.`);
});

renderMenu();
renderCart();
