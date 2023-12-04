const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInForm = document.getElementById('signInForm');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    signInForm.classList.add("hidden");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    signInForm.classList.remove("hidden");
});
