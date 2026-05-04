// منتظر می‌مونیم تا صفحه کامل لود بشه
document.addEventListener("DOMContentLoaded", function () {
  // دکمه ورود رو پیدا می‌کنیم
  const loginBtn = document.getElementById("log-in");

  // وقتی روی دکمه کلیک شد
  loginBtn.addEventListener("click", function () {
    // به صفحه login.html برو
    window.location.href = "login.html";
  });
});

// منتظر می‌مونیم تا صفحه کامل لود بشه
document.addEventListener("DOMContentLoaded", function () {
  // دکمه ورود رو پیدا می‌کنیم
  const loginBtn = document.getElementById("sign-in");

  // وقتی روی دکمه کلیک شد
  loginBtn.addEventListener("click", function () {
    // به صفحه login.html برو
    window.location.href = "sign-up.html";
  });
});

// منتظر می‌مونیم تا صفحه کامل لود بشه
document.addEventListener("DOMContentLoaded", function () {
  // دکمه ورود رو پیدا می‌کنیم
  const loginBtn = document.getElementById("back");

  // وقتی روی دکمه کلیک شد
  loginBtn.addEventListener("click", function () {
    // به صفحه login.html برو
    window.location.href = "home.html";
  });
});
