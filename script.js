const categories = [
  { id: 'all', name: 'All dishes', symbol: '✳' },
  { id: 'fast-food', name: 'Fast food', symbol: '▰' },
  { id: 'chicken', name: 'Chicken', symbol: '♨' },
  { id: 'pizza', name: 'Pizza', symbol: '◔' },
  { id: 'pasta', name: 'Pasta & lasagna', symbol: '≈' },
  { id: 'chinese', name: 'Chinese', symbol: '⌁' },
  { id: 'pakistani', name: 'Pakistani', symbol: '✳' },
  { id: 'desserts', name: 'Desserts', symbol: '◌' },
  { id: 'drinks', name: 'Drinks', symbol: '◡' }
];

const categoryImages = {
  all: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=240&q=80',
  'fast-food': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=240&q=80',
  chicken: 'https://images.unsplash.com/photo-1730900737724-5b752e1ed3dd?auto=format&fit=crop&w=240&q=80',
  pizza: 'https://images.unsplash.com/photo-1689793606758-6e9de1953a67?auto=format&fit=crop&w=240&q=80',
  pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=240&q=80',
  chinese: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=240&q=80',
  pakistani: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=240&q=80',
  desserts: 'https://images.unsplash.com/photo-1568903880699-b53f3e0c2b96?auto=format&fit=crop&w=240&q=80',
  drinks: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=240&q=80'
};

