
const Atencion = function () {
    let urlUser;
    let urlClima;
    let key = "ec8a9f98a9e74f82bd613118233005"

    let eventos = function () {
        $("#btn-follow").on("click", function(e) {
            e.preventDefault();
            console.log("Siguendo")
        });
        $("#btn-viewProfile").on("click", function(e) {
            e.preventDefault();
            console.log("Ver Profile")
        });
    }
    let cargarInformacionInicial = function () {
        cargarUsuario();
    }

    function cargarUsuario() {
        let answer;
        sl();
        $.ajax({
            type: 'GET',
            url: urlUser,
            success: function (respuesta) {
                answer = respuesta;
                $("#user-name").text(respuesta.results[0].name.first + " " + respuesta.results[0].name.last)
                $("#user-frid").text(respuesta.results[0].id.value)
                $("#user-email").text(respuesta.results[0].email)
                $('#user-image').attr('src', respuesta.results[0].picture.large);
                $("#user-status").text(respuesta.results[0].gender)
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
    function cargarClima(ciudad){
        sl();
        let url = urlClima + `key=${key}&q=${ciudad}&aqi=no`;
        $.ajax({
            type: 'GET',
            url: url,
            success: function (respuesta) {
                $("#user-globe-rank").html(respuesta.current.temp_c + " &#8451;")
                $('#user-college-rank').attr('src', `https:${respuesta.current.condition.icon}`);
                
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
    return {
        init: function (parametros) {
            urlUser = parametros.urlUser;
            urlClima = parametros.urlClima;
            eventos();
            cargarInformacionInicial();
        }
    }
    function sl() {
        $('.modal').modal('show');
    }
    function hl() {
        $('.modal').modal('hide');
    }
    
}();