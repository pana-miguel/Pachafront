
class Modal {
  constructor() {
    this.mensajeModal = '';
    this.inputNombre = '';
    this.inputApellido = '';
    this.inputCorreo = '';
    this.inputTelefono = '';
    this.inputPais = '';
    this.inputFotografia = '';
    this.inputDescripcion = '';
  };
};

Modal.prototype.setMensajeModal = function (addMensajeModal) {
  this.mensajeModal = addMensajeModal;
  return this;
};

Modal.prototype.setInputNombre = function (addInputNombre) {
  this.inputNombre = addInputNombre;
  return this;
};

Modal.prototype.setInputApellido = function (addInputApellido) {
  this.inputApellido = addInputApellido;
  return this;
};

Modal.prototype.setInputCorreo = function (addInputCorreo) {
  this.inputCorreo = addInputCorreo;
  return this;
};

Modal.prototype.setInputTelefono = function (addInputTelefono) {
  this.inputTelefono = addInputTelefono;
  return this;
};

Modal.prototype.setInputPais = function (addInputPais) {
  this.inputPais = addInputPais;
  return this;
};

Modal.prototype.setInputFotografia = function (addInputFotografia) {
  this.inputFotografia = addInputFotografia;
  return this;
};

Modal.prototype.setInputDescripcion = function (addInputDescripcion) {
  this.inputDescripcion = addInputDescripcion;
  return this;
};

Modal.prototype.build = function () {
  return {
    mensajeModal: this.mensajeModal,
    inputNombre: this.inputNombre,
    inputApellido: this.inputApellido,
    inputCorreo: this.inputCorreo,
    inputTelefono: this.inputTelefono,
    inputPais: this.inputPais,
    inputFotografia: this.inputFotografia,
    inputDescripcion: this.inputDescripcion
  };
};

Modal.prototype.cerrarModal = function () {
  const body = document.getElementById('body');
  const section = document.querySelector('.formContainer');

  body.removeChild(section);
};

Modal.prototype.completarFormulario = function (index) {
  const body = document.getElementById('body');
  const section = document.createElement('section');
  const form = document.createElement('form');
  const divMensaje = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const divInputs = document.createElement('div');
  const inputNombre = document.createElement('input');
  const inputApellido = document.createElement('input');
  const inputCorreo = document.createElement('input');
  const inputTelefono = document.createElement('input');
  const inputPais = document.createElement('input');
  const inputFotografia = document.createElement('input');
  const textarea = document.createElement('textarea');
  const divButtons = document.createElement('div');
  const btnAccept = document.createElement('button');
  const btnCancel = document.createElement('button');

  section.setAttribute('class', 'formContainer');
  form.setAttribute('class', 'form form--overflow');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');
  divMensaje.setAttribute('class', 'form__presentation');
  h2.setAttribute('class', 'form__title');
  img.setAttribute('class', 'form__iconClose');
  img.setAttribute('src', './assets/close.svg');
  img.setAttribute('alt', 'close');
  divInputs.setAttribute('class', 'form__inputsContainer');
  inputNombre.setAttribute('type', 'text');
  inputNombre.setAttribute('id', 'nombre');
  inputNombre.setAttribute('name', 'nombre');
  inputNombre.setAttribute('placeholder', 'Nombre');
  inputNombre.setAttribute('autocomplete', 'off');
  inputNombre.setAttribute('value', this.inputNombre);
  inputApellido.setAttribute('type', 'text');
  inputApellido.setAttribute('id', 'apellido');
  inputApellido.setAttribute('name', 'apellido');
  inputApellido.setAttribute('placeholder', 'Apellido');
  inputApellido.setAttribute('autocomplete', 'off');
  inputApellido.setAttribute('value', this.inputApellido);
  inputCorreo.setAttribute('type', 'text');
  inputCorreo.setAttribute('id', 'correo');
  inputCorreo.setAttribute('name', 'correo');
  inputCorreo.setAttribute('placeholder', 'Correo');
  inputCorreo.setAttribute('autocomplete', 'off');
  inputCorreo.setAttribute('value', this.inputCorreo);
  inputTelefono.setAttribute('type', 'text');
  inputTelefono.setAttribute('id', 'telefono');
  inputTelefono.setAttribute('name', 'telefono');
  inputTelefono.setAttribute('placeholder', 'Telefono');
  inputTelefono.setAttribute('autocomplete', 'off');
  inputTelefono.setAttribute('value', this.inputTelefono);
  inputPais.setAttribute('type', 'text');
  inputPais.setAttribute('id', 'pais');
  inputPais.setAttribute('name', 'pais');
  inputPais.setAttribute('placeholder', 'Pais');
  inputPais.setAttribute('autocomplete', 'off');
  inputPais.setAttribute('value', this.inputPais);
  inputFotografia.setAttribute('type', 'text');
  inputFotografia.setAttribute('id', 'fotografia');
  inputFotografia.setAttribute('name', 'fotografia');
  inputFotografia.setAttribute('placeholder', 'Url de Fotografia');
  inputFotografia.setAttribute('autocomplete', 'off');
  inputFotografia.setAttribute('value', this.inputFotografia);
  textarea.setAttribute('id', 'descripcion');
  textarea.setAttribute('name', 'descripcion');
  textarea.setAttribute('rows', '8');
  textarea.setAttribute('placeholder', 'Sobre él/ella');
  textarea.setAttribute('value', this.inputDescripcion)
  divButtons.setAttribute('class', 'form__buttons');
  btnAccept.setAttribute('type', 'submit');
  btnAccept.setAttribute('class', 'button__accept');
  btnCancel.setAttribute('type', 'button');
  btnCancel.setAttribute('class', 'button__cancel');

  h2.textContent = this.mensajeModal;
  textarea.textContent = this.inputDescripcion;
  btnAccept.textContent = 'Aceptar';
  btnCancel.textContent = 'Cancelar';

  divMensaje.appendChild(img);
  divMensaje.appendChild(h2);
  divInputs.appendChild(inputNombre);
  divInputs.appendChild(inputApellido);
  divInputs.appendChild(inputCorreo);
  divInputs.appendChild(inputTelefono);
  divInputs.appendChild(inputPais);
  divInputs.appendChild(inputFotografia);
  divInputs.appendChild(textarea);
  divButtons.appendChild(btnAccept);
  divButtons.appendChild(btnCancel);
  form.appendChild(divMensaje);
  form.appendChild(divInputs);
  form.appendChild(divButtons);
  section.appendChild(form);
  body.appendChild(section);

  img.addEventListener('click', () => {
    this.cerrarModal();
  });

  btnAccept.addEventListener('click', (event) => {
    event.preventDefault();
    this.cerrarModal();

    app.modificarListaPerros(inputNombre.value, inputApellido.value, inputCorreo.value, inputTelefono.value, inputPais.value, inputFotografia.value, textarea.value, index);
  });

  btnCancel.addEventListener('click', () => {
    this.cerrarModal();
  });

  return this;
};

Modal.prototype.modalEliminar = function (index) {
  const body = document.getElementById('body');
  const section = document.createElement('section');
  const form = document.createElement('form');
  const divIcon = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const divButtons = document.createElement('div');
  const btnAccept = document.createElement('button');
  const btnCancel = document.createElement('button');

  section.setAttribute('class', 'formContainer');
  form.setAttribute('class', 'form');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');
  divIcon.setAttribute('class', 'form__presentation');
  img.setAttribute('class', 'form__iconClose');
  img.setAttribute('src', './assets/close.svg');
  img.setAttribute('alt', 'close');
  p.setAttribute('class', 'form__questionDelete');
  divButtons.setAttribute('class', 'form__buttons');
  btnAccept.setAttribute('type', 'submit');
  btnAccept.setAttribute('class', 'button__accept');
  btnCancel.setAttribute('type', 'button');
  btnCancel.setAttribute('class', 'button__cancel');

  p.textContent = this.mensajeModal;
  btnAccept.textContent = 'Aceptar';
  btnCancel.textContent = 'Cancelar';

  divIcon.appendChild(img);
  divButtons.appendChild(btnAccept);
  divButtons.appendChild(btnCancel);
  form.append(divIcon);
  form.appendChild(p);
  form.appendChild(divButtons);
  section.appendChild(form);
  body.appendChild(section);

  img.addEventListener('click', () => {
    this.cerrarModal();
  });

  btnAccept.addEventListener('click', (event) => {
    event.preventDefault();
    this.cerrarModal();

    app.eliminarCardPerro(index);
  });

  btnCancel.addEventListener('click', () => {
    this.cerrarModal();
  });

  return this;
};
