
function show() { 
    const hide = document.getElementById("hide")
    const show = document.getElementById("show")
    const inputID = document.getElementById("inputID")
    if (inputID.type == "password") {
        inputID.type = "text";
        show.style.display = "none"
        hide.style.display = "block" 
    }
} 
function hide() {
    const hide = document.getElementById("hide")
    const show = document.getElementById("show")
    const inputID = document.getElementById("inputID") 
    if (inputID.type == "text") {
        inputID.type = "password"
        show.style.display = "block"
        hide.style.display = "none" 
    }
}