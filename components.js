const components = {
    navbar: `
        <header class="app-header">
            <a href="index.html" class="app-brand">
                <img src="assets/images/logo.png" alt="Dotcom Wellness" class="app-logo">
            </a>
            <div class="app-header-actions">
                <button class="header-action-btn" id="themeToggleBtn" title="Toggle Theme" style="background: none; border: none; cursor: pointer; color: var(--text-primary);">
                    <svg class="moon-icon" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    <svg class="sun-icon" style="display: none;" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
                <a href="#" class="header-action-btn" id="navCartBtn" title="Cart">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span class="header-cart-badge" id="cartBadge">0</span>
                </a>
            </div>
        </header>
    `,
    footer: `
        <nav class="app-bottom-nav">
            <a href="index.html" class="nav-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Home</span>
            </a>
            <a href="products.html" class="nav-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span>Products</span>
            </a>
            <a href="skill-up.html" class="nav-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                <span>Skill-Up</span>
            </a>
            <a href="blog.html" class="nav-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <span>Blog</span>
            </a>
            <a href="about.html" class="nav-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span>About</span>
            </a>
        </nav>
    `,
    cartModal: `
        <!-- Checkout Modal -->
        <div class="checkout-modal" id="checkoutModal">
            <div class="checkout-content">
                <button class="close-modal" id="closeModal">&times;</button>
                <h2 class="checkout-title">Complete Order</h2>
                
                <div class="cart-items" id="cartItemsContainer">
                    <!-- Items injected here by JS -->
                </div>
                
                <div class="cart-total" style="font-size: 1.25rem; font-weight: 700; text-align: right; margin-bottom: 2rem; color: var(--text-primary);">
                    Total: K<span id="cartTotalSum">0</span>
                </div>

                <div class="checkout-form">
                    <div class="form-group">
                        <label for="receiverName">Receiver Name</label>
                        <input type="text" id="receiverName" placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="deliveryAddress">Delivery Address</label>
                        <textarea id="deliveryAddress" rows="3" placeholder="Street, City, Province"></textarea>
                    </div>
                    <button class="btn btn-primary" id="submitOrderBtn" style="width: 100%;">Submit Order via WhatsApp</button>
                </div>
            </div>
        </div>
    `,
    whatsappSupport: `
        <div class="whatsapp-support-container">
            <div class="wa-chat-popup" id="waChatPopup">
                <div class="wa-chat-header">
                    <img src="assets/images/logo.png" alt="Support">
                    <div class="wa-chat-header-info">
                        <h4>Dotcom Wellness</h4>
                        <p>Typically replies within minutes</p>
                    </div>
                </div>
                <div class="wa-chat-body">
                    <div class="wa-chat-bubble">
                        Hello Livingstone Norland champions here how can we help you?
                    </div>
                </div>
                <div class="wa-chat-footer">
                    <input type="text" id="waUserInput" placeholder="Type your message...">
                    <button class="wa-chat-send" id="waSendBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
            <div class="wa-floating-btn" id="waFloatingBtn">
                <div class="wa-waves"></div>
                <div class="wa-waves"></div>
                <img src="assets/images/WhatsApp.svg.webp" alt="WhatsApp">
            </div>
        </div>
    `
};

