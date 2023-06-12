let pets = [];

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function addPet(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const pais = document.getElementById('pais').value;
  const foto = document.getElementById('foto').value;
  const comentarios = document.getElementById('comentarios').value;

  const pet = {
    nombre,
    apellido,
    correo,
    telefono,
    pais,
    foto,
    comentarios
  };

  pets.push(pet);
  closeModal();
  displayPets();
  clearForm();
}

function displayPets() {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  pets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Editar';
    editButton.onclick = () => editPet(index);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'X';
    deleteButton.onclick = () => confirmDelete(index);

    card.innerHTML = `
      <img src="${pet.foto}" alt="Foto de la mascota">
      <h3>${pet.nombre} ${pet.apellido}</h3>
      <p><strong>Correo:</strong> ${pet.correo}</p>
      <p><strong>Teléfono:</strong> ${pet.telefono}</p>
      <p><strong>País:</strong> ${pet.pais}</p>
      <p><strong>Comentarios:</strong> ${pet.comentarios}</p>
    `;

    card.appendChild(editButton);
    card.appendChild(deleteButton);

    cardsContainer.appendChild(card);
  });
}

function editPet(index) {
  const pet = pets[index];

  document.getElementById('foto').value = pet.foto;
  document.getElementById('nombre').value = pet.nombre;
  document.getElementById('apellido').value = pet.apellido;
  document.getElementById('correo').value = pet.correo;
  document.getElementById('telefono').value = pet.telefono;
  document.getElementById('pais').value = pet.pais;
  document.getElementById('comentarios').value = pet.comentarios;

  pets.splice(index, 1);
  displayPets();
  openModal();
}


// funcion modal Borrar Tarjeta

function confirmDelete(index) {
  const deleteModal = document.getElementById('delete-modal');
  const confirmButton = document.getElementById('delete-confirm-button');
  const cancelButton = document.getElementById('delete-cancel-button');

  deleteModal.style.display = 'block';

  confirmButton.onclick = () => {
    pets.splice(index, 1);
    displayPets();
    deleteModal.style.display = 'none';
  };

  cancelButton.onclick = () => {
    deleteModal.style.display = 'none';
  };
}


function clearForm() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('pais').value = 'Argentina';
  document.getElementById('foto').value = '';
  document.getElementById('comentarios').value = '';
}

displayPets();


//funcion para ocultar o mostrar 'Agregar Mascota'

const cardGrid = document.querySelector('.card-grid');

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
  
    if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].nodeName === 'DIV') {
  
      const bodyDiv = document.querySelector('.body');
      const buttonDiv = document.querySelector('.button');

      bodyDiv.style.display = 'none';
      buttonDiv.style.display = 'block';
    }
  });
});

const config = { childList: true };

observer.observe(cardGrid, config);
