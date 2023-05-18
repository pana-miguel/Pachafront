var fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

var new_inputs = '<label for="dato_i">Datos _i</label><input id="dato_i" name="dato_i" type="text" class="form-control">';

const app = express();
var puerto = process.env.PUERTO || 3000;
var urlencodedParser = bodyParser.urlencoded({
    extended: false,
});

app.get("/", function (peticion, respuesta) {
    let titulo = "Hackaton 10";
    let parrafo = "Alumno: Dominguez Valentin Miguel";
    var html = fs
        .readFileSync(__dirname + '/templates/inicio.html')
        .toString()
        .replace('%titulo%', titulo)
        .replace('%parrafo%', parrafo);
    respuesta.end(html);
});

app.get("/ejercicio/1/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 01';
    parrafo = '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla';
    let param1 = parseInt(peticion.query.dato1);
    let param2 = parseInt(peticion.query.dato2);
    let answ = ejercicio01(param1, param2);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 2)
});

app.get("/ejercicio/2/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 02';
    parrafo = 'Cree una función que tome números y devuelva la suma de sus cubos.sumOfCubes(1, 5, 9) ➞ 855// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855';
    let datos = peticion.query;
    let answ = ejercicio02(datos);
    console.log(answ);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5);
});

app.get("/ejercicio/3/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 03';
    parrafo = 'Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js';
    let dato = peticion.query.dato1;
    let answ = ejercicio03(dato);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 1);
});

app.get("/ejercicio/4/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 04';
    parrafo = 'Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)';
    let datos = peticion.query;
    let answ = ejercicio04(datos);
    console.log(answ);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5);
});

app.get("/ejercicio/5/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 05';
    parrafo = 'Crear una función que reciba un array de valores y filtre los valores que no son string';
    let datos = peticion.query;
    let answ = ejercicio05(datos);
    console.log(answ);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5);
});

app.get("/ejercicio/6/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 06';
    parrafo = 'Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.minMax([1, 2, 3, 4, 5]) ➞ [1, 5]';
    let datos = peticion.query;
    let answ = ejercicio06(datos);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5);
});

app.get("/ejercicio/7/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 07';
    parrafo = 'Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"';
    let param1 = parseInt(peticion.query.dato1);
    let param2 = parseInt(peticion.query.dato2);
    let param3 = parseInt(peticion.query.dato3);
    let param4 = parseInt(peticion.query.dato4);
    let param5 = parseInt(peticion.query.dato5);
    let param6 = parseInt(peticion.query.dato6);
    let param7 = parseInt(peticion.query.dato7);
    let param8 = parseInt(peticion.query.dato8);
    let param9 = parseInt(peticion.query.dato9);
    let param10 = parseInt(peticion.query.dato10);

    let answ = ejercicio07(param1, param2, param3, param4, param5, param6, param7, param8,param9,param10);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 10)
});

app.get("/ejercicio/8/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 08';
    parrafo = 'Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]';
    let datos = peticion.query;
    let answ = ejercicio06(datos);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5);
});


app.listen(puerto);



function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function generarEjercicio(respuesta, titulo, parrafo, new_inputs,answ, cant_inp) {
    new_inputs = repeatText(new_inputs, cant_inp);
    let html = fs
        .readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%inputs%", new_inputs)
        .replace('%respuesta%',answ);
    respuesta.end(html);
}

function ejercicio01(numero1, numero2) {
    let respuesta = numero1 + numero2;
    return respuesta;
}

function ejercicio02(datos) {
    answ = 0;
    for (let clave in datos){
        answ += datos[clave]**3;
    }
    return answ;
}

function ejercicio03(dato) {
    let answ ="";
    if (parseInt(dato)){
        answ = "el dato "+dato+" es de tipo Numerico Entero";
    }else if (parseFloat(dato)) {
        answ = "el dato "+dato+" es de tipo Numerico Flotante";
    }else if(dato == "True" || dato == "False"){
        answ = "el dato "+dato+" es de tipo Boleano";
    }else{
        answ = "el dato "+dato+" es de tipo Sting";
    }
    return answ;
}

function ejercicio04(datos) {
    answ = 0;
    for (let clave in datos){
        answ += parseInt(datos[clave]);
    }
    return  answ;
}

function ejercicio05(datos) {
    let answ ="";
    for (let clave in datos){
        if (!(parseInt(datos[clave]) || (datos[clave] == "True" || datos[clave] == "False"))){
            answ += datos[clave] + "  "
        }
    }
    return answ;
}
 
function ejercicio06(datos) {
    valuesDatos = []
    for (let clave in datos){
        valuesDatos.push(parseInt(datos[clave]))
    }
    valuesDatos.sort(function(a,b){
        return a-b;
    })
    return [valuesDatos[0],valuesDatos[valuesDatos.length -1]];
}

function ejercicio07(param1, param2, param3, param4, param5, param6, param7, param8,param9,param10) {
    let telefono = `(${param1}${param2}${param3}) ${param4}${param5}${param6} - ${param7}${param8}${param9}${param10}`;
    return telefono;
}