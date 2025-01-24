let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  let li = event.target.closest('li');

  if (event.target.classList == 'subir') {
    let prevLi = li.previousElementSibling;
    if (prevLi) {
      listUl.insertBefore(li, prevLi);
    }
  }
  if (event.target.classList == 'bajar') {
    let nextLi = li.nextElementSibling;
    if (nextLi) {
      listUl.insertBefore(nextLi, li);
    }
  }
  if (event.target.classList == 'borrar') {
    li.remove();
  }
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Ocultar lista';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Mostrar lista';
  }
 }
 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  if (descriptionInput.value != "") {
    descriptionP.textContent = descriptionInput.value;
  }
 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
    let nuevoElemento = addItemInput.value;
    if (nuevoElemento != "") {
      let nuevoLi = document.createElement("li");
      nuevoLi.textContent = nuevoElemento;
      attachListItemButtons(nuevoLi);
      listUl.appendChild(nuevoLi);
    }
 }


