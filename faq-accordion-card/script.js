const questions = document.querySelectorAll(".questions");


questions.forEach((question) => {
        const button = question.querySelector(".buttons");

        button.addEventListener("click", () => {

                questions.forEach((item) => {
                        if (item !== question) {
                            item.classList.remove("show-answer");
                        }
                    });
                question.classList.toggle("show-answer");

            });
    });


/* this code below doesnt close other questions when one is active

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const question = e.currentTarget.parentElement.parentElement;

            question.classList.toggle("show-answer");
        });
    });
*/