/* ====== Data ====== */
const categories = [
  {emoji:'💻', title:'کالای دیجیتال', sub:'موبایل، لپ‌تاپ، تبلت'},
  {emoji:'👗', title:'مد و پوشاک', sub:'لباس، کیف، کفش'},
  {emoji:'🏠', title:'خانه و آشپزخانه', sub:'دکور، لوازم خانگی'},
  {emoji:'🥗', title:'سوپرمارکت', sub:'مواد غذایی، نوشیدنی'},
  {emoji:'📚', title:'کتاب و لوازم تحریر', sub:'کتاب، نوشت‌افزار'},
  {emoji:'🏋️', title:'ورزش و سفر', sub:'مکمل، لوازم ورزشی'},
  {emoji:'🧸', title:'اسباب‌بازی و کودک', sub:'عروسک، پازل، سیسمونی'},
  {emoji:'💄', title:'زیبایی و سلامت', sub:'آرایشی، بهداشتی'},
  {emoji:'🚗', title:'خودرو و موتورسیکلت', sub:'لوازم یدکی، قطعات'},
  {emoji:'💎', title:'طلا و جواهرات', sub:'طلا، نقره، ساعت'},
  {emoji:'🎮', title:'گیم و کنسول', sub:'کنسول، بازی'},
  {emoji:'🌱', title:'کشاورزی و باغبانی', sub:'بذر، ابزار باغ'},
];

const products = [
  {emoji:'📱', name:'گوشی هوشمند گلکسی S25', rating:'۴.۸', price:'۸۵,۵۰۰,۰۰۰', badge:'پرفروش'},
  {emoji:'💻', name:'لپ‌تاپ ایسوس Zenbook 14', rating:'۴.۷', price:'۱۲۹,۰۰۰,۰۰۰', badge:'تخفیف'},
  {emoji:'⌚', name:'ساعت هوشمند اپل واچ S10', rating:'۴.۹', price:'۴۲,۰۰۰,۰۰۰', badge:''},
  {emoji:'🎧', name:'هدفون بی‌سیم سونی WH-1000XM5', rating:'۴.۹', price:'۱۸,۵۰۰,۰۰۰', badge:'پرفروش'},
  {emoji:'👟', name:'کفش رانینگ نایک ایر', rating:'۴.۵', price:'۳,۸۰۰,۰۰۰', badge:''},
  {emoji:'📚', name:'کتاب هنر شفاف اندیشیدن', rating:'۴.۶', price:'۲۸۰,۰۰۰', badge:'جدید'},
  {emoji:'🏋️', name:'مکمل پروتئین وی ۲ کیلویی', rating:'۴.۷', price:'۲,۴۰۰,۰۰۰', badge:''},
  {emoji:'🕶️', name:'عینک آفتابی ریبن اصلی', rating:'۴.۴', price:'۵,۲۰۰,۰۰۰', badge:'تخفیف'},
];

/* ====== Render ====== */
const catGrid = document.getElementById('catGrid');
catGrid.innerHTML = categories.map(c =>
  `<div class="cat-card glass">
    <span class="cat-emoji">${c.emoji}</span>
    <h4>${c.title}</h4>
    <p>${c.sub}</p>
  </div>`
).join('');

const productGrid = document.getElementById('productGrid');
const renderProducts = (list) => {
  productGrid.innerHTML = list.map(p =>
    `<div class="product glass">
      <div class="product-img">${p.emoji}</div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="product-rating">⭐ ${p.rating} از ۵</div>
        <div class="product-price">
          <span class="price">${p.price} تومان</span>
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        </div>
      </div>
    </div>`
  ).join('');
};
renderProducts(products);

/* ====== Live search ====== */
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { renderProducts(products); return; }
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.badge.toLowerCase().includes(q)
  );
  renderProducts(filtered.length ? filtered : products);
});

/* ====== Theme toggle ====== */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

/* ====== Scroll-to-top ====== */
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 400);
});
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ====== Newsletter ====== */
document.getElementById('newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  alert(`✅ عضویت شما با ایمیل ${email} با موفقیت ثبت شد!`);
  e.target.reset();
});
