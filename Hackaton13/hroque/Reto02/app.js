const addForm = document.getElementById('addForm');
const editForm = document.getElementById('editForm');
const btnCrear = document.getElementById('btnCrear');
const btnEdit = document.getElementById('btnEdit');
const btnAddNav = document.getElementById('btn-crear-nav');
const btnAddCenter = document.getElementById('btn-crear-main');
const addPetModal = document.getElementById('addPetModal');
const editPetModal = document.getElementById('editPetModal');
const deletePetModal = document.getElementById('deletePetModal');
const containerPets = document.getElementById('containerPets');
document.getElementById('btnCloseAdd').addEventListener('click', () => addForm.reset());
document.getElementById('btnCloseEdit').addEventListener('click', () => addForm.reset());
btnCrear.addEventListener('click', () => {
  const formData = new FormData(addForm);
  const entries = formData.entries();
  const data = {};
  data.pais = '';
  data.uuid = generarId();
  for (const [name, value] of entries) {
		data[name] = value; // Agregar cada valor al objeto de array
	}
  console.log(data);

  if(data.nombre === ''){
    msgError('No puedes dejar vacio el nombre', 'alertAdd');
    return;
  } else if(data.correo === '') {
    msgError('No puedes dejar vacio el correo', 'alertAdd');
    return;
  } else if(data.raza === '') {
    msgError('No puedes dejar vacio el raza', 'alertAdd');
    return;
  } else if(data.telefono === '') {
    msgError('No puedes dejar vacio el telefono', 'alertAdd');
    return;
  } else if(data.pais === '') {
    msgError('No puedes dejar vacio el pais', 'alertAdd');
    return;
  } else if(data.descripcion === '') {
    msgError('No puedes dejar vacio la descripcion', 'alertAdd');
    return;
  }
  if(validarCorreo(data.correo) === false){
    msgError('Formato de correo invalido', 'alertAdd');
    return;
  }
  if(validarTelefono(data.telefono) === false){
    msgError('Formato de telefono invalido', 'alertAdd');
    return;
  }
  console.log(data);
  addPetLocalStore(data)
  addPetModal.checked = false;
  addForm.reset();
  addCard(data);
});

function deletePet() {
  
  this.setId = function(uuid) {
    this.uuid = uuid
  };
  this.delete = function () {
    console.log(this.uuid);
    const newPetList = JSON.parse(localStorage.getItem('petsList')).filter((pet) => pet.uuid !== this.uuid);
    loadPets(newPetList);
    deletePetLocalStore(newPetList);
    deletePetModal.checked = false;
    console.log(newPetList);
  }
}
const mascota = new deletePet();


