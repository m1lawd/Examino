document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("log-in");

  loginBtn.addEventListener("click", function () {
    window.open("login.html", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("sign-in");

  loginBtn.addEventListener("click", function () {
    window.open("sign-in.html", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("back");

  backBtn.addEventListener("click", function () {
    // تلاش برای بستن تب فعلی
    window.close();

    if (!window.closed) {
      window.history.back();
    }
  });
});
