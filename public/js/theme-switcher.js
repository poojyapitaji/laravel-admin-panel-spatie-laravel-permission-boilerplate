var html=document.documentElement;function darkMode(){localStorage.theme="dark",html.classList.add("dark"),document.getElementById("darkModeButton").classList.add("hidden"),document.getElementById("lightModeButton").classList.remove("hidden"),document.getElementById("sweetalert_theme").href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark/dark.css"}function lightMode(){localStorage.theme="light",html.classList.remove("dark"),document.getElementById("darkModeButton").classList.remove("hidden"),document.getElementById("lightModeButton").classList.add("hidden"),document.getElementById("sweetalert_theme").href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-default/default.css"}function applytheme(){"theme"in localStorage&&"dark"===localStorage.theme&&darkMode()}applytheme();
