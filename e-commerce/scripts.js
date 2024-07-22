document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Lipstick', price: 19.99, image: 'lipstick.jfif' },
        { id: 2, name: 'Foundation', price: 29.99, image: 'foundation.jfif' },
        { id: 3, name: 'Mascara', price: 14.99, image: 'masc.jfif' },
        { id: 4, name: 'Compact', price: 24.99, image: 'compact.jfif' },
        { id: 4, name: 'Kajal', price: 26.69, image: ' kjl.png'}
    ];

    const productList = document.querySelector('.product-list');
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productItem.querySelector('button').addEventListener('click', () => {
            addToCart(product);
        });

        productList.appendChild(productItem);
    });

    function addToCart(product) {
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} has been added to the cart!`);
    }
});
