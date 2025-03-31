function home() {
    window.location.href = "index.html";
}

function menu() {
    window.location.href = "menu.html";
}

function contact() {
    window.location.href = "contacts.html";
}

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

function order(item) {
    alert(`You have ordered: ${item.name}\nPrice: ${item.price}`);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-list");
    menuItems.forEach(item => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food");

        foodItem.innerHTML = `
            <div id="box-container">
                <div class="food">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="layer">
                        <h3>${item.name}</h3>
                        <p>${item.price}</p>
                        <button onclick="order(${JSON.stringify(item)})">Order Now</button>
                    </div>
                </div>
            </div>
        `;
        menuContainer.appendChild(foodItem);
    });
});
