window.onload = function() {
  let btn = document.getElementById("dark-theme-btn")
  btn.onclick = () => {
    if (document.body.className) {
      document.body.className = "";
      btn.innerHTML = "🌙"
    } else {
      document.body.className = "dark-theme";
      btn.innerHTML = "🔆"
    }
  }
}