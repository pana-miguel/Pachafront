class Modal {

    constructor() {
      this.modal = document.getElementById('modal');
      this.openBtn = document.getElementById('openModalBtn');
      this.closeBtn = document.getElementById('closeModalBtn');
      this.acceptBtn = document.getElementById('acceptBtn');
      this.cancelBtn = document.getElementById('cancelBtn');
  
      this.openBtn.addEventListener('click', this.openModal.bind(this));
      this.closeBtn.addEventListener('click', this.closeModal.bind(this));
      this.acceptBtn.addEventListener('click', this.accept.bind(this));
      this.cancelBtn.addEventListener('click', this.cancel.bind(this));
    }
  
    openModal() {
      this.modal.style.display = 'block';
    }
  
    closeModal() {
      this.modal.style.display = 'none';
    }
  
    accept() {
      console.log('Botón Aceptar presionado');
    }
  
    cancel() {
      console.log('Botón Cancelar presionado');
    }
}
  
const modal = new Modal();