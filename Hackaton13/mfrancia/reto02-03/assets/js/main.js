// Obtener elementos del DOM
//const agregarBtn = document.getElementById('agregar-btn');
const agregarBtns = document.querySelectorAll('#agregar-btn')
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const mascotaForm = document.getElementById('mascota-form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const telefonoInput = document.getElementById('telefono');
const paisInput = document.getElementById('pais');
const razaInput = document.getElementById('raza');
const fotoInput = document.getElementById('foto');
const informacionTextarea = document.getElementById('informacion');
const mascotasBody = document.getElementById('mascotas-body');
const body = document.querySelector('body');

// Array para almacenar las mascotas
let mascotas = [];

// Función para abrir el modal
function abrirModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
  limpiarFormulario();
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  nombreInput.value = '';
  apellidoInput.value = '';
  telefonoInput.value = '';
  paisInput.value = '';
  razaInput.value = '';
  fotoInput.value = '';
  informacionTextarea.value = '';
}

// Función para agregar la clase si hay uno o más elementos
function agregarClaseSiHayElementos() {
  if (mascotas.length > 0) {
    body.classList.add('con-elementos');
  } else {
    body.classList.remove('con-elementos');
  }
}

// Función para agregar una mascota
function agregarMascota(event) {
  event.preventDefault();

  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const telefono = telefonoInput.value;
  const pais = paisInput.value;
  const raza = razaInput.value;
  const foto = fotoInput.value;
  const informacion = informacionTextarea.value;

  const mascota = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    pais: pais,
    raza: raza,
    foto: foto,
    informacion: informacion
  };

  mascotas.push(mascota);

  mostrarMascotas();

  cerrarModal();

  agregarClaseSiHayElementos();
}

// Función para mostrar las mascotas en la tabla
function mostrarMascotas() {
  mascotasBody.innerHTML = '';

  mascotas.forEach((mascota, index) => {
    const fila = document.createElement('div');
    const filaInner = document.createElement('div')
    fila.classList.add('mascota-item');
    filaInner.classList.add('mascota-inner');

    filaInner.innerHTML = `
      <button class="editar" onclick="editarMascota(${index})"><i class="fa-light fa-pen"></i><span>Edit</span></button>
      <button class="eliminar" onclick="eliminarMascota(${index})"><i class="fa-sharp fa-solid fa-x"></i><span>Delete</span></button>
      <div class="mascota-thumb"><img src="${mascota.foto}"></div>
      <div class="nombre">${mascota.nombre} ${mascota.apellido}</div>
      <div class="telefono">${mascota.telefono} | ${mascota.raza}</div>
      <div class="pais">${mascota.pais}</div>
      <div class="informacion">${mascota.informacion}</div>
    `;

    mascotasBody.appendChild(fila);
    fila.appendChild(filaInner);
  });
}

// Función para eliminar una mascota
function eliminarMascota(index) {
  mascotas.splice(index, 1);
  mostrarMascotas();
  agregarClaseSiHayElementos();
}

// Función para editar una mascota
function editarMascota(index) {
  const mascota = mascotas[index];
  nombreInput.value = mascota.nombre;
  apellidoInput.value = mascota.apellido;
  telefonoInput.value = mascota.telefono;
  paisInput.value = mascota.pais;
  razaInput.value = mascota.raza;
  fotoInput.value = mascota.foto;
  informacionTextarea.value = mascota.informacion;

  mascotas.splice(index, 1);

  abrirModal();
  mostrarMascotas();
  agregarClaseSiHayElementos();
}

// Agregar evento para abrir el modal al hacer clic en el botón de agregar


[...agregarBtns].forEach((agregarBtn)=>{

  agregarBtn.addEventListener('click', () => {
    abrirModal();
  });

});

// Agregar evento para cerrar el modal al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', cerrarModal);

// Agregar evento para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
});

// Agregar evento de envío al formulario
mascotaForm.addEventListener('submit', (event) => {
  agregarMascota(event);
});

// Mostrar las mascotas iniciales
mostrarMascotas();
