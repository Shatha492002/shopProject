 
      // التعامل مع إظهار الـ popup عند الضغط على الزر
      document.addEventListener("DOMContentLoaded", () => {
        const cartBtn = document.querySelector(".shopping-cart");
        const overlay = document.getElementById("popup1");

        cartBtn.addEventListener("click", () => {
          cartBtn.classList.add("clicked"); // إضافة الأنيميشن للزر

          // الانتظار حتى تنتهي مدة الأنيميشن الخاصة بالزر
          setTimeout(() => {
            cartBtn.classList.remove("clicked"); // إزالة الأنيميشن من الزر
            overlay.classList.add("show"); // إظهار الـ overlay

            // بعد ظهور الـ overlay نبدأ بإظهار البوب أب
            setTimeout(() => {
              showPopup(); // إظهار البوب أب بعد 1 ثانية من ظهور الـ overlay
            }, 100); // تأخير بسيط
          }, 3000); // الانتظار لمدة 3000 مللي ثانية (3 ثوانٍ)
        });
      });

      // دالة لإظهار البوب أب
      function showPopup() {
        const popup = document.querySelector(".popup1");
        if (popup) {
          popup.classList.add("show");
        }
      }

      // دالة لإغلاق البوب أب
      function closePopup() {
        const overlay = document.getElementById("popup1");
        const popup = document.querySelector(".popup1");
        if (overlay && popup) {
          overlay.classList.remove("show"); // إخفاء الـ overlay
          popup.classList.remove("show"); // إخفاء البوب أب
        }
      }
 