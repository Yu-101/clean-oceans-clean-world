// THEME TOGGLE

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}


// LEARN MORE BUTTONS


function toggleMore(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle("hidden");
    }
}


// BACK TO TOP BUTTON

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backTop.style.display = "block";
    else backTop.style.display = "none";
});

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// FEEDBACK FORM HANDLER

const feedbackForm = document.getElementById("feedbackForm");
const feedbackMsg = document.getElementById("feedbackMsg");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        feedbackMsg.classList.remove("hidden");
        feedbackForm.reset();
    });
}



// NAVBAR AUTO-HIDE ON SCROLL

const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let current = window.scrollY;

    if (current > lastScroll && current > 80) {
        navbar.style.top = "-80px";  // hide
    } else {
        navbar.style.top = "0";      // show
    }
    lastScroll = current;
});
