const products = [
    { id: 1, name: "Diabetis Schokolade", description: "Schokolade die dir mit einem Bissen diabetis gibt.", price: 10 },
    { id: 2, name: "ChatGPT ultra premium wow", description: "Hald ChatGPT ", price: 20 },
    { id: 3, name: "Mathieu", description: "Ein wildes Mathieu", price: 999999999 }
];

const cart = [];

function showPage(pageId) {
    document.querySelectorAll('main').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
    if (pageId === 'home-page') displayProducts();
    if (pageId === 'cart-page') displayCart();
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="viewProduct(${product.id})">View</button>
        `;
        productList.appendChild(productElement);
    });
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('add-to-cart').onclick = () => addToCart(productId);
    showPage('product-page');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to the cart.`);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function createAd() {
    const name = document.getElementById('ad-name').value;
    const description = document.getElementById('ad-description').value;
    const price = parseFloat(document.getElementById('ad-price').value);
    if (name && description && !isNaN(price)) {
        products.push({ id: products.length + 1, name, description, price });
        alert('Ad created successfully!');
        document.getElementById('ad-form').reset();
        showPage('home-page');
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Welcome, ${username}!`);
        document.getElementById('login-form').reset();
        showPage('home-page');
    } else {
        alert('Please enter a username and password.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
});