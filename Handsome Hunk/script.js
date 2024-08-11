document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart a');
    const addToCartButtons = document.querySelectorAll('.product-card button');

    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
            button.innerText = 'Added';
            button.disabled = true;
            setTimeout(() => {
                button.innerText = 'Add to Cart';
                button.disabled = false;
            }, 1500);
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = `Cart (${cartCount})`;
    }
});
