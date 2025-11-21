const titulo = document.querySelector("h1");
titulo.textContent = "Titulo cambiado por Gonzalo Rosa"

const btn = document.getElementById("boton");

btn.addEventListener("click", () => {
    btn.classList.toggle("boton")
})