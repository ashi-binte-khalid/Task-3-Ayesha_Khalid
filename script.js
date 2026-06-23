const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");
let isDarkMode = false;
toggleBtn.addEventListener("click", toggleTheme);
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
    if(isDarkMode === false){
        message.textContent =
        "Dark Mode is Enabled.";
        toggleBtn.textContent =
        "Disable Dark Mode";
        isDarkMode = true;
    }
    else{
        message.textContent =
        "Dark Mode is Disabled.";
        toggleBtn.textContent =
        "Enable Dark Mode";
        isDarkMode = false;
    }
}