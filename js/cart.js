// import { pages } from './products.js';

// // يمكنك الآن استخدام pages
 

// let userCart = [];
 

// function addItemToBag(productId, event) {
//     event.preventDefault();

//     let productElement = event.target.closest(".add");
//     let productName = productElement.querySelector(".add-to-cart").textContent.trim();
//     let productPrice = parseFloat(productElement.getAttribute("data-price"));
//     let productImage = productElement.closest(".product-item").querySelector("img").src;

//     let existingProduct = userCart.find(item => item.id === productId);
//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         userCart.push({ id: productId, name: productName, price: productPrice, quantity: 1, image: productImage });
//     }

//     updateBagUI();
// }

// console.log(typeof addItemToBag);  // يجب أن تطبع "function" إذا كانت الدالة معرفة بشكل صحيح



// function updateBagUI() {
//     let cartContainer = document.querySelector(".cart-items");
//     let cartBadge = document.querySelector("#cart-icon .badge");
//     let subtotalElement = document.querySelector("#cart-subtotal");

//     cartContainer.innerHTML = "";
//     let subtotal = 0;
//     let totalItems = 0;

//     if (userCart.length === 0) {
//         cartContainer.innerHTML = `<p id="cart-status">No products in the bag</p>`;
//         cartBadge.textContent = "0";
//         subtotalElement.textContent = "$0.00";
//         return;
//     }

//     userCart.forEach(item => {
//         subtotal += item.price * item.quantity;
//         totalItems += item.quantity;
//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}">
//                 <p>${item.name}</p>
//                 <p>${item.quantity} × $${item.price.toFixed(2)}</p>
//                 <button onclick="removeFromBag('${item.id}')">&times;</button>
//             </div>
//         `;
//     });

//     cartBadge.textContent = totalItems;
//     subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

//     // إظهار القائمة المنسدلة
//     document.getElementById("cart-dropdown").style.display = "block";
// }

// console.log(userCart);

// function removeFromBag(productId) {
//     userCart = userCart.filter(item => item.id !== productId);
//     updateBagUI();
// }
