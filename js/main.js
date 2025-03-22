AOS.init();
//  .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

document.getElementById("profile-icon").addEventListener("click", function () {
  window.location.href = "login.html";
});

document.addEventListener("DOMContentLoaded", function () {
  // استهداف جميع الأزرار
  const decrementBtns = document.querySelectorAll(".decrement");
  const incrementBtns = document.querySelectorAll(".increment");
  const counters = document.querySelectorAll(".counterValue");
  const prices = document.querySelectorAll(".table-price");
  const subtotals = document.querySelectorAll(".table-subtotal");

  // دالة لتحديث الـ subtotal
  function updateSubtotal(index) {
    let quantity = parseInt(counters[index].value, 10);
    let price = parseFloat(prices[index].textContent.replace('$', ''));
    let subtotal = quantity * price;
    subtotals[index].textContent = `$${subtotal.toFixed(2)}`;
  }

  decrementBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      let value = parseInt(counters[index].value, 10);
      if (value > parseInt(counters[index].min, 10)) {
        counters[index].value = value - 1;
        updateSubtotal(index); // تحديث الـ subtotal بعد التعديل
      }
    });
  });

  incrementBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      let value = parseInt(counters[index].value, 10);
      counters[index].value = value + 1;
      updateSubtotal(index); // تحديث الـ subtotal بعد التعديل
    });
  });
});

//popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup");
if(popup){
  closePopup.addEventListener("click" , () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener('load', () => {
    setTimeout(() =>{
    popup.classList.remove("hide-popup");

    } ,1000)
  })
}


 
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");

  if (selectedCategory) {
    filterProductsByCategory(selectedCategory);
  }
 

function filterProductsByCategory(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // مسح المنتجات القديمة

  const allProducts = Object.values(pages).flat(); // جمع كل المنتجات
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  filteredProducts.forEach((product) => {
    const productElement = `
        <div class="image">
        <a href="details.html?id=${product.ProductCode}">
          <img src="${product.img}" alt="${product.alt}" />
        </a>
        <div class="content">
          <a href="products.html?category=${product.category}">${product.category}</a>
          <h2>${product.title}</h2>
          <span>${product.price}</span>
        </div>
        <div class="event">
          <a href="#"><i class="fas fa-cart-plus" data-text="Add To Cart"></i></a>
          <a href="#"><i class="fas fa-heart" data-text="WatchList"></i></a>
        </div>
        ${
          product.discount
            ? `<div class="discount">-${product.discount}</div>`
            : ""
        }
      </div>
    `;
    productContainer.innerHTML += productElement;
  });
}

  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



  //menu bar 
let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.nav');
let icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('fa-bars-staggered');
  icon.classList.toggle('fa-xmark');
});
//search

// البحث عن العناصر
let searchBtn = document.getElementById('searchBtn'); 
let searchBox = document.getElementById('searchBox'); 
let closeBtn = document.getElementById('closeBtn'); 
let nav = document.querySelector('header .nav'); 
let person = document.querySelector('.bi-person');  
let shop = document.querySelector('.bi-cart3');  
let icon3 = document.getElementById('icon');  
let wishlistIcon = document.getElementById('wishlist-icon');  

// دالة لضبط العرض مع التحقق من وجود العنصر
function setDisplay(element, value) {
  if (element) {
    element.style.display = value;
  }
}

// عند الضغط على زر البحث
searchBtn.addEventListener('click', () => {
  setDisplay(shop, 'none');  
  setDisplay(person, 'none');  
  setDisplay(icon3, 'none');  
  setDisplay(nav, 'none');  
  setDisplay(searchBtn, 'none');  
  setDisplay(searchBox, 'flex');  
  setDisplay(wishlistIcon, 'none');  
});

// عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', () => {
  setDisplay(person, 'flex'); 
  setDisplay(shop, 'flex'); 
  setDisplay(icon3, 'flex'); 
  setDisplay(searchBox, 'none'); 
  setDisplay(nav, 'flex'); 
  setDisplay(searchBtn, 'flex'); 
  setDisplay(wishlistIcon, 'flex');  

});

