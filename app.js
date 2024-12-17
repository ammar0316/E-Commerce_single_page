
let products = [
  {
    id1: 1,
    image: "cloths.jpeg",
    proName: "Branded Shoes",
    price: "$500",
    caption:
      "This is a very high quality shoes that we are offering at an affordable price.",
  },
  {
    id1: 2,
    image: "watch.jpeg",
    proName: "Stylish Watch",
    price: "$500",
    caption:
      "This is a stylish watch that we are offering at an affordable price.",
  },
  {
    id1: 3,
    image: "shoes.jpeg",
    proName: "Branded Shoes",
    price: "$500",
    caption:
      "This is a very high quality shoes that we are offering at an affordable price.",
  },
  {
    id1: 4,
    image: "lays.jpeg",
    proName: "Lays",
    price: "$5",
    caption: "This is a very unique and slim lays that are very tasty.",
  },
  {
    id1: 5,
    image: "eyeGlass.jpeg",
    proName: "Smart EyeGlass",
    price: "$500",
    caption:
      "This is a very high quality EyeGlass that we are offering at an affordable price.",
  },
  {
    id1: 6,
    image: "earphone.jpeg",
    proName: "Wireless Earphone",
    price: "$500",
    caption:
      "This is a very relaxing earphone that we are offering at an affordable price.",
  },
];

function creatElementAndSetAtr() {
  const productDisplay = document.querySelector(".productDisplay");
  productDisplay.innerHTML = ""; 
  products.map((product) => {
    const productCard = document.createElement("div");
    productCard.className = "productCard"
    productCard.setAttribute("id", `product-${product.id1}`);

    productCard.innerHTML = `
            <img src="${product.image}">
            <h3>${product.proName}</h3>
            <p>${product.caption}</p>
            <h2>${product.price}</h2>
            <button onclick="deleteProduct(${product.id1})">Delete</button>
        `;

    productDisplay.appendChild(productCard);
    
});
if (products.length === 0) {
    productDisplay.innerHTML = ` <h3>Product is not found!! </h3>`
}

}

function deleteProduct(id) {
    products = products.filter(product => product.id1 !== id); 
   
    creatElementAndSetAtr(); 
   
}

creatElementAndSetAtr();



