let btn = document.getElementById("dark-theme-btn");
let body = document.body;

// Updating the theme when the page is loaded
if (localStorage.getItem("theme") === "dark") {
    body.className = "dark-theme";
    btn.innerHTML = "💡";
}

// Changing the website theme when the button is clicked
btn.onclick = () => {
    body.className = body.className ? "" : "dark-theme";
    btn.innerHTML = body.className ? "🌙" : "💡";
    localStorage.setItem("theme", body.className ? "dark" : "");
};