//sidebar
document.addEventListener("DOMContentLoaded", () => {
  let sidebar = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");
  let openBtn = document.getElementById("open-btn");
  let quick  = document.querySelector(".quick-navigation");
  let toggles = document.querySelectorAll(".toggle");
  let mobileMenuBtn = document.getElementById("mobile-menu-btn");
  let categoriesBtn = document.getElementById("categories-btn");
  let mobileMenu = document.getElementById("mobile-menu");
  let categoriesMenu = document.getElementById("categories");


  openBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
      overlay.style.display = "block";
  });

  quick .addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.style.display = "none";
  });
  toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
          let target = document.getElementById(toggle.dataset.target);
          let parentLink = toggle.parentElement;
          if (target.style.display === "block") {
              target.style.display = "none";
              toggle.textContent = "+";
              parentLink.classList.remove("active"); 
              
          } else {
              target.style.display = "block";
              toggle.textContent = "-";
              toggles.forEach(t => t.parentElement.classList.remove("active"));

              // إضافة الكلاس إلى الرابط الحالي
              parentLink.classList.add("active");

          }
      });
  });
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.add("active");
    categoriesBtn.classList.remove("active");
    mobileMenu.style.display = "block";
    categoriesMenu.style.display = "none";
});

categoriesBtn.addEventListener("click", () => {
    categoriesBtn.classList.add("active");
    mobileMenuBtn.classList.remove("active");
    categoriesMenu.style.display = "block";
    mobileMenu.style.display = "none";
});

    // التعامل مع القوائم الفرعية
    document.addEventListener("DOMContentLoaded", () => {
      let toggles = document.querySelectorAll(".menu  .toggle");
      toggles.forEach(toggle => {
          toggle.addEventListener("click", (event) => {
              event.stopPropagation(); // منع التفاعل مع الروابط الأب
              let targetId = toggle.dataset.target; 
              let submenu = document.getElementById(targetId);
  
              if (submenu) {
                 
                  if (submenu.style.display === "block") {
                      submenu.style.display = "none";
                      toggle.textContent = "+";  
                  } else {
                      submenu.style.display = "block";
                      toggle.textContent = "-";  
                  }
              }
          });
      });
  });
  
});
 

let el = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , ()=> {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let btn2 = document.getElementById('top-btn');

window.onscroll = function() {
  if (window.scrollY >= 600) {
    btn2.style.display = 'block';
  } else {
    btn2.style.display = 'none';
  }
}

btn2.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
}
//  .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..


 
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 
 

 
let pages = {
  1: [
    { img: "images/Accessories1.jpg", alt: "Accessories1", category: "Accessories", title: "Elegant bracelet", price: "$30.00" },
    { img: "images/shoes10.png", alt: "shoes10", category: "Shoes", title: "Plain brown shoes", price: "$75.00" ,discount:"20%" },
    { img: "images/clothing16.png", alt: "clothing16", category: "Clothing", title: "Two-tone dress", price: "$130.00"},
    { img: "images/handbag3.png", alt: "handbag3", category: "HandBag", title: "Light brown women's bag", price: "$60.00" },
    { img: "images/clothing12.png", alt: "clothing12", category: "Clothing", title: "Men's beige pants", price: "$70.00" },
    { img: "images/shoes2.png", alt: "shoes2", category: "Shoes", title: "Blue and brown shoes", price: "$90.00" },
    { img: "images/glasses1.png", alt: "glasses1", category: "Glasses", title: "Men's glasses", price: "$30.00" },
    { img: "images/clothing11.png", alt: "clothing11", category: "Clothing", title: "Distinctive shirt", price: "$50.00" , discount:"10%" },
  ],
 
};
 
 
 
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let cartCount = 0;  // عدد العناصر في السلة
// let wishlistCount = 0;  // عدد العناصر في الـ Wishlist

// let cart = {
//     items: [], // مصفوفة لتخزين العناصر المضافة إلى السلة
//     totalPrice: 0 // لحساب السعر الإجمالي
// };

// function addToCart(productId, event) {
//   let product = findProductById(productId);

//   if (!product) {
//       console.error("❌ المنتج غير موجود في القائمة.");
//       return;
//   }

//   let existingProduct = cart.items.find(item => item.ProductCode === productId);
//   let priceValue = parseFloat(product.price.replace("$", "")); // تحويل السعر إلى قيمة عددية

//   if (existingProduct) {
//       existingProduct.quantity++;
//       cart.totalPrice += priceValue;
//   } else {
//       product.quantity = 1;
//       cart.items.push(product);
//       cartCount = cart.items.length;  // تحديث عدد العناصر في السلة
//       cart.totalPrice += priceValue;
//   }

//   updateCartBadge();
//   showPopup();
//   showCartItems();
  
//   // تمرير `event` لدالة `animateToCart`
//   animateToCart(event);
// }

// function addToWishlist(event) {
//     wishlistCount++;  
//     updateWishlistBadge();
//     animateToWishlist(event);
// }


// function updateWishlistBadge() {
//     let wishlistIcon = document.getElementById("wishlist-icon");
//     let wishlistBadge = wishlistIcon.querySelector(".badge");

