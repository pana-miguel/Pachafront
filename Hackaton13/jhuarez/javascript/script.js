let perros = JSON.parse(localStorage.getItem("perros")) || [];

//OBJETO MODAL

class Modal {

  constructor() {
    this.modal = document.getElementById('myModal');
    this.openBtn1 = document.getElementById('openModalBtn1');
    this.openBtn2 = document.getElementById('openModalBtn2');
    this.acceptBtn = document.getElementById('acceptBtn');
    this.cancelBtn = document.getElementById('cancelBtn');

    this.openBtn1.addEventListener('click', this.agregarNuevoPerro.bind(this));
    this.openBtn2.addEventListener('click', this.agregarNuevoPerro.bind(this));
    this.acceptBtn.addEventListener('click', this.accept.bind(this));
    this.cancelBtn.addEventListener('click', this.cancel.bind(this));
    window.addEventListener("click", this.closeModal.bind(this));
  }
  
    openModal() {
      this.modal.style.display = 'block';
    }

    closeModal(event) {
        if (event.target == this.modal) {
            this.modal.style.display = 'none';
        }
    };

    agregarNuevoPerro() {
      // Restablecer los valores del formulario
      const formulario = document.getElementById("formularioPerro");
      
      formulario.reset();
      
      // Abrir el modal
      this.openModal();
    }
  
    accept() {
      const index = this.acceptBtn.dataset.index; // Obtén el índice del perro
      const perros = JSON.parse(localStorage.getItem("perros")); // Obtén los perros del almacenamiento local
    
      if (perros && perros.length > 0) {
        const perro = perros[index]; // Obtén el perro correspondiente al índice
    
        // Verifica si el perro existe
        if (perro) {
          // Actualiza los valores del perro con los valores del formulario
          perro.nombre = document.getElementById("nombrePerro").value;
          perro.apellido = document.getElementById("apellidoPerro").value;
          perro.raza = document.getElementById("razaPerro").value;
          perro.telefono = document.getElementById("telefonoPerro").value;
          perro.pais = document.getElementById("paisPerro").value;
          perro.descripcion = document.getElementById("descripcionPerro").value;
    
          // Guarda los perros actualizados en el almacenamiento local
          localStorage.setItem("perros", JSON.stringify(perros));
    
          // Cierra el modal y actualiza la lista de perros en la página
          this.modal.style.display = "none";
          mostrarPerrosEnPagina();
        } else {
          this.modal.style.display = "none";
          console.log("El perro no existe.");
          return; // Salir del método o realizar alguna acción adicional
        }
      } else {
        this.modal.style.display = "none";
        console.log("El arreglo de perros está vacío o no existe.");
        return; // Salir del método o realizar alguna acción adicional
      }
    }
  
    cancel() {
      console.log('Botón Cancelar presionado');
      this.modal.style.display = 'none';
    }

    llenarFormulario(perro) {
      const nombrePerro = document.getElementById("nombrePerro");
      const apellidoPerro = document.getElementById("apellidoPerro");
      const razaPerro = document.getElementById("razaPerro");
      const telefonoPerro = document.getElementById("telefonoPerro");
      const paisPerro = document.getElementById("paisPerro");
      const descripcionPerro = document.getElementById("descripcionPerro");
  
      nombrePerro.value = perro.nombre;
      apellidoPerro.value = perro.apellido;
      razaPerro.value = perro.raza;
      telefonoPerro.value = perro.telefono;
      paisPerro.value = perro.pais;
      descripcionPerro.value = perro.descripcion;
    }

