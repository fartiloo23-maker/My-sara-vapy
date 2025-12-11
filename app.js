// بيانات المنتجات - عدّل "name" لاحقًا كما تريد
const products = [
  { name: "الاسم لاحقًا", price: "500 د.م", image: "IMG_1864.jpeg" },
  { name: "الاسم لاحقًا", price: "500 د.م", image: "IMG_1865.jpeg" },
  { name: "الاسم لاحقًا", price: "500 د.م", image: "IMG_1866.jpeg" }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");
  if (!container) return;

  // أنشئ البطاقات
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.className = "product-img";
    img.src = p.image;
    img.alt = p.name;

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = p.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = p.price;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    container.appendChild(card);
  });
});