//     if (!wishlistBadge) {
//         wishlistBadge = document.createElement("span");
//         wishlistBadge.classList.add("badge");
//         wishlistIcon.appendChild(wishlistBadge);
//     }

//     wishlistBadge.textContent = wishlistCount > 0 ? wishlistCount : 0;
// }

// function animateToCart(event) {
//   let cartIcon = document.getElementById("cart-icon");
//   if (!cartIcon) {
//       console.error("❌ لم يتم العثور على أيقونة السلة.");
//       return;
//   }

//   let productImage = event.target.closest(".event").querySelector("img");
//   if (!productImage) {
//       console.error("❌ لم يتم العثور على صورة المنتج.");
//       return;
//   }

//   // إنشاء صورة جديدة للطيران
//   let flyingImg = productImage.cloneNode(true);
//   flyingImg.style.position = "absolute"; // تغيير إلى absolute
//   flyingImg.style.zIndex = "1000";
//   flyingImg.style.width = "50px";
//   flyingImg.style.height = "50px";
//   flyingImg.style.transition = "all 1s ease-in-out";
//   flyingImg.style.opacity = "1"; // تأكد من أن الصورة مرئية

//   // حساب إحداثيات العنصر بالنسبة للصفحة
//   let rect = productImage.getBoundingClientRect();
//   let offsetX = window.scrollX;
//   let offsetY = window.scrollY;
//   flyingImg.style.left = `${rect.left + offsetX}px`;
//   flyingImg.style.top = `${rect.top + offsetY}px`;

//   document.body.appendChild(flyingImg);

//   let cartRect = cartIcon.getBoundingClientRect();
//   let cartOffsetX = window.scrollX;
//   let cartOffsetY = window.scrollY;

//   // التحريك إلى أيقونة السلة
//   setTimeout(() => {
//       flyingImg.style.left = `${cartRect.left + cartOffsetX}px`;
//       flyingImg.style.top = `${cartRect.top + cartOffsetY}px`;
//       flyingImg.style.opacity = "0"; // جعل الصورة تختفي عند الوصول إلى السلة
//   }, 100);

//   // بعد الانتهاء من الأنيميشن، إزالة الصورة
//   setTimeout(() => {
//       flyingImg.remove();
//       updateCartBadge();  // تحديث الرقم في الأيقونة بعد إتمام الأنيميشن
//   }, 1000);
// }

// // ✅ تعديل دالة `animateToWishlist` لتحسين الأنيميشن:
// function animateToWishlist(event) {
//     let wishlistIcon = document.getElementById("wishlist-icon");
//     if (!wishlistIcon) {
//         console.error("❌ لم يتم العثور على أيقونة الـ Wishlist.");
//         return;
//     }

//     let heartIcon = event.target.closest(".event").querySelector(".fas.fa-heart");
//     if (!heartIcon) {
//         console.error("❌ لم يتم العثور على أيقونة القلب.");
//         return;
//     }

//     let flyingHeart = heartIcon.cloneNode(true);
//     flyingHeart.style.position = "absolute"; // تغيير إلى absolute
//     flyingHeart.style.zIndex = "1000";
//     flyingHeart.style.width = "30px";
//     flyingHeart.style.height = "30px";
//     flyingHeart.style.transition = "all 1s ease-in-out";
//     flyingHeart.style.opacity = "1"; // تأكد من أن الصورة مرئية

//     // حساب إحداثيات العنصر بالنسبة للصفحة
//     let rect = heartIcon.getBoundingClientRect();
//     let offsetX = window.scrollX;
//     let offsetY = window.scrollY;
//     flyingHeart.style.left = `${rect.left + offsetX}px`;
//     flyingHeart.style.top = `${rect.top + offsetY}px`;

//     document.body.appendChild(flyingHeart);

//     let wishlistRect = wishlistIcon.getBoundingClientRect();
//     let wishlistOffsetX = window.scrollX;
//     let wishlistOffsetY = window.scrollY;

//     // التحريك إلى أيقونة الـ Wishlist
//     setTimeout(() => {
//         flyingHeart.style.left = `${wishlistRect.left + wishlistOffsetX}px`;
//         flyingHeart.style.top = `${wishlistRect.top + wishlistOffsetY}px`;
//         flyingHeart.style.opacity = "0"; // جعل الصورة تختفي عند الوصول إلى الـ Wishlist
//     }, 100);

//     // بعد الانتهاء من الأنيميشن، إزالة الصورة
//     setTimeout(() => {
//         flyingHeart.remove();
//         updateWishlistBadge();  // تحديث الرقم في الأيقونة بعد إتمام الأنيميشن
//     }, 1000);
// }




 
 

 
 
