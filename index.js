const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
    btn.style.border = "none";
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.top = "5px";
    btn.style.left = "5px";

})