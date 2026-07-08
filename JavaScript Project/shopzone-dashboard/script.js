const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, category: "electronics" },
    { id: 2, name: "Smart Watch", price: 199.99, category: "electronics" },
    { id: 3, name: "Running Shoes", price: 79.99, category: "fitness" },
    { id: 4, name: "Leather Jacket", price: 149.99, category: "fashion" },
    { id: 5, name: "Yoga Mat", price: 29.99, category: "fitness" },
    { id: 6, name: "Gaming Mouse", price: 49.99, category: "electronics" }
];

let cart = JSON.parse(localStorage.getItem('shopzone_cart')) || [];

const productGrid = document.getElementById('product-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalAmount = document.getElementById('cart-total-amount');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div>
                <span class="product-badge">${product.category.toUpperCase()}</span>
                <h3>${product.name}</h3>
            </div>
            <div>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filtered);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateUI();
}

function updateUI() {
    localStorage.setItem('shopzone_cart', JSON.stringify(cart));

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>$${item.price} x ${item.quantity}</small>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalAmount.textContent = `$${totalCost.toFixed(2)}`;
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("🎉 Order placed successfully! Thank you for shopping.");
    cart = [];
    updateUI();
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

displayProducts(products);
updateUI();