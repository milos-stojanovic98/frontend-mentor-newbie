const submitBtn = document.querySelector(".submit-btn");
const emailField = document.querySelector(".email");
const errorLabel = document.querySelector(".error-label");

submitBtn.addEventListener("click", () => {
    if(emailField.value === ""){
        errorLabel.innerHTML = "Please provide a valid email address";
        emailField.style.border = "solid hsl(354, 100%, 66%) 1px";
        emailField.value = "example@email/com";
        setTimeout( () => {
            emailField.value = "";
            errorLabel.innerHTML = "";
            emailField.style.border = "solid 1px hsl(0, 0%, 59%)";
        }, 2000);
    }
})