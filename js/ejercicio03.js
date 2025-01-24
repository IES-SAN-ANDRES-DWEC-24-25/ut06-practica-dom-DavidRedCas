document.querySelector(".BotonAñadir").addEventListener("click", () => {
    let nuevoElemento = document.querySelector(".AñadirElemento").value;
    if (nuevoElemento != "") {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = nuevoElemento;
        const ul = document.querySelector(".lista ul");
        ul.appendChild(nuevoLi);
    }
});