let oscuro = 0;
document.getElementById("boton").addEventListener("click", () => {
    if (oscuro == 0) {
        document.getElementById("color").style.backgroundColor = "black";
        document.getElementById("color").style.color = "white";
        document.getElementById("boton").innerHTML = "fondo claro"
        oscuro = 1;
    } else {
        document.getElementById("color").style.backgroundColor = "white";
        document.getElementById("color").style.color = "black";
        document.getElementById("boton").innerHTML = "fondo oscuro"
        oscuro = 0;
    }
    
});