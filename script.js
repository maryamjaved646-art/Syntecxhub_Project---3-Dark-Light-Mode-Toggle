
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const heroToggle = document.getElementById("heroToggle");

const themeLabel = document.getElementById("themeLabel");
const heroButtonIcon = document.getElementById("heroButtonIcon");
const heroButtonText = document.getElementById("heroButtonText");

const previewIcon = document.getElementById("previewIcon");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");
// Load saved theme, or use the device preference.
function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
// Update every theme-related element.
function applyTheme(theme) {
    const isDark = theme === "dark";

    body.classList.toggle("dark-mode", isDark);

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeLabel.textContent = isDark ? "Dark Mode" : "Light Mode";
    heroButtonIcon.textContent = isDark ? "☀️" : "🌙";
    heroButtonText.textContent = isDark
        ? "Try Light Mode"
        : "Try Dark Mode";

    previewIcon.textContent = isDark ? "🌙" : "☀️";
    previewTitle.textContent = isDark
        ? "Hello, Night Owl!"
        : "Hello, Sunshine!";

    previewDescription.textContent = isDark
        ? "A relaxing look for the evening."
        : "A fresh look for a fresh start.";

    localStorage.setItem("theme", theme);
}
// Toggle between dark and light.
function toggleTheme() {
    const isDark = body.classList.contains("dark-mode");

    applyTheme(isDark ? "light" : "dark");
}
// Initialize the saved theme.
applyTheme(getInitialTheme());
// Both buttons control the same theme.
themeToggle.addEventListener("click", toggleTheme);
heroToggle.addEventListener("click", toggleTheme);