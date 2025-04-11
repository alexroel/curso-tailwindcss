const themeToggle = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

// Cargar el tema desde localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    rootElement.classList.add("dark");
} else {
    rootElement.classList.remove("dark");
}

// Alternar el tema y guardar la preferencia
themeToggle.addEventListener("click", () => {
    if (rootElement.classList.contains("dark")) {
        rootElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        rootElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});