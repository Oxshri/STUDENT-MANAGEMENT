const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function redirectMain() {
    // Redirect to main.html
    window.location.href = "main.html";
}

function validateLogin() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Check if username and password match
    if (usernameInput === "admin@gmail.com" && passwordInput === "admin123") {
        // Redirect to main.html
        window.location.href = "navbar/index.html";
    } else {
        // Display an error message (you can customize this part)
        alert("Invalid username or password. Please try again.");
    }
}