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
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    applyTheme();
});

// Apply theme on page load
applyTheme();

// Search Bar with Suggestions
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const searchItems = ["Home", "About", "Projects", "Contact", "Portfolio", "Blog"];

search.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase();
    let filteredItems = searchItems.filter(item => item.toLowerCase().includes(value));

    suggestions.innerHTML = "";
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            let div = document.createElement("div");
            div.textContent = item;
            div.className = "px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer";
            div.addEventListener("click", () => {
                search.value = item;
                suggestions.classList.add("hidden");
            });
            suggestions.appendChild(div);
        });
        suggestions.classList.remove("hidden");
    } else {
        suggestions.classList.add("hidden");
    }
});

document.addEventListener("click", (e) => {
    if (!search.contains(e.target)) {
        suggestions.classList.add("hidden");
    }
});
