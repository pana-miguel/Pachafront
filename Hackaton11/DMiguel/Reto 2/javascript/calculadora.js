const inputRpta = document.getElementById('form-control');

var botonesNumber = document.querySelectorAll('.btn-outline-primary');
var botonesClicados = [];

var botonesOperaciones = document.querySelectorAll('.btn-outline-success');
var axuNumeroInput;
var axuFirstNumber = true;

for (var i = 0; i < botonesNumber.length; i++) {
  botonesNumber[i].addEventListener('click', function() {
    botonesClicados.push(this.textContent);
    inputRpta.value = inputRpta.value*10 + parseInt(this.textContent);
  });
}

console.log(botonesOperaciones.length)

for (var i = 0; i < botonesOperaciones.length; i++) {
    botonesOperaciones[i].addEventListener('click', function() {
        console.log("contenido de boton : "+this.textContent);
        console.log(typeof(inputRpta.value))
        inputRpta.value = inputRpta.value + this.textContent;
    });
}

