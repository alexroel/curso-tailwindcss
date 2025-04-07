const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        menu.classList.add('open');
        menu.classList.remove('hidden');
        menuIcon.src = 'icons/close.svg'; // Change to close icon
    } else {
        menu.classList.remove('open');
        menu.classList.add('hidden');
        menuIcon.src = 'icons/menu.svg'; // Change back to menu icon
    }
});

// On page load or when changing themes, apply the correct theme
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
);

// Function to set light mode
function setLightMode() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
}

// Function to set dark mode
function setDarkMode() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
}

// Function to respect system preference
function setSystemMode() {
    localStorage.removeItem("theme");
    document.documentElement.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

// Example usage: Call these functions based on user interaction
// setLightMode();
// setDarkMode();
// setSystemMode();

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        setLightMode();
    } else {
        setDarkMode();
    }
});


