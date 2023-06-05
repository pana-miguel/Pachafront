const app = function () {

    let urlUser;
    let urlClima;
    let key = "ec8a9f98a9e74f82bd613118233005"
    let nroEmpleados = 10
    let empleados;
    let arrEmpleado = [];
    function sl() {
        $('.modal').modal('show');
    }
    function hl() {
        $('.modal').modal('hide');
    }


    let eventos = function () {

    }


    let cargarInformacionInicial = function () {
        empleados = JSON.parse(sessionStorage.getItem('empleados'));
        if (empleados === null || empleados.length == 0) {
            for (let index = 0; index < nroEmpleados; index++) {
                cargarEmpleado(index);
            }
        } else {
            recuperarEmpleado(empleados)
        }
        console.log(arrEmpleado)
    }
    function recuperarEmpleado(data) {

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element)
            plantilla = `<div class="col-lg-3 col-sm-6">
        <div class="card hovercard">
            <div class="cardheader">
            <a href="#" class="btn-sm btn-success" onclick="verPerfil(${index})" ><span class="glyphicon glyphicon-search"></span> Ver Perfil</a>
            <a href="#" class="btn-sm btn-danger" onclick="eliminarPerfil(${index})"><span class="glyphicon glyphicon-trash"></span> Eliminar Perfil</a>
            </div>
            <div class="avatar">
                <img alt="" src="${element.results[0].picture.large}">
            </div>
            <div class="info">
                <div class="title">
                    <a target="_blank" href="https://scripteden.com/">${element.results[0].name.first} ${element.results[0].name.last}</a>
                </div>
                <div class="desc">${element.results[0].cell}</div>
                <div class="desc">${element.results[0].email}</div>
                <div class="desc">${element.results[0].gender}</div>
            </div>
            <div class="bottom">
                <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                    <i class="fa fa-twitter"></i>
                </a>
                <a class="btn btn-danger btn-sm" rel="publisher"
                   href="https://plus.google.com/+ahmshahnuralam">
                    <i class="fa fa-google-plus"></i>
                </a>
                <a class="btn btn-primary btn-sm" rel="publisher"
                   href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-facebook"></i>
                </a>
                <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-behance"></i>
                </a>
            </div>
        </div>
    </div>`
            const nomina = document.getElementById('nomina');
            nomina.innerHTML += plantilla;
        }



    }
    function cargarEmpleado(index) {
        sl();
        let plantilla = '';
        
        $.ajax({
            type: 'GET',
            url: urlUser,
            success: function (respuesta) {
                answer = respuesta;
                index = arrEmpleado.length;
                arrEmpleado.push(respuesta)
                console.log(arrEmpleado)
                sessionStorage.setItem("empleados", JSON.stringify(arrEmpleado))
                plantilla = `<div class="col-lg-3 col-sm-6">
        <div class="card hovercard">
            <div class="cardheader">
            <a href="#" class="btn-sm btn-success" onclick="verPerfil(${index})" ><span class="glyphicon glyphicon-search"></span> Ver Perfil</a>
            <a href="#" class="btn-sm btn-danger" onclick="eliminarPerfil(${index})"><span class="glyphicon glyphicon-trash"></span> Eliminar Perfil</a>
            
            </div>
            <div class="avatar">
                <img alt="" src="${answer.results[0].picture.large}">
            </div>
            <div class="info">
                <div class="title">
                    <a target="_blank" href="https://scripteden.com/">${answer.results[0].name.first} ${answer.results[0].name.last}</a>
                </div>
                <div class="desc">${answer.results[0].cell}</div>
                <div class="desc">${answer.results[0].email}</div>
                <div class="desc">${answer.results[0].gender}</div>
            </div>
            <div class="bottom">
                <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                    <i class="fa fa-twitter"></i>
                </a>
                <a class="btn btn-danger btn-sm" rel="publisher"
                   href="https://plus.google.com/+ahmshahnuralam">
                    <i class="fa fa-google-plus"></i>
                </a>
                <a class="btn btn-primary btn-sm" rel="publisher"
                   href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-facebook"></i>
                </a>
                <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-behance"></i>
                </a>
            </div>
        </div>
    </div>`
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                const nomina = document.getElementById('nomina');
                nomina.innerHTML += plantilla;
                hl();
            }
        });


    }
    function cargarUsuario() {
        let answer;
        sl();
        $.ajax({
            type: 'GET',
            url: urlUser,
            success: function (respuesta) {
                answer = respuesta;
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                cargarClima(answer.results[0].location.city)
                hl();
            }
        });

    }
    function cargarClima(ciudad) {
        sl();
        let url = urlClima + `key=${key}&q=${ciudad}&aqi=no`;
        $.ajax({
            type: 'GET',
            url: url,
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                hl();
            }
        });
    }

    const getNombres = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const names = ["Roberto", "Karen", "David"];
            resolve(names);
        }, 5000);
    });

    const getCuentas = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const cuentas = ["001", "002", "003"];
            //throw "Error en getCuentas"
            resolve(cuentas)
        }, 7000);
    });

    const getPartners = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const partners = ["Luis", "Juan", "Pedro"];
            resolve(partners)
        }, 4000)
    });

    async function ListData() {
        try {
            //console.log('inicio getnombres')
            const nombres = await getNombres;
            // console.log('fin getNombres')
            // console.log('inicio getCuentas')
            const cuentas = await getCuentas;
            // console.log('fin getCuentas')
            // console.log('inicio getPartners')
            const partners = await getPartners;
            // console.log('fin getPartners')

            return {
                nombres,
                cuentas,
                partners
            };
        } catch (error) {
            console.error(error);
        }
    }
    return {
        init: function (parametros) {
            urlUser = parametros.urlUser;
            urlClima = parametros.urlClima;
            eventos();
            cargarInformacionInicial();
        }
    }
}();
function verPerfil(index){
   
    console.log(index)
}
function eliminarPerfil(dato){
    empleados = JSON.parse(sessionStorage.getItem('empleados'));
    let nuevoArr ;
    for (let index = 0; index < empleados.length; index++) {
        if(dato == index){
        const element = empleados[index];
       nuevoArr= removeAllInstances(empleados,element)
        }
    }
    sessionStorage.setItem("empleados", JSON.stringify(nuevoArr))
app.init({
        urlUser: 'https://randomuser.me/api/',
        urlClima: 'https://api.weatherapi.com/v1/current.json?',
    });
     console.log(nuevoArr)
}
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
      if (arr[i] === item) arr.splice(i, 1);
    }
    return arr;
 }