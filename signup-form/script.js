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
            fnError.innerHTML = "First name cannot be empty";
            setTimeout(() => {
                fnError.innerHTML = "";
            }, 1500);

        } if (lastName.value === "") {
            lnError.innerHTML = "Last Name cannot be empty";
            setTimeout(() => {
                lnError.innerHTML = "";
            }, 1500);

        } if (email.value === "") {
            emailError.innerHTML = "email@example/com";
            setTimeout(() => {
                emailError.innerHTML = "";
            }, 1500);

        } if (password.value === "") {
            passwordError.innerHTML = "Password cannot be empty";
            setTimeout(() => {
                passwordError.innerHTML = "";
            }, 1500);

        } else {
            successful.innerHTML = "Free trial claimed!";
            setTimeout(() => {
                successful.innerHTML = "";
            }, 1500);
        }
    })