const menuItems = [
  { id: 'chicken-burger', category: 'fast-food', name: 'Chicken Burger', description: 'Grilled chicken, crisp lettuce, and our house sauce.', price: 850, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85', alt: 'Chicken burger with lettuce, tomato and melted cheese', rating: '4.9' },
  { id: 'zinger-burger', category: 'fast-food', name: 'Zinger Burger', description: 'Crunchy chicken fillet, slaw, and creamy pepper mayo.', price: 980, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85', alt: 'Crispy fried chicken sandwich with fresh toppings', rating: '4.8' },
  { id: 'beef-burger', category: 'fast-food', name: 'Beef Burger', description: 'Smash-grilled beef, cheddar, pickles, and red onion.', price: 1150, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85', alt: 'Juicy beef cheeseburger with pickles and sauce', rating: '4.8' },
  { id: 'loaded-fries', category: 'fast-food', name: 'Loaded Fries', description: 'Crisp fries, melted cheese, jalapeño, and house drizzle.', price: 620, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85', alt: 'Golden loaded fries with melted cheese and toppings', rating: '4.7' },
  { id: 'chicken-nuggets', category: 'chicken', name: 'Chicken Nuggets', description: 'Golden, tender bites with a smoky dipping sauce.', price: 690, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85', alt: 'Crispy golden chicken nuggets served with dipping sauce', rating: '4.7' },
  { id: 'fried-chicken', category: 'chicken', name: 'Crispy Fried Chicken', description: 'Juicy chicken under a seasoned, crunchy coating.', price: 1250, image: 'https://images.unsplash.com/photo-1730900737724-5b752e1ed3dd?auto=format&fit=crop&w=900&q=85', alt: 'Golden fried chicken with lemon on a dark plate', rating: '4.9' },
  { id: 'chicken-wings', category: 'chicken', name: 'Chicken Wings', description: 'Sticky, smoky wings tossed in our signature glaze.', price: 990, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85', alt: 'Saucy glazed chicken wings ready to share', rating: '4.8' },
  { id: 'chicken-strips', category: 'chicken', name: 'Chicken Strips', description: 'Crisp hand-breaded strips with cool garlic dip.', price: 820, image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85', alt: 'Breaded chicken strips served with dipping sauce', rating: '4.7' },
  { id: 'fajita-pizza', category: 'pizza', name: 'Chicken Fajita Pizza', description: 'Spiced chicken, peppers, mozzarella, and a little heat.', price: 1850, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85', alt: 'Freshly baked pizza topped with chicken and peppers', rating: '4.9' },
  { id: 'bbq-pizza', category: 'pizza', name: 'BBQ Chicken Pizza', description: 'Smoky BBQ chicken, red onion, and melted cheese.', price: 1850, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85', alt: 'Barbecue chicken pizza with melted cheese', rating: '4.8' },
  { id: 'cheese-pizza', category: 'pizza', name: 'Classic Cheese Pizza', description: 'Bubbling mozzarella, tomato, basil, and crisp crust.', price: 1450, image: 'https://images.unsplash.com/photo-1689793606758-6e9de1953a67?auto=format&fit=crop&w=900&q=85', alt: 'Cheese pizza with basil leaves and a golden crust', rating: '4.8' },
  { id: 'chicken-lasagna', category: 'pasta', name: 'Chicken Lasagna', description: 'Layered pasta, tender chicken, tomato, and béchamel.', price: 1450, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85', alt: 'Baked lasagna layered with sauce and golden cheese', rating: '4.8' },
  { id: 'beef-lasagna', category: 'pasta', name: 'Beef Lasagna', description: 'Slow-cooked beef ragù tucked between pasta and cheese.', price: 1580, image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=85', alt: 'Rich beef lasagna baked with tomato sauce and cheese', rating: '4.8' },
  { id: 'alfredo-pasta', category: 'pasta', name: 'Alfredo Pasta', description: 'Creamy parmesan sauce, herbs, and grilled chicken.', price: 1320, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85', alt: 'Creamy chicken Alfredo pasta with fresh herbs', rating: '4.7' },
  { id: 'chicken-chow-mein', category: 'chinese', name: 'Chicken Chow Mein', description: 'Wok-tossed noodles, chicken, greens, and sesame.', price: 990, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85', alt: 'Wok-tossed chicken chow mein noodles with vegetables', rating: '4.8' },
  { id: 'chicken-manchurian', category: 'chinese', name: 'Chicken Manchurian', description: 'Crisp chicken in a tangy, gently spiced sauce.', price: 1180, image: 'https://cupofyum.com/uploads/images/000/195/302/195302-chicken-manchurian-d6a319311e9c7a4dcde7af5d8c0093b4.webp', alt: 'Crispy chicken Manchurian with glossy sauce, peppers, and spring onion', rating: '4.7' },
  { id: 'fried-rice', category: 'chinese', name: 'Chicken Fried Rice', description: 'Wok-fried rice with chicken, egg, and spring onion.', price: 920, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85', alt: 'Chicken fried rice with vegetables and spring onion', rating: '4.7' },
  { id: 'chicken-biryani', category: 'pakistani', name: 'Chicken Biryani', description: 'Fragrant basmati, tender chicken, and house masala.', price: 1190, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85', alt: 'Pakistani chicken biryani with fragrant spiced rice', rating: '4.9' },
  { id: 'chicken-karahi', category: 'pakistani', name: 'Chicken Karahi', description: 'Tomato, green chilli, ginger, and fresh coriander.', price: 1650, image: 'assets/images/karahi.jpg', alt: 'Pakistani chicken karahi cooked with tomato and green chilli', rating: '4.9' },
  { id: 'chicken-handi', category: 'pakistani', name: 'Chicken Handi', description: 'Slow-simmered chicken in a creamy tomato masala.', price: 1590, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85', alt: 'Chicken handi in a rich tomato and cream sauce', rating: '4.8' },
  { id: 'nihari', category: 'pakistani', name: 'Beef Nihari', description: 'Overnight-simmered beef, ginger, and warm spices.', price: 1720, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85', alt: 'Slow-cooked beef nihari with traditional garnish', rating: '4.9' },
  { id: 'chocolate-cake', category: 'desserts', name: 'Chocolate Cake', description: 'Dark chocolate layers with a soft, rich center.', price: 690, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85', alt: 'Rich layered chocolate cake with chocolate frosting', rating: '4.9' },
  { id: 'brownie', category: 'desserts', name: 'Fudge Brownie', description: 'Warm, deeply chocolatey, and crisp at the edges.', price: 420, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85', alt: 'Fudgy chocolate brownie with a crackled top', rating: '4.8' },
  { id: 'cheesecake', category: 'desserts', name: 'Classic Cheesecake', description: 'Silky baked cheesecake with a buttery crumb base.', price: 720, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85', alt: 'Creamy cheesecake slice with a crumb crust', rating: '4.8' },
  { id: 'ice-cream', category: 'desserts', name: 'Vanilla Ice Cream', description: 'A cool, creamy scoop made for a sweet finish.', price: 380, image: 'https://images.unsplash.com/photo-1568903880699-b53f3e0c2b96?auto=format&fit=crop&w=900&q=85', alt: 'A bowl of creamy vanilla ice cream scoops', rating: '4.7' },
  { id: 'milkshake', category: 'drinks', name: 'Chocolate Milkshake', description: 'Thick chocolate shake blended fresh to order.', price: 560, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85', alt: 'Thick chocolate milkshake topped with cream', rating: '4.8' },
  { id: 'mango-lassi', category: 'drinks', name: 'Mango Lassi', description: 'Chilled yogurt and mango blended until smooth.', price: 420, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85', alt: 'Chilled mango smoothie served in a glass', rating: '4.8' }
];

const cart = {};
const favorites = new Set();
const money = value => `PKR ${value.toLocaleString('en-PK')}`;
const getItem = id => menuItems.find(item => item.id === id);
const menuGrid = document.querySelector('#menu-grid');
const categoryNav = document.querySelector('#category-nav');
const cartCount = document.querySelector('#cart-count');
const cartContent = document.querySelector('#cart-content');
const cartTotal = document.querySelector('#cart-total');
const checkoutTotal = document.querySelector('#checkout-total');
const cartDrawer = document.querySelector('#cart-drawer');
const drawerBackdrop = document.querySelector('#drawer-backdrop');
const checkoutModal = document.querySelector('#checkout-modal');
const checkoutBackdrop = document.querySelector('#checkout-backdrop');
const toast = document.querySelector('#toast');
const menuSearch = document.querySelector('#menu-search');
const filterStatus = document.querySelector('#menu-filter-status');
const clearSearch = document.querySelector('#clear-search');
let currentCategory = 'all';
let currentQuery = '';
let cartReturnFocus = null;
let checkoutReturnFocus = null;
let toastTimer;

function renderCategories() {
  categoryNav.innerHTML = categories.map(category => `<button class="category-card${category.id === currentCategory ? ' is-active' : ''}" type="button" data-category="${category.id}" aria-pressed="${category.id === currentCategory}"><span class="category-image-circle"><img class="category-image" src="${categoryImages[category.id]}" alt="" loading="lazy" onerror="this.onerror=null;this.src='assets/images/image-placeholder.svg';"></span><span>${category.name}</span><span class="category-arrow" aria-hidden="true">↗</span></button>`).join('');
}

function renderMenu() {
  const query = currentQuery.trim().toLocaleLowerCase();
  const visibleItems = menuItems.filter(item => (currentCategory === 'all' || item.category === currentCategory) && (!query || `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase().includes(query)));
  const label = categories.find(category => category.id === currentCategory)?.name || 'All dishes';
  filterStatus.textContent = query ? `${visibleItems.length} result${visibleItems.length === 1 ? '' : 's'} for “${currentQuery.trim()}”` : currentCategory === 'all' ? `Showing ${visibleItems.length} popular dishes` : `${label} · ${visibleItems.length} dish${visibleItems.length === 1 ? '' : 'es'}`;
  clearSearch.hidden = !query;
  menuGrid.innerHTML = visibleItems.length ? visibleItems.map(item => `
    <article class="menu-card">
      <div class="menu-card-image"><img src="${item.image}" alt="${item.alt}" loading="lazy" data-dish-image="${item.id}" onerror="this.onerror=null;this.src='assets/images/image-placeholder.svg';this.alt='Photo unavailable: ${item.name}';this.closest('.menu-card-image').classList.add('image-placeholder');"><button class="favorite-button${favorites.has(item.id) ? ' is-favorite' : ''}" type="button" data-favorite="${item.id}" aria-label="${favorites.has(item.id) ? 'Remove' : 'Add'} ${item.name} ${favorites.has(item.id) ? 'from' : 'to'} favorites" aria-pressed="${favorites.has(item.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.9c0 5.3-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.9A4.4 4.4 0 0 1 12 6.7a4.4 4.4 0 0 1 8.8 2.2Z"></path></svg></button><span class="dish-rating">★ ${item.rating}</span></div>
      <div class="menu-card-body"><div class="menu-card-header"><h3>${item.name}</h3><span class="price">${money(item.price)}</span></div><p class="dish-description">${item.description}</p><div class="menu-card-meta"><span>◷ &nbsp;25–35 min</span><span>Freshly made</span></div><button class="add-button" type="button" data-add="${item.id}">Add to bag <span aria-hidden="true">+</span></button></div>
    </article>`).join('') : '<p class="no-results">No dishes found. Try another search or choose a different category.</p>';
}

function cartEntries() {
  return Object.entries(cart).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => ({ item: getItem(id), quantity })).filter(entry => entry.item);
}

function renderCart() {
  const entries = cartEntries();
  const count = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = entries.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  cartCount.textContent = count;
  cartContent.innerHTML = entries.length ? entries.map(({ item, quantity }) => `
    <div class="cart-item"><img src="${item.image}" alt="${item.alt}" onerror="this.onerror=null;this.src='assets/images/image-placeholder.svg';this.alt='Photo unavailable: ${item.name}';"><div><h3>${item.name}</h3><p>${money(item.price)}</p><div class="qty-controls"><button type="button" data-decrease="${item.id}" aria-label="Decrease ${item.name}">−</button><span aria-label="Quantity ${quantity}">${quantity}</span><button type="button" data-increase="${item.id}" aria-label="Increase ${item.name}">+</button></div></div><span class="item-total">${money(item.price * quantity)}</span></div>`).join('') : '<p class="empty-cart">Your bag is waiting for something delicious.<br><br><a class="text-link" href="#menu" data-close-cart>Browse the menu →</a></p>';
  cartTotal.textContent = money(total);
  checkoutTotal.textContent = money(total);
  document.querySelector('#checkout-trigger').disabled = !entries.length;
}

function addToCart(id) {
  const item = getItem(id);
  if (!item) return;
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast(`${item.name} added to your bag`);
}

function changeQuantity(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setOverlay(element, visible) { element.hidden = !visible; }
function setModalState(element, visible) {
  element.setAttribute('aria-hidden', String(!visible));
  element.inert = !visible;
}

function openCart() {
  cartReturnFocus = document.activeElement;
  setOverlay(drawerBackdrop, true);
  setModalState(cartDrawer, true);
  cartDrawer.classList.add('is-open');
  document.querySelector('#close-cart').focus();
}
function closeCart(restoreFocus = true) {
  cartDrawer.classList.remove('is-open');
  setModalState(cartDrawer, false);
  setOverlay(drawerBackdrop, false);
  if (restoreFocus && cartReturnFocus?.focus) cartReturnFocus.focus();
}
function openCheckout() {
  if (!cartEntries().length) return;
  checkoutReturnFocus = cartReturnFocus || document.activeElement;
  closeCart(false);
  setOverlay(checkoutBackdrop, true);
  setModalState(checkoutModal, true);
  checkoutModal.classList.add('is-open');
  checkoutModal.querySelector('input').focus();
}
function closeCheckout(restoreFocus = true) {
  checkoutModal.classList.remove('is-open');
  setModalState(checkoutModal, false);
  setOverlay(checkoutBackdrop, false);
  if (restoreFocus && checkoutReturnFocus?.focus) checkoutReturnFocus.focus();
}

function focusableWithin(element) {
  return [...element.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(node => !node.hidden && node.getAttribute('aria-hidden') !== 'true');
}

function goToCategory(category) {
  currentCategory = categories.some(entry => entry.id === category) ? category : 'all';
  renderCategories();
  renderMenu();
}

categoryNav.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  goToCategory(button.dataset.category);
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
menuGrid.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  const favoriteButton = event.target.closest('[data-favorite]');
  if (addButton) addToCart(addButton.dataset.add);
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    renderMenu();
  }
});
cartContent.addEventListener('click', event => {
  const decrease = event.target.closest('[data-decrease]');
  const increase = event.target.closest('[data-increase]');
  if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  if (increase) changeQuantity(increase.dataset.increase, 1);
  if (event.target.closest('[data-close-cart]')) closeCart();
});

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  currentQuery = menuSearch.value;
  renderMenu();
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector('#search-form button').addEventListener('click', event => {
  if (window.matchMedia('(max-width: 620px)').matches && document.activeElement !== menuSearch && !menuSearch.value) {
    event.preventDefault();
    menuSearch.focus();
  }
});
menuSearch.addEventListener('input', () => {
  if (!menuSearch.value) { currentQuery = ''; renderMenu(); }
});
clearSearch.addEventListener('click', () => { menuSearch.value = ''; currentQuery = ''; renderMenu(); menuSearch.focus(); });
document.querySelectorAll('[data-hero-category], [data-restaurant-category], [data-footer-category]').forEach(link => link.addEventListener('click', () => goToCategory(link.dataset.heroCategory || link.dataset.restaurantCategory || link.dataset.footerCategory)));

document.querySelector('#open-cart').addEventListener('click', openCart);
document.querySelector('#close-cart').addEventListener('click', () => closeCart());
drawerBackdrop.addEventListener('click', () => closeCart());
document.querySelector('#checkout-trigger').addEventListener('click', openCheckout);
document.querySelector('#close-checkout').addEventListener('click', () => closeCheckout());
checkoutBackdrop.addEventListener('click', () => closeCheckout());

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (checkoutModal.classList.contains('is-open')) closeCheckout();
    else if (cartDrawer.classList.contains('is-open')) closeCart();
    document.querySelector('.main-nav').classList.remove('is-open');
    document.querySelector('#mobile-menu-toggle').setAttribute('aria-expanded', 'false');
  }
  const activeModal = checkoutModal.classList.contains('is-open') ? checkoutModal : cartDrawer.classList.contains('is-open') ? cartDrawer : null;
  if (event.key === 'Tab' && activeModal) {
    const focusable = focusableWithin(activeModal);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.querySelector('#checkout-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  if (!cartEntries().length) { status.textContent = 'Add a dish to your bag before placing an order.'; return; }
  let valid = true;
  [...form.querySelectorAll('input[required]')].forEach(field => {
    const error = field.parentElement.querySelector('.form-error');
    let message = '';
    if (!field.value.trim()) message = 'Please fill in this field.';
    else if (field.name === 'phone' && (field.value.replace(/\D/g, '').length < 10 || field.value.replace(/\D/g, '').length > 15)) message = 'Please enter a valid phone number.';
    error.textContent = message;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (message) valid = false;
  });
  if (!valid) { status.textContent = 'Please check the highlighted fields.'; form.querySelector('[aria-invalid="true"]')?.focus(); return; }
  const name = form.elements.name.value.trim().split(/\s+/)[0];
  Object.keys(cart).forEach(id => delete cart[id]);
  renderCart();
  form.reset();
  form.querySelectorAll('[aria-invalid]').forEach(field => field.removeAttribute('aria-invalid'));
  status.textContent = '';
  closeCheckout(false);
  showToast(`Thank you, ${name}. Your order has been received.`);
  document.querySelector('#open-cart').focus();
});

document.querySelectorAll('.checkout-form input').forEach(field => field.addEventListener('input', () => {
  field.removeAttribute('aria-invalid');
  field.parentElement.querySelector('.form-error').textContent = '';
}));

const mobileToggle = document.querySelector('#mobile-menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
mobileToggle.addEventListener('click', () => {
  const open = mobileToggle.getAttribute('aria-expanded') !== 'true';
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  primaryNav.classList.toggle('is-open', open);
});
primaryNav.addEventListener('click', event => {
  if (event.target.closest('a')) { primaryNav.classList.remove('is-open'); mobileToggle.setAttribute('aria-expanded', 'false'); mobileToggle.setAttribute('aria-label', 'Open navigation'); }
});
document.querySelector('.profile-trigger').addEventListener('click', () => showToast('Profile features are coming soon.'));

const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('[data-slide-indicator]')];
let activeSlide = 0;
let heroTimer;
let autoplayPaused = false;
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === activeSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
    slide.inert = !active;
  });
  dots.forEach((dot, dotIndex) => { const active = dotIndex === activeSlide; dot.classList.toggle('is-active', active); dot.setAttribute('aria-current', String(active)); });
  document.querySelector('.hero-autoplay-label').innerHTML = `0${activeSlide + 1} <span></span> 03 &nbsp; / &nbsp; AUTO PLAY`;
}
function startHeroTimer() {
  clearInterval(heroTimer);
  if (!autoplayPaused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) heroTimer = setInterval(() => showSlide(activeSlide + 1), 3000);
}
document.querySelector('#hero-play-toggle').addEventListener('click', event => {
  autoplayPaused = !autoplayPaused;
  const button = event.currentTarget;
  button.textContent = autoplayPaused ? '▶' : 'Ⅱ';
  button.setAttribute('aria-label', autoplayPaused ? 'Resume automatic slides' : 'Pause automatic slides');
  button.setAttribute('aria-pressed', String(autoplayPaused));
  startHeroTimer();
});
document.addEventListener('visibilitychange', () => document.hidden ? clearInterval(heroTimer) : startHeroTimer());

let activeReview = 0;
const reviews = [...document.querySelectorAll('.review-card')];
let reviewTimer;
function showReview(index) {
  activeReview = (index + reviews.length) % reviews.length;
  reviews.forEach((review, reviewIndex) => { review.classList.toggle('is-active', reviewIndex === activeReview); review.setAttribute('aria-hidden', String(reviewIndex !== activeReview)); });
}
function startReviewTimer() {
  clearInterval(reviewTimer);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) reviewTimer = setInterval(() => showReview(activeReview + 1), 3000);
}

renderCategories();
renderMenu();
renderCart();
showReview(0);
startReviewTimer();
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  autoplayPaused = true;
  const playToggle = document.querySelector('#hero-play-toggle');
  playToggle.textContent = '▶';
  playToggle.setAttribute('aria-label', 'Resume automatic slides');
  playToggle.setAttribute('aria-pressed', 'true');
}
startHeroTimer();
