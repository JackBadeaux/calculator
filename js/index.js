// ! button logic
const buttons = document.querySelectorAll(".button");
const output = document.getElementById("output")
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const value = button.textContent
        if (output.textContent === "Error") {
            output.textContent = "";
        } 
         if (value === "C") {
            output.textContent = ""
        } else if (value === "=") {
            try {
                output.textContent = eval(output.textContent)
            } catch (error) {
                output.textContent = "Error"
            }
        }
        else if (value === "CE") {
            output.textContent = output.textContent.slice(0, -1)
        }
        else {
            output.textContent += button.textContent

        }
    });
});
// ! keyboard logic
document.addEventListener("keydown", (e) => {
    const allowed = "1234567890.+-*/()"
    const key = e.key
     if (output.textContent === "Error") {
            output.textContent = "";
        } 
    if (allowed.includes(key)) {
        output.textContent += key
    } else if (key === "Enter") {
        try {
            output.textContent = eval(output.textContent)
        } catch (error) {
            output.textContent = "Error"
        }
    } else if (key === "c" || key === "C") {
        output.textContent = ""
    } else if (key === "Backspace") {
        output.textContent = output.textContent.slice(0, -1)
    }
})