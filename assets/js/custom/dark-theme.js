/* assets/js/custom/dark-theme.js */

const defaultTheme = [...document.styleSheets].find((style) =>
  /(main.css)$/.test(style.href)
);
const darkTheme = [...document.styleSheets].find((style) =>
  /(main-dark.css)$/.test(style.href)
);

const toggleThemeBtn = document.getElementById("toggle-theme");

const toLight = () => {
  toggleThemeBtn.innerHTML = `<i style="color:#F0383B" class="fas fa-sun"></i>`;
  defaultTheme.disabled = false;
  darkTheme.disabled = true;
  localStorage.setItem("theme", "default");
};

const toDark = () => {
  toggleThemeBtn.innerHTML = `<i style="color:#D1F951" class="fas fa-moon"></i>`;
  defaultTheme.disabled = true;
  darkTheme.disabled = false;
  localStorage.setItem("theme", "dark");
};

const currentTheme = () => localStorage.getItem("theme");

const setDarkMode = (isDark) => {
  if (isDark) {
    toLight();
  } else {
    toDark();
  }
};

if (darkTheme) {
  let isDarkMode = false;
  if (currentTheme() === "dark") {
    isDarkMode = true;
  } else if (currentTheme() === "default") {
    isDarkMode = false;
  } else {
    isDarkMode = matchMedia("(prefers-color-scheme: dark)").matches;
  }

  if (toggleThemeBtn) {
    if (isDarkMode) {
      toDark();
    } else {
      toLight();
    }
  }

  const changeTheme = () => {
    setDarkMode(currentTheme() === "dark");
  };

  toggleThemeBtn.addEventListener("click", changeTheme);
}