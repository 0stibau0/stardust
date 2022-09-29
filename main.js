
const question1 = document.querySelector(".firstQuestion");
const question2 = document.querySelector(".secondQuestion");
const openQuestion2 = document.querySelector(".answerA2");

openQuestion2.addEventListener("click", () => {
//     question1.style.transform = " translateY(-100px);"
    question1.style.display = "none";
    question2.style.display = "grid";
    


});
