// ! button logic
const buttons = document.querySelectorAll(".button");
const output = document.getElementById("output")
buttons.forEach(button => {
    button.addEventListener("click", function () {
         const number = button.textContent
        
        if (output.value === "Error") {
            output.value = "";
        } 
         if (number === "C") {
            output.value = ""
        } else if (number === "=") {
            try {
                output.value = eval(output.value)
            } catch (error) {
                output.value = "Error"
            }
        }
        else if (number === "CE") {
            output.value = output.value.slice(0, -1)
        }
        else {
            output.value += number

        }
             
    });
});
// ! keyboard logic
document.addEventListener("keydown", (e) => {
    const allowed = "1234567890.+-*/"
    const key = e.key

     if (output.value === "Error" || output.value ==="undefined") {
            output.value = "";
        } 
    if (allowed.includes(key)) {
        output.value += key
    } else if (key === "Enter") {
        e.preventDefault();
        try {
            output.value = eval(output.value)
        } catch (error) {
            output.value = "Error"
        }
    } else if (key === "c" || key === "C") {
        output.value = ""
    } else if (key === "Backspace") {
        output.value = output.value.slice(0, -1)
    }

})