const display = document.querySelector(".value")
const operators = document.querySelector(".operators");
const toggleMode = document.querySelector(".mode")
const form = document.querySelector(".calculator form");
// display.value = '';

operators.addEventListener("click", e => {
    if (e.target.classList.contains("btn")) {
        display.value += e.target.value;
    }
    else if (e.target.classList.contains("backspace")) {
        display.value = display.value.slice(0, -1);
    }
    else if (e.target.classList.contains("clear")) {
        display.value = "";
    }
    else if (e.target.classList.contains("equal")) {
        display.value = eval(display.value);
    }
})

form.addEventListener("submit", e => {
    e.preventDefault();
})

toggleMode.addEventListener("click", e => {
    if (e.target.innerHTML == "dark_mode") {
        e.target.innerHTML = "light_mode"
        document.querySelector(".calculator").style.backgroundColor = "#243540";
        document.querySelectorAll("[type='button']:not(.equal):not(.number)").forEach(e => e.style.color = '#30a0e0');
        display.style.color = "#fff";
    }
    else if (e.target.innerHTML == "light_mode") {
        e.target.innerHTML = "dark_mode"
        document.querySelector(".calculator").style.backgroundColor = "#ebeaea";
        document.querySelectorAll("[type='button']:not(.equal):not(.number)").forEach(e => e.style.color = '#888');
        display.style.color = "#243443";
    }
})

