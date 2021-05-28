window.onload = function() {
  let btn = document.getElementById("dark-theme-btn")
  let body = document.body

  if (localStorage.getItem("theme") === "dark") {
    body.className = "dark-theme";
    btn.innerHTML = "💡"
  }
  btn.onclick = () => {
    if (body.className) {
      body.className = "";
      btn.innerHTML = "🌙"
      localStorage.setItem("theme", "");
    } else {
      body.className = "dark-theme";
      btn.innerHTML = "💡"
      localStorage.setItem("theme", "dark");
    }
  }
}