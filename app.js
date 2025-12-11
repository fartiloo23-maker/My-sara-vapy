const products = [
  {
    name: "Product 1",
    price: "500 MAD",
    image: "IMG_1864.jpeg"
  },
  {
    name: "Product 2",
    price: "500 MAD",
    image: "IMG_1865.jpeg"
  },
  {
    name: "Product 3",
    price: "500 MAD",
    image: "IMG_1866.jpeg"
  }
];

const container = document.getElementById("product-container");

products.forEach(p => {
  container.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" class="product-img" />
      <h3 class="product-title">${p.name}</h3>
      <p class="product-price">${p.price}</p>
    </div>
  `;
});