// Function to inject components once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = components.navbar;
    }

    // Theme Toggle Initialization
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'block';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (moonIcon) moonIcon.style.display = 'block';
            if (sunIcon) sunIcon.style.display = 'none';
        }
    }

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                applyTheme(false);
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme(true);
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = components.footer;
        
        // Highlight active link in bottom nav
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = footerPlaceholder.querySelectorAll('.nav-item');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Inject Cart Modal to body globally
    const body = document.querySelector('body');
    if (body && !document.getElementById('checkoutModal')) {
        body.insertAdjacentHTML('beforeend', components.cartModal);

        let cart = [];
        const cartBadge = document.getElementById('cartBadge');
        const navCartBtn = document.getElementById('navCartBtn');
        const checkoutModal = document.getElementById('checkoutModal');
        const closeModal = document.getElementById('closeModal');
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const submitOrderBtn = document.getElementById('submitOrderBtn');

        function updateCartUI() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (cartBadge) cartBadge.textContent = totalItems;
        }

        function renderCartItems() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
                document.getElementById('cartTotalSum').textContent = '0';
                return;
            }
            let currentTotal = 0;
            cartItemsContainer.innerHTML = '';
            cart.forEach((item, index) => {
                currentTotal += item.price * item.quantity;
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>K${item.price}</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn minus" data-index="${index}">-</button>
                        <div class="qty-display">${item.quantity}</div>
                        <button class="qty-btn plus" data-index="${index}">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
            document.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.target.getAttribute('data-index'));
                    if (e.target.classList.contains('plus')) {
                        cart[idx].quantity++;
                    } else if (e.target.classList.contains('minus')) {
                        cart[idx].quantity--;
                        if (cart[idx].quantity === 0) cart.splice(idx, 1);
                    }
                    updateCartUI();
                    renderCartItems();
                });
            });
            document.getElementById('cartTotalSum').textContent = currentTotal;
        }

        function openModal() {
            renderCartItems();
            checkoutModal.classList.add('active');
        }

        function hideModal() {
            checkoutModal.classList.remove('active');
        }

        if (navCartBtn) {
            navCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        }
        if (closeModal) closeModal.addEventListener('click', hideModal);
        if (checkoutModal) {
            checkoutModal.addEventListener('click', (e) => {
                if (e.target === checkoutModal) hideModal();
            });
        }

        document.querySelectorAll('.product-card').forEach(card => {
            const titleRaw = card.getAttribute('data-name') || card.querySelector('h3').childNodes[0].nodeValue.trim();
            const priceRaw = parseInt(card.getAttribute('data-price')) || 680;
            const addBtn = card.querySelector('.action-add');
            const orderBtn = card.querySelector('.action-order');

            function addToCart() {
                const existing = cart.find(item => item.name === titleRaw);
                if (existing) {
                    existing.quantity++;
                } else {
                    cart.push({ name: titleRaw, price: priceRaw, quantity: 1 });
                }
                updateCartUI();
            }

            if (addBtn) addBtn.addEventListener('click', (e) => { e.preventDefault(); addToCart(); });
            if (orderBtn) orderBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!cart.find(item => item.name === titleRaw)) addToCart();
                openModal();
            });
        });

        if (submitOrderBtn) {
            submitOrderBtn.addEventListener('click', () => {
                const receiver = document.getElementById('receiverName').value.trim();
                const address = document.getElementById('deliveryAddress').value.trim();
                if (cart.length === 0) { alert('Your cart is empty.'); return; }
                if (!receiver || !address) { alert('Please fill in both name and delivery address.'); return; }
                let message = `*New Order from Dotcom Wellness*\n\n*Receiver:* ${receiver}\n*Address:* ${address}\n\n*Items:*\n`;
                let total = 0;
                cart.forEach(item => {
                    const itemTotal = item.quantity * item.price;
                    total += itemTotal;
                    message += `- ${item.quantity}x ${item.name} (K${itemTotal})\n`;
                });
                message += `\n*Grand Total: K${total}*`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/260973493949?text=${encodedMessage}`, '_blank');
                cart = [];
                updateCartUI();
                hideModal();
            });
        }

        updateCartUI();
    }

    // Inject WhatsApp Support
    if (body && !document.getElementById('waFloatingBtn')) {
        body.insertAdjacentHTML('beforeend', components.whatsappSupport);

        const waFloatingBtn = document.getElementById('waFloatingBtn');
        const waChatPopup = document.getElementById('waChatPopup');
        const waSendBtn = document.getElementById('waSendBtn');
        const waUserInput = document.getElementById('waUserInput');

        waFloatingBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            waChatPopup.classList.toggle('active');
            if (waChatPopup.classList.contains('active')) waUserInput.focus();
        });

        document.addEventListener('click', (e) => {
            if (!waChatPopup.contains(e.target) && !waFloatingBtn.contains(e.target)) {
                waChatPopup.classList.remove('active');
            }
        });

        const handleWASend = () => {
            const message = waUserInput.value.trim();
            if (!message) return;
            navigator.clipboard.writeText(message).catch(() => {});
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/260973493949?text=${encodedMessage}`, '_blank');
            waUserInput.value = '';
            waChatPopup.classList.remove('active');
        };

        waSendBtn.addEventListener('click', handleWASend);
        waUserInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleWASend(); });
    }
});
