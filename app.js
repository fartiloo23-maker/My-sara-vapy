const products = [
    {
        name: "VENENO",
        price: "500 MAD",
        image: "IMG_1864.jpeg"
    },
    {
        name: "UNLIMITED",
        price: "500 MAD",
        image: "IMG_1865.jpeg"
    },
    {
        name: "Product 3",
        price: "500 MAD",
        image: "IMG_1866.jpeg"
    }
];

const container = document.getElementById("products");

products.forEach(p => {
    container.innerHTML += `
        <div class="product-card">
            <img src="${p.image}" class="product-img">
            <h3 class="product-title">${p.name}</h3>
            <p class="product-price">${p.price}</p>
            <a class="buy-btn" href="https://wa.me/212600000000">اطلب الآن</a>
        </div>
    `;
});
