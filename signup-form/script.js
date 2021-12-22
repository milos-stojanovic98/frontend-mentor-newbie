const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

/* Error labels */
const fnError = document.getElementById("first-name-error");
const lnError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successful = document.getElementById("successful");

submitBtn.addEventListener("click", () => {
        if (firstName.value === "") {
            firstName.style.background = "url(./images/icon-error.svg) no-repeat right";
            fnError.innerHTML = "First name cannot be empty";
            setTimeout(() => {
                fnError.innerHTML = "";
                firstName.style.background = "none";
            }, 1500);

        } if (lastName.value === "") {
            lastName.style.background = "url(./images/icon-error.svg) no-repeat right";
            lnError.innerHTML = "Last Name cannot be empty";
            setTimeout(() => {
                lnError.innerHTML = "";
                lastName.style.background = "none";
            }, 1500);

        } if (email.value === "") {
            email.style.background = "url(./images/icon-error.svg) no-repeat right";
            email.value = "email@example/com"
            email.style.color = "hsl(0, 100%, 74%)";
            emailError.innerHTML = "Looks like this isn't and email";
            setTimeout(() => {
                emailError.innerHTML = "";
                email.style.background = "none";
                email.value = "";
                email.style.color = "black";
            }, 1500);

        } if (password.value === "") {
            password.style.background = "url(./images/icon-error.svg) no-repeat right";
            passwordError.innerHTML = "Password cannot be empty";
            setTimeout(() => {
                passwordError.innerHTML = "";
                password.style.background = "none";
                password.value = "";
            }, 1500);

        } else {
            successful.innerHTML = "Free trial claimed!";
            setTimeout(() => {
                successful.innerHTML = "";
            }, 1500);
        }
    })


