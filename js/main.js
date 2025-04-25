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
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-popup");

  // تحقق إذا كانت هذه أول زيارة للمستخدم
  if (!localStorage.getItem("popupShown")) {
    setTimeout(() => {
      if (popup) {
        popup.classList.remove("hide-popup"); // إزالة الكلاس الذي يخفي البوب أب
        localStorage.setItem("popupShown", "true"); // تخزين القيمة بعد ظهور البوب أب فعلًا
      }
    }, 1000);
  }

  // إذا تم النقر على زر الإغلاق، أخفي البوب أب
  if (popup && closePopup) {
    closePopup.addEventListener("click", () => {
      popup.classList.add("hide-popup");  // إخفاء البوب أب بعد الإغلاق
    });

  }
  // localStorage.clear();  

});

 



 
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
  let closeBtn = document.getElementById("close-btn");
  let quickNav = document.querySelector(".quick-navigation");
  let toggles = document.querySelectorAll(".toggle");
  let mobileMenuBtn = document.getElementById("mobile-menu-btn");
  let categoriesBtn = document.getElementById("categories-btn");
  let mobileMenu = document.getElementById("mobile-menu");
  let categoriesMenu = document.getElementById("categories");

   
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.style.display = "block";
  });

  
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });

  // معالجة القوائم القابلة للطي
  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      let target = document.getElementById(toggle.dataset.target);
      let parentLink = toggle.parentElement;
      
      if (target.style.display === "block") {
        target.style.display = "none";
        toggle.textContent = "+";
        parentLink.classList.remove("active"); 
      } else {
        target.style.display = "block";
        toggle.textContent = "-";
        parentLink.classList.add("active");
      }
    });
  });

  // تبديل القوائم المتنقلة
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
 
document.querySelectorAll('input[name="delivery"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    document.getElementById('address-section').style.display =
      this.value === 'home' ? 'block' : 'none';
  });
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude.toFixed(5);
      const lng = position.coords.longitude.toFixed(5);
      document.getElementById('address').value = `Lat: ${lat}, Lng: ${lng}`;
    }, function () {
      alert("Unable to retrieve your location.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPopup(message, success = true) {
  const popup = document.getElementById('popup');
  const messageEl = document.getElementById('popup-message');

  popup.style.backgroundColor = success ? '#28a745' : '#dc3545';
  messageEl.textContent = message;

  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}

  function submitOrder() {
    const deliveryType = document.querySelector('input[name="delivery"]:checked').value;
    if (deliveryType === 'home') {
      const address = document.getElementById('address').value.trim();
      if (!address) {
        showPopup('Please enter your delivery address.', false);
        return;
      }
      showPopup(`Order confirmed! Delivery to: ${address}`);
    } else {
      showPopup("Order confirmed! Please pick it up from the store.");
    }
  }
 

 
 

 
 
