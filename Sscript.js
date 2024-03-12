// Service items data
const services = [
  { name: "Wheel Alignment", price: 50, image: "alling.jpg" },
  { name: "Tire Rotation", price: 30, image: "Tire-Rotation.png" },
  { name: "Flat Fix", price: 20, image: "flat-fix-icon.jpg" }
  // Add more services similarly
];

// Function to display service items
function displayServices() {
  const serviceContainer = document.getElementById("service-container");
  serviceContainer.innerHTML = '';
  services.forEach((service, index) => {
    const div = document.createElement("div");
    div.classList.add("service");
    div.innerHTML = `
            <img src="${service.image}" alt="${service.name}">
            <p>${service.name} - $${service.price}</p>
            <button class="add-to-cart" onclick="addToCart('${service.name}', ${service.price})">Add to Cart</button>
        `;
    serviceContainer.appendChild(div);
  });
}

// Shopping cart functionality
let cart = [];

function addToCart(serviceName, price) {
  cart.push({ serviceName, price });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.serviceName}: $${item.price}`;
    cartItems.appendChild(li);
  });
  updateTotal();
}

// Function to calculate total amount
function updateTotal() {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const nycSalesTaxRate = 0.08875; // NYC sales tax rate (8.875%)
  const nycOtherTaxRate = 0.05; // Example of another tax rate (5%)

  const salesTax = subtotal * nycSalesTaxRate;
  const otherTax = subtotal * nycOtherTaxRate;

  const totalWithTaxes = subtotal + salesTax + otherTax;

  // Display the total amount including taxes
  document.getElementById('total').textContent = `Total (including taxes): $${totalWithTaxes.toFixed(2)}`;
}

// Function to show the checkout form
function showCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-details');
  checkoutForm.style.display = 'block';
}

// Function to proceed to checkout
function checkout() {
  // Perform checkout process
  alert('Checkout completed successfully!');
  // Clear the cart and hide checkout form
  cart = [];
  displayCart();
  document.getElementById('checkout-details').style.display = 'none';
}

// Display service items when the page loads
window.onload = function() {
  displayServices();
};
