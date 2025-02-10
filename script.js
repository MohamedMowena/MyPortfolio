// Typing Effect in Home Section
const typingText = "I'm a Web Developer.";
let index = 0;
const typingElement = document.getElementById("typing");

function typeText() {
    if (index < typingText.length) {
        typingElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
typeText();

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Dark/Light Mode";
toggleButton.classList.add("toggle-btn");
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
const text = ["Web Developer.", "Frontend Designer.", "Creative Coder."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
}

type();
