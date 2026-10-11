// Смена темы со счётчиком нажатий
const themeButton = document.getElementById("toggleTheme");
let themeClicks = 0;

function switchTheme() {
  document.body.classList.toggle("dark");
  themeClicks += 1;
  themeButton.textContent = `Сменить тему (${themeClicks})`;
}

themeButton.addEventListener("click", switchTheme);

// Приветствие по имени
const helloForm = document.getElementById("helloForm");
const visitorName = document.getElementById("visitorName");
const helloText = document.getElementById("helloText");

function showGreeting(event) {
  event.preventDefault();
  const name = visitorName.value.trim();
  helloText.textContent = name ? `Привет, ${name}!` : "Привет, гость!";
}

helloForm.addEventListener("submit", showGreeting);
