const questions = document.querySelectorAll(".challenge-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const isOpen = item.classList.contains("open");

        item.classList.toggle("open");
        question.setAttribute("aria-expanded", !isOpen);
    });
});
