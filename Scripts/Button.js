const btn = document.getElementById("glow-btn");

btn.addEventListener("click", () => {
btn.classList.add("glow");
setTimeout(() => {
btn.classList.remove("glow");
}, 200);
});