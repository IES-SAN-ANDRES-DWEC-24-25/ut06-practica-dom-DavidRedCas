document.getElementById("añadir").addEventListener("click", () => {
    let nuevoElemento = document.querySelector(".AñadirElemento").value;
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = nuevoElemento;
    const ul = document.querySelector(".lista ul");
    ul.appendChild(nuevoLi);
});

document.getElementById("borrarUlt").addEventListener("click", () => {
    const ul = document.querySelector(".lista ul");
    let ultimo = ul.lastElementChild;
    ul.removeChild(ultimo);
});

document.getElementById("borrarPri").addEventListener("click", () => {
    const ul = document.querySelector(".lista ul");
    let primero = ul.firstElementChild;
    ul.removeChild(primero);
});