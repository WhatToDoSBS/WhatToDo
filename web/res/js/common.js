let currentBtn;
let rtBtns = document.querySelectorAll(".choiceBtn_section button");

if (rtBtns) {
    for (let i=0; i<rtBtns.length; i++) {
        rtBtns[i].addEventListener("click", () => {
            currentBtn.classList.add("clicked")
        });
    }
}