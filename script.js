window.onload = function() {
  let btn = document.getElementById("dark-theme-btn")
  if (localStorage.getItem("theme") === "dark") {
    document.body.className = "dark-theme";
    btn.innerHTML = "🔆"
  }
  btn.onclick = () => {
    if (document.body.className) {
      document.body.className = "";
      btn.innerHTML = "🌙"
      localStorage.setItem("theme", "");
    } else {
      document.body.className = "dark-theme";
      btn.innerHTML = "🔆"
      localStorage.setItem("theme", "dark");
    }
  }
}