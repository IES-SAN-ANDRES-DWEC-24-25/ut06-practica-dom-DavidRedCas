const headers = document.querySelectorAll("h3");

headers.forEach((header) => {
    header.addEventListener("click", (event) => {
        const h3 = event.target;
        const grado = h3.textContent.trim();
        const contenedor = h3.parentElement;
        const turno = contenedor.id;
        const lista = h3.nextElementSibling;
        const grupos = Array.from(lista.children).map((li) => li.textContent);

        const mensaje = `Has elegido ${grado} que se imparte en turno de ${turno}.\nLos nº de grupos que se imparten son ${grupos.length}: ${grupos.join(", ")}.`;

        let resultado = document.createElement("p");
        resultado.textContent = mensaje;
        document.body.appendChild(resultado);
    });
});
