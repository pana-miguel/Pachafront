const generarId = () => {
	return Math.random().toString(36).substr(2, 9);
};
const msgError = (msg, id) => {
  document.getElementById(id).innerHTML = `
  <div class="alert alert-error">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>${msg}</span>
  </div>
  `
}
function validarCorreo(correo) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo);
}
function validarTelefono(telefono) {
  const regex = /^(?:\+51)?\s?(?:(?:9\d{8})|(?:1\d{8}))$/;
  return regex.test(telefono);
}