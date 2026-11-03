function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("show");
  });
});