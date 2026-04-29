let slideIndex = 1;
const slidesTrack = document.querySelector(".slides-track");
const dots = document.querySelectorAll(".dot");

// تابع برای تغییر اسلاید
function moveSlide(n) {
  showSlide((slideIndex += n));
}

// تابع برای رفتن به اسلاید خاص با کلیک روی دات‌ها
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");

  // اگر به آخر رسید، برگرد به اول
  if (n > slides.length) {
    slideIndex = 1;
  }
  // اگر از اول عقب‌تر رفت، برو به آخر
  if (n < 1) {
    slideIndex = slides.length;
  }

  // محاسبه میزان جابجایی
  // در حالت RTL، برای حرکت به سمت راست، باید translateX مثبت باشه
  const offset = (slideIndex - 1) * 100;
  slidesTrack.style.transform = `translateX(${offset}%)`;

  // آپدیت کردن دات‌ها
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");
}