const addCard = (data) => {
  const card = document.createElement('div');
  card.setAttribute('uuid', data.uuid);
  card.classList.add('h-[20.5rem]', 'w-[15rem]', 'border', 'b-gray-300', 'grid-cols-1', 'solid', 'flex', 'flex-col', 'items-center', 'p-4', 'justify-center');
  card.innerHTML = `
    <div class="w-full flex flex-row justify-between items-center">
      <label onclick="loadDataEdit('${data.uuid}')" for="editPetModal" class="flex flex-col items-center cursor-pointer">
        <svg width="16px" height="16px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14.363 5.652l1.48-1.48a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 00-.578 1.238l-.242 2.74a1 1 0 001.084 1.085l2.74-.242a2 2 0 001.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <p class="text-sm">Editar</p>
      </label>
      <label onclick="mascota.setId('${data.uuid}')" for="deletePetModal" class="flex flex-col items-center cursor-pointer">
        <svg width="16px" height="16px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <p class="text-sm">Eliminar</p>
      </label>
    </div>
    <div>
      <img class="rounded-full w-[8.75rem] h-[8.75rem]" id="imagenMascota" src="${data.url !== '' ? pet.url : 'https://placehold.co/140x140.png'}" alt="Imagen mascota">
    </div>
    <div class="text-center">
      <p class="text-xl" id="nombreMascota">${data.nombre}</p>
      <p class="text-sm"> ${data.telefono}</p>
      <p class="text-sm"> ${data.correo}</p>
      <p id="paisMascota">${data.pais}</p>
      <p class="line-clamp-3 text-sm" id="descripcionMascota">${data.descripcion}</p>
    </div>
  `;
  containerPets.append(...containerPets.children, card);
  loadPets(pets);
}
const loadPets = (petsCards) => {
  containerPets.innerHTML = '';
  if(pets.length === 0){
    console.log('PetsList vacio');
    btnAddCenter.classList.remove('hidden');
  } else {
    petsCards.forEach((pet) => {
      btnAddNav.classList.remove('invisible')
      btnAddCenter.classList.add('hidden');
      containerPets.innerHTML += `
        <div
          id="cardPet"
          class="h-[20.5rem] w-[15rem] border b-gray-300 solid flex flex-col items-center p-4 justify-center"
          uuid=${pet.uuid}
        >
          <div class="w-full flex flex-row justify-between items-center">
            <label onclick="loadDataEdit('${pet.uuid}')" for="editPetModal" class="flex flex-col items-center cursor-pointer">
              <svg width="16px" height="16px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14.363 5.652l1.48-1.48a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 00-.578 1.238l-.242 2.74a1 1 0 001.084 1.085l2.74-.242a2 2 0 001.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <p class="text-sm">Editar</p>
            </label>
            <label onclick="mascota.setId('${pet.uuid}')" for="deletePetModal" class="flex flex-col items-center cursor-pointer">
              <svg width="16px" height="16px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <p class="text-sm">Eliminar</p>
            </label>
          </div>
          <div>
            <img class="rounded-full w-[8.75rem] h-[8.75rem]" id="imagenMascota" src="${pet.url !== '' ? pet.url : 'https://placehold.co/140x140.png'}" alt="Imagen mascota">
          </div>
          <div class="text-center">
            <p class="text-xl" id="nombreMascota">${pet.nombre}</p>
            <p class="text-sm"> ${pet.telefono}</p>
            <p class="text-sm"> ${pet.correo}</p>
            <p id="paisMascota">${pet.pais}</p>
            <p class="line-clamp-3 text-sm" id="descripcionMascota">${pet.descripcion}</p>
          </div>
        </div>
      `;
    })
  }
}
loadPets(pets);

const loadDataEdit = (uuid) => {
  const petData = JSON.parse(localStorage.getItem('petsList')).find((pet) => pet.uuid === uuid);
  // console.log(petData);
  document.getElementById('uuidEdit').value = petData.uuid;
  document.getElementById('nombreMascotaEdit').value = petData.nombre;
  document.getElementById('correoMascotaEdit').value = petData.correo;
  document.getElementById('razaMascotaEdit').value = petData.raza;
  document.getElementById('telefonoMascotaEdit').value = petData.telefono;
  document.getElementById('paisMascotaEdit').value = petData.pais;
  document.getElementById('urlMascotaEdit').value = petData.url;
  document.getElementById('descripcionMascotaEdit').value = petData.descripcion;
};

btnEdit.addEventListener('click', () => {
  // const uuid = document.getElementById('uuidEdit');
  const formData = new FormData(editForm);
  const entries = formData.entries();
  const data = {};
  for (const [name, value] of entries) {
		data[name] = value; // Agregar cada valor al objeto de array
	}
  if(data.nombre === ''){
    msgError('No puedes dejar vacio el nombre', 'alertEdit');
    return;
  } else if(data.correo === '') {
    msgError('No puedes dejar vacio el correo', 'alertEdit');
    return;
  } else if(data.raza === '') {
    msgError('No puedes dejar vacio el raza', 'alertEdit');
    return;
  } else if(data.telefono === '') {
    msgError('No puedes dejar vacio el telefono', 'alertEdit');
    return;
  } else if(data.pais === '') {
    msgError('No puedes dejar vacio el pais', 'alertEdit');
    return;
  } else if(data.descripcion === '') {
    msgError('No puedes dejar vacio la descripcion', 'alertEdit');
    return;
  }
  if(validarCorreo(data.correo) === false){
    msgError('Formato de correo invalido', 'alertEdit');
    return;
  }
  if(validarTelefono(data.telefono) === false){
    msgError('Formato de telefono invalido', 'alertEdit');
    return;
  }

  const newPetList = pets.map((pet) => {
		if (pet.uuid === data.uuid) {
			return data;
		} else {
			return pet;
		}
	});
  editPetLocalStore(newPetList);
  loadPets(newPetList)
  editPetModal.checked = false;
  editForm.reset();
});