    aceptarEdicion(event, index, perros) {
      event.preventDefault();
    
      // Obtener los valores actualizados del formulario
      const nombrePerro = document.getElementById("nombrePerro").value;
      const apellidoPerro = document.getElementById("apellidoPerro").value;
      const razaPerro = document.getElementById("razaPerro").value;
      const telefonoPerro = document.getElementById("telefonoPerro").value;
      const paisPerro = document.getElementById("paisPerro").value;
      const descripcionPerro = document.getElementById("descripcionPerro").value;
    
      // Obtener el campo de entrada de archivo
      const inputFoto = document.getElementById("fotoPerro");
    
      // Obtener el archivo de imagen seleccionado
      const nuevaFotoPerro = inputFoto.files[0];
    
      // Actualizar los valores del perro seleccionado
      const perro = perros[index];
      perro.nombre = nombrePerro;
      perro.apellido = apellidoPerro;
      perro.raza = razaPerro;
      perro.telefono = telefonoPerro;
      perro.pais = paisPerro;
      perro.descripcion = descripcionPerro;
    
      // Actualizar la imagen del perro si se seleccionó una nueva imagen
      if (nuevaFotoPerro) {
        const reader = new FileReader();
    
        reader.onload = function (event) {
          const foto = event.target.result;
          perro.foto = foto;
    
          // Actualizar el array de perros en el almacenamiento local
          localStorage.setItem("perros", JSON.stringify(perros));
    
          // Cerrar el modal y actualizar la lista de perros en la página
          modal.modal.style.display = "none";
          mostrarPerrosEnPagina();
          resetFileInput(); // Restablecer el campo de entrada de archivo
        };
    
        reader.readAsDataURL(nuevaFotoPerro);
      } else {
        // No se seleccionó una nueva imagen, solo actualizar los valores existentes
    
        // Actualizar el array de perros en el almacenamiento local
        localStorage.setItem("perros", JSON.stringify(perros));
    
        // Cerrar el modal y actualizar la lista de perros en la página
        modal.modal.style.display = "none";
        mostrarPerrosEnPagina();
        resetFileInput(); // Restablecer el campo de entrada de archivo
      }
    }
}

class Modal2 {
  constructor() {
    this.modal = document.getElementById('myModal2');
    this.modalMensaje = document.getElementById('modal2Mensaje');
    this.modalAceptarBtn = document.getElementById('modal2AceptarBtn');
    this.modalCancelarBtn = document.getElementById('modal2CancelarBtn');

    this.modalAceptarBtn.addEventListener('click', this.aceptar.bind(this));
    this.modalCancelarBtn.addEventListener('click', this.cancelar.bind(this));
  }

  mostrar(mensaje, aceptarCallback) {
    this.modalMensaje.textContent = mensaje;
    this.modalAceptarBtn.addEventListener('click', aceptarCallback);
    this.modal.style.display = 'block';
  }

  ocultar() {
    this.modal.style.display = 'none';
    this.modalAceptarBtn.removeEventListener('click', this.aceptar);
  }

  aceptar() {
    this.ocultar();
  }

  cancelar() {
    this.ocultar();
  }
}


class Perro {
  constructor(nombre, apellido, raza, telefono, pais, foto, descripcion, index) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.raza = raza;
    this.telefono = telefono;
    this.pais = pais;
    this.foto = foto;
    this.descripcion = descripcion;
    this.index = index;
  }

}

const modal = new Modal();
const modal2 = new Modal2();

//let perros=[];

document.getElementById("formularioPerro").addEventListener("submit", async function(event) {
  
  event.preventDefault();
  const nombre = document.getElementById("nombrePerro").value;
  const apellido = document.getElementById("apellidoPerro").value;
  const raza = document.getElementById("razaPerro").value;
  const telefono = document.getElementById("telefonoPerro").value;
  const pais = document.getElementById("paisPerro").value;
  const inputFoto = document.getElementById("fotoPerro").files[0]; // Obtén el archivo de imagen seleccionado
  const descripcion = document.getElementById("descripcionPerro").value;

  perros = await obtenerPerros();

  if (event.submitter.id === "acceptBtn") {
    if (nombre && apellido && raza && telefono && pais && inputFoto && descripcion) {

      const reader = new FileReader();

      reader.onload = function(event) {

        const foto = event.target.result; // Obtén la representación base64 de la imagen
        const nuevoPerro = new Perro(nombre, apellido, raza, telefono, pais, foto, descripcion, perros.length); // Agregamos perros.length como el índice del nuevo perro

        perros.push(nuevoPerro);

        // Guardar el array de perros en el Web Storage
        localStorage.setItem("perros", JSON.stringify(perros));

        console.log(perros);

        mostrarPerrosEnPagina(); // Sin async/await, llamada directa

        document.getElementById("formularioPerro").reset();

      } 

      reader.readAsDataURL(inputFoto); // Leer el archivo de imagen y convertirlo a base64

    }
    
    else {
      // Mostrar un mensaje de error o realizar otra acción cuando algún campo esté vacío
      alert("Por favor, complete todos los campos obligatorios.");
      console.log("Por favor, complete todos los campos obligatorios.");
    }
  } 
  
  else {
    // El evento se originó desde el botón de cancelar
    // Realizar acciones adicionales o simplemente ignorar el evento
    console.log("Se ha presionado el botón de cancelar");
  }
});

