document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from automatically submitting, required

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const user = {"name":name, "email":email}
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "welcome.html"

  });
});