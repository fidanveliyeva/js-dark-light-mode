const modebtn = document.getElementById("btnmode");
let isDark = false;

modebtn.addEventListener("click", () => {
    if (!isDark) {
    document.body.style.background = "#000"
    document.body.style.color = "#fff" 
    isDark = true
    modebtn.textContent = "light mode"
    } else{
    document.body.style.background = "#fff"
    document.body.style.color = "#000" 
    isDark = false
    modebtn.textContent = "dark mode"
    }
})