document.addEventListener("DOMContentLoaded", async function() {
  await mostrarPerrosEnPagina();
});


async function mostrarPerrosEnPagina() {
  try {
    const perros = await obtenerPerros(); // Uso de async/await aquí

    const contenedorPerros = document.getElementById("listaPerros");
    const botonAgregarMascota1 = document.getElementById("openModalBtn1");
    const botonAgregarMascota2 = document.getElementById("openModalBtn2");

    contenedorPerros.innerHTML = "";
    botonAgregarMascota1.classList.toggle("oculto", perros.length > 0);
    botonAgregarMascota2.classList.toggle("oculto", perros.length === 0);

    perros.forEach((perro, index) => {
      const perroHTML = `
        <li class="espaciado-vertical">
          <div class="paddingPerros">
            <div class="paddingPerros bordes">
              <img src="${perro.foto}" alt="Foto del perro">
              <h3>${perro.nombre} ${perro.apellido}</h3>
              <p>Raza: ${perro.raza}</p>
              <p>Teléfono: ${perro.telefono}</p>
              <p>País: ${perro.pais}</p>          
              <p>Descripción: ${perro.descripcion}</p>
              <button class="btn-editar" data-index="${index}">Editar</button>
              <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </div>
          </div>
        </li>
      `;

      contenedorPerros.innerHTML += perroHTML;
    });

    // Agregar eventos a los botones de editar y eliminar
    const botonesEditar = document.getElementsByClassName("btn-editar");
    const botonesEliminar = document.getElementsByClassName("btn-eliminar");

    for (let i = 0; i < botonesEditar.length; i++) {
      botonesEditar[i].addEventListener("click", function (event) {
        editarPerro(event, perros);
      });
    }

    for (let i = 0; i < botonesEliminar.length; i++) {
      botonesEliminar[i].addEventListener("click", function (event) {
        const index = event.target.dataset.index;
        const perro = perros[index];
        mostrarModalConfirmacion(perro, index);
      });
    }

  } catch (error) {
    console.log(error);
  }
}

function obtenerPerros() {
  return new Promise((resolve, reject) => {
    const perrosGuardados = localStorage.getItem("perros");
    if (perrosGuardados) {
      resolve(JSON.parse(perrosGuardados));
    } else {
      reject(new Error("No se encontraron perros almacenados."));
    }
  });
}

function editarPerro(event, perros) {
  const index = event.target.dataset.index;
  const perro = perros[index];
  modal.llenarFormulario(perro);
  modal.openModal();
  modal.acceptBtn.dataset.index = index;
  modal.acceptBtn.removeEventListener("click", modal.accept);
  modal.acceptBtn.addEventListener("click", function (event) {
    modal.aceptarEdicion(event, index, perros); // Cambiar evento "submit" a "click"
  });
}

function resetFileInput() {
  const inputFoto = document.getElementById("fotoPerro");
  inputFoto.value = ""; // Restablecer el valor del campo de entrada de archivo
}

function mostrarModalConfirmacion(perro, index) {
  const mensaje = `¿Estás seguro de que quieres eliminar a ${perro.nombre} ${perro.apellido}?`;
  modal2.mostrar(mensaje, () => {
    eliminarPerro(index);
  });
}

async function eliminarPerro(index) {
  const perros = await obtenerPerros();
  perros.splice(index, 1);
  localStorage.setItem("perros", JSON.stringify(perros));
  mostrarPerrosEnPagina();
}
