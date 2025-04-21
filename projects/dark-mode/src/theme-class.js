// Aplicar tema almacenado al cargar la página
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Función para alternar el modo oscuro
function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Puedes llamar esta función desde un botón
document.querySelector("#modo-btn")?.addEventListener("click", toggleDarkMode);
