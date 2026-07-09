const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue("content");
const toggle = document.getElementById("theme-toggle");

function setMode(mode) {
  toggle.checked = mode === "dark";
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.classList.toggle("theme--dark", mode === "dark");
  document.documentElement.classList.toggle("theme--light", mode === "light");
  window.localStorage.setItem("theme", mode);
  toggle.className = mode === "dark" ? "light" : "dark";
}

if (theme === "dark" || theme === "light") {
  setMode(theme);
} else if (userPrefers === "dark") {
  setMode("dark");
} else {
  setMode("light");
}

function modeSwitcher() {
  const currentMode = document.documentElement.getAttribute("data-theme");
  setMode(currentMode === "dark" ? "light" : "dark");
}
