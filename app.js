const productsData = [
  {
    id: 1,
    title: "ARMANI PRIVE Rose d’Arabie",
    price: "Dh 3,250.00 MAD",
    img: "p1.jpg"
  },
  {
    id: 2,
    title: "ARMANI PRIVE Vert Malachite",
    price: "Dh 3,250.00 MAD",
    img: "p2.jpg"
  },
  {
    id: 3,
    title: "ARMANI PRIVE Indigo Tanzanite",
    price: "Dh 3,250.00 MAD",
    img: "p3.jpg"
  },
  {
    id: 4,
    title: "ARMANI PRIVE Magenta Tanzanite",
    price: "Dh 3,250.00 MAD",
    img: "p4.jpg"
  }
];

const productsContainer = document.getElementById("products");

// عرض المنتجات
productsData.forEach(p => {
  productsContainer.innerHTML += `
    <div class="col-6 col-md-4">
      <div class="product-card">
        <img src="${p.img}" class="product-img">
        <h5 class="product-title">${p.title}</h5>
        <p class="product-price">${p.price}</p>
      </div>
    </div>
  `;
});
