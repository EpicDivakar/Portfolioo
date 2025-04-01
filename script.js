// Dark Mode Toggle with Local Storage
const darkModeToggle = document.getElementById("darkModeToggle");

function applyTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        darkModeToggle.textContent = "☀️";
    } else {
        document.documentElement.classList.remove("dark");
        darkModeToggle.textContent = "🌙";
    }
}

darkModeToggle.addEventListener("click", () => {
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "light" : "dark");
    applyTheme();
});

applyTheme();
