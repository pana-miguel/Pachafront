const pets = JSON.parse(localStorage.getItem('petsList')) || [];
const addPetLocalStore = (pet) => {
	if (Object.entries(pet) !== 0) {
		pets.push(pet);
		localStorage.setItem('petsList', JSON.stringify(pets));
		console.log(pets);
	}
	loadPets(pets);
};

const editPetLocalStore = (petList) => {
	localStorage.setItem('petsList', JSON.stringify(petList));
};

const deletePetLocalStore = (petList) => {
	localStorage.setItem('petsList', JSON.stringify(petList));
};