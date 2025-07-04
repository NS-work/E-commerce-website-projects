const radioButtons = document.getElementsByName('Category');

const cartItems = document.querySelectorAll('.cart-sec .cart');

radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
        const filterValue = this.value;

        cartItems.forEach(function(item) {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.style.display = ''; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    });
});

const ratingRadios = document.getElementsByName('rating');
ratingRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        const selectedRating = this.value;

        cartItems.forEach(function(item) {
            const itemRating = parseInt(item.getAttribute('data-rating'));

            if (selectedRating === 'all' || itemRating >= parseInt(selectedRating)) {
                item.style.display = ''; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    });
});
