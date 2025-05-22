let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("Button clicked:", button.textContent);
    });
});
