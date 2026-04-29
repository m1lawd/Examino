let slideIndex = 1;
let autoPlayInterval;
const slidesTrack = document.querySelector(".slides-track");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".slide").length;

// شروع اتوپلی
startAutoPlay();

// تابع برای تغییر اسلاید با دکمه
function moveSlide(n) {
  showSlide((slideIndex += n));
  resetAutoPlay(); // اگر کاربر دستی کلیک کرد، تایمر ریست بشه
}

// تابع برای رفتن به اسلاید خاص با کلیک روی دات‌ها
function currentSlide(n) {
  showSlide((slideIndex = n));
  resetAutoPlay();
}

function showSlide(n) {
  // اگر به آخر رسید و رفت به بعدی، برگرد به اول
  if (n > totalSlides) {
    slideIndex = 1;
  }
  // اگر از اول عقب‌تر رفت، برو به آخر
  if (n < 1) {
    slideIndex = totalSlides;
  }

  // محاسبه میزان جابجایی
  // در حالت RTL:
  // برای رفتن به اسلاید بعدی (راست به چپ)، باید translateX منفی بشه
  // برای رفتن به اسلاید قبلی (چپ به راست)، باید translateX مثبت بشه
  const offset = -(slideIndex - 1) * 100;

  slidesTrack.style.transform = `translateX(${offset}%)`;

  // آپدیت کردن دات‌ها
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");
}

// تابع برای شروع اتوپلی
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    moveSlide(1); // هر 5 ثانیه بره به اسلاید بعدی
  }, 5000); // 5000 میلی‌ثانیه = 5 ثانیه
}

// تابع برای ریست کردن تایمر (وقتی کاربر دستی کلیک می‌کنه)
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// توقف اتوپلی وقتی موس روی اسلایدر میره (اختیاری، ولی خوبه)
const sliderWrapper = document.querySelector(".slider-wrapper");
sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval);
});

sliderWrapper.addEventListener("mouseleave", () => {
  startAutoPlay();
});
