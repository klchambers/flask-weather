// Ensure DOM fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if a theme is already stored in localStorage
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.setAttribute("data-bs-theme", storedTheme);
    // Update the button icon based on the theme
    if (storedTheme === "dark") {
      document.getElementById("btn-switch").innerHTML =
        '<i class="fa-regular fa-moon"></i> dark mode';
    } else {
      document.getElementById("btn-switch").innerHTML =
        '<i class="fa-regular fa-sun"></i> light mode';
    }
  } else {
    // Default to light mode if no preference is set
    document.documentElement.setAttribute("data-bs-theme", "light");
  }

  // Event listener to btn-switch for toggling dark/light mode
  document.getElementById("btn-switch").addEventListener("click", function () {
    // If dark mode is enabled, switch to light mode
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      // Change icon and text to light mode
      this.innerHTML = '<i class="fa-regular fa-sun"></i> light mode';
      // Store theme in localStorage
      localStorage.setItem("theme", "light");
    } else {
      // set theme to dark mode
      document.documentElement.setAttribute("data-bs-theme", "dark");
      // change icon and text to dark mode
      this.innerHTML = '<i class="fa-regular fa-moon"></i> dark mode';
      localStorage.setItem("theme", "dark");
    }
  });
});
