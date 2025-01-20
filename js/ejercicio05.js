const headers = document.querySelectorAll("h3");

headers.forEach((header) => {
    header.addEventListener("click", (event) => {
        const targetH3 = event.target;
        const grado = targetH3.textContent.trim();
        const contenedor = targetH3.parentElement;
        const turno = contenedor.id;
        const lista = targetH3.nextElementSibling;
        const grupos = Array.from(lista.children).map((li) => li.textContent);

        const mensaje = `
            Has elegido ${grado} que se imparte en turno de ${turno}.
            Los nº de grupos que se imparten son ${grupos.length}: ${grupos.join(", ")}.
        `;

        const resultado = document.createElement("p");
        resultado.textContent = mensaje;
        document.body.appendChild(resultado);
    });
});
