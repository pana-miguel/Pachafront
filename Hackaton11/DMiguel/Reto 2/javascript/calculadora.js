const inputRpta = document.getElementById('form-control').value;

const botonNumero9 = document.getElementById('btn9');
const botonNumero8 = document.getElementById('btn8');
const botonNumero7 = document.getElementById('btn7');
const botonNumero6 = document.getElementById('btn6');
const botonNumero5 = document.getElementById('btn5');
const botonNumero4 = document.getElementById('btn4');
const botonNumero3 = document.getElementById('btn3');
const botonNumero2 = document.getElementById('btn2');
const botonNumero1 = document.getElementById('btn1');
const botonNumero0 = document.getElementById('btn0');
const botonNumero_ = document.getElementById('btn_');

function actionPressNumberButton(botonNumero = botonNumero9) {
    if (botonNumero.addEventListener('click')){
        numeroButton  = botonNumero.innerHTML;
        return numeroButton
    }
}

function textInRpta(newNumber = ""){
    inputRpta = inputRpta + newNumber;
    document.getElementById('form-control').value = inputRpta;
}
