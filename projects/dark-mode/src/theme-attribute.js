function setTheme(mode) {
  if (mode === "system") {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light",
    );
  } else {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }
}

// Hacemos la función accesible desde el HTML
window.setTheme = setTheme;
