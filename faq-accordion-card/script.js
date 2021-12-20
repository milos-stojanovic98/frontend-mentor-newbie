const button = document.getElementById("buttonn");
const paragraph = document.getElementById("paragraphh");
const second = document.getElementById("second");

button.addEventListener("click", () => toggle())

const toggle = () => {
    paragraph.classList.toggle("show-paragraph");
    if(paragraph.classList.contains("show-paragraph")){
        second.style.fontWeight = 900;
    }else{
        second.style.fontWeight = 400;
    } 
}