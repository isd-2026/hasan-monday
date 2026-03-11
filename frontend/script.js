document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from automatically submitting, required

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(password.length < 8) {
        alert("Password must be at least 8 characters long.");
        document.getElementById("password").value = ""; // clear the password field
        return;
    } else {
        window.location.href = `welcome.html?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`;
    }
  });
});