// Add interactivity to the "Buy Now" buttons
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });
});
// Initialize variables
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const buyButtons = document.querySelectorAll('.buy-button');

// Cart items and total
const cartData = [];
let cartTotal = 0;

// Function to update the cart display
function updateCartDisplay() {
    cartItems.innerHTML = '';
    cartTotal = 0;

    cartData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span><span>$${item.price}</span>`;
        cartItems.appendChild(li);
        cartTotal += item.price;
    });

    if (cartData.length > 0) {
        const totalLi = document.createElement('
