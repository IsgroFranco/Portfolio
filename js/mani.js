const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll("#nav a");
const links = document.querySelector("#nav ul");

function toggleMenu() {
  nav.classList.toggle("visible");
  links.classList.toggle("visible");
  abrir.classList.toggle("cerrar-menu");
  abrir.classList.toggle("abrir-menu");
  cerrar.classList.toggle("abrir-menu");
  cerrar.classList.toggle("cerrar-menu");
}

abrir.addEventListener("click", toggleMenu);
cerrar.addEventListener("click", toggleMenu);

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.classList.remove("cerrar-menu");
    abrir.classList.add("abrir-menu");
    cerrar.classList.remove("abrir-menu");
    cerrar.classList.add("cerrar-menu");
  });
});
