// Ensure DOM fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Event listener to btn-switch for toggling dark/light mode
    document.getElementById("btn-switch").addEventListener("click", function() {
        // If dark mode is enabled, switch to light mode
        if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
            document.documentElement.setAttribute("data-bs-theme","light")
            // Change icon and text to light mode
            this.innerHTML = '<i class="fa-regular fa-sun"></i> light mode';
        }
        else {
            // set theme to dark mode
            document.documentElement.setAttribute("data-bs-theme","dark");
            // change icon and text to dark mode
            this.innerHTML = '<i class="fa-regular fa-moon"></i> dark mode';
        }});
    });
