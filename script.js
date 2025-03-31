// Sample menu data
const menuItems = [
    {
        name: "YES WITH JAVA RICE",
        price: "P 95.00",
        image: "pictures/y1.png"
    },
    {
        name: "YES NA YES W/ JAVA RICE",
        price: "P 139.00",
        image: "pictures/y2.png"
    },
    {
        name: "YES + HOTDOG W/ JAVA RICE",
        price: "P 129.00",
        image: "pictures/y3.png"
    },
    {
        name: "YES + TENGA W/ JAVA RICE",
        price: "P 129.00",
        image: "pictures/y4.png"
    },
    {
        name: "YES + ISAW BABOY W/ JAVA RICE",
        price: "P 129.00",
        image: "pictures/y5.png"
    },
    {
        name: "YES + ISAW MANOK W/ JAVA RICE",
        price: "P 129.00",
        image: "pictures/y6.png"
    },
    {
        name: "YES W/ FRIENDS",
        price: "P 235.00",
        image: "pictures/y7.png"
    },
    {
        name: "INIHAW NA LIEMPO W/ JAVA RICE",
        price: "P 229.00",
        image: "pictures/y8.png"
    },
    {
        name: "CHICKEN BBQ (LEG QUARTER) W/ JAVA RICE",
        price: "P 175.00",
        image: "pictures/y9.png"
    },
    {
        name: "INIHAW NA PORKCHOP W/ JAVA RICE",
        price: "P 125.00",
        image: "pictures/y10.png"
    },
    {
        name: "YES + ISAW BILOG W/ JAVA RICE",
        price: "P 135.00",
        image: "pictures/y11.png"
    },
    {
        name: "YES + BULAKLAK W/ JAVA RICE",
        price: "P 129.00",
        image: "pictures/y12.png"
    }
];

let cart = []; // Cart to store items added to cart

// Add item to cart
function addToCart(index) {
    const item = menuItems[index];
    cart.push(item); // Add item to the cart
    updateCartCount(); // Update cart count in the header
    alert(`Added ${item.name} to cart!`); // Give feedback to user
}

// Update the cart count in the header
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Update cart view in the modal
function updateCartView() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear current cart content
    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsList.appendChild(li);

        // Calculate total price (remove 'P' and convert to number)
        const price = parseFloat(item.price.replace('P', '').trim());
        total += price;
    });

    cartTotal.innerText = `Total: P${total.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartView();
}

// View Cart - Open the cart modal and display cart items
function viewCart() {
    const cartModal = document.getElementById("cart-modal");
    updateCartView();
    cartModal.style.display = "flex";
}

// Close Cart
function closeCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
        // Implement further checkout logic here (like payment gateway)
        cart = []; // Clear cart after checkout
        updateCartCount();
        closeCart();
    } else {
        alert("Your cart is empty!");
    }
}

// Dynamically load the menu items
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-list");
    
    // Clear any existing content
    menuContainer.innerHTML = '';
    
    menuItems.forEach((item, index) => {
        const boxContainer = document.createElement("div");
        boxContainer.id = "box-container";
        
        boxContainer.innerHTML = `
            <div class="food">
                <img src="${item.image}" alt="${item.name}">
                <div class="layer">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button onclick="addToCart(${index})">Order Now</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(boxContainer);
    });
});

// Navigation functions
function home() {
    window.location.href = "index.html";
}

function menu() {
    window.location.href = "menu.html";
}

function contact() {
    window.location.href = "contacts.html";
}