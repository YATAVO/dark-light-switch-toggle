const switchInput = document.getElementById("theme-switcher");
switchInput.addEventListener("change", function() {
    if (this.checked) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
});
