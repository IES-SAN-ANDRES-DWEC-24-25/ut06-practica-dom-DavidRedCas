document.querySelector(".BotonAñadir").addEventListener("click", () => {
    let nuevoElemento = document.querySelector(".AñadirElemento").value;
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoElemento;
    const ul = document.querySelector(".lista ul");
    ul.appendChild(nuevoLi);
});