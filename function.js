let stack = document.querySelector(".stack");
let swaps = document.querySelectorAll(".swap");

[...stack.children].reverse().forEach(i => stack.append(i));

swaps.forEach(swap => {
    swap.addEventListener("click", () => {
        let firstCard = document.querySelector(".card:first-child");
        let lastCard = document.querySelector(".card:last-child");

        firstCard.classList.toggle("active");
        lastCard.classList.toggle("active");
    });
});

// Show Hide Sign In Password

const signinPassword = document.getElementById("signinPassword");
const signinEye = document.getElementById("signinEye");

signinEye.addEventListener("click", () => {
    if(signinPassword.type === 'password')
    {
        signinPassword.type = 'text';
        signinEye.classList.remove('bx-show');
        signinEye.classList.add('bx-hide');
    }
    else
    {
        signinPassword.type = 'password';
        signinEye.classList.remove('bx-hide');
        signinEye.classList.add('bx-show');
    }
});

// Show Hide Sign Up Password

const signupPassword = document.getElementById("signupPassword");
const signupEye = document.getElementById("signupEye");

signupEye.addEventListener("click", () => {
    if(signupPassword.type === 'password')
    {
        signupPassword.type = 'text';
        signupEye.classList.remove('bx-show');
        signupEye.classList.add('bx-hide');
    }
    else
    {
        signupPassword.type = 'password';
        signupEye.classList.remove('bx-hide');
        signupEye.classList.add('bx-show');
    }
});