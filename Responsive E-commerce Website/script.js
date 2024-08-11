document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.cart a');
    const buttons = document.querySelectorAll('.product-card button');
    let cartCount = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cart.textContent = `Cart (${cartCount})`;
            alert('Product added to cart!');
        });
    });
});
