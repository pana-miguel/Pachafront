const app = function () {
    let urOMDb = "https://www.omdbapi.com/";
    let urlGitFake = ""
    const apikey = "1905e990";
    function sl() {
        $('.modal').modal('show');
    }
    function hl() {
        $('.modal').modal('hide');
    }
    let eventos = function () {
        $("#btnBuscar").on("click", function(e) {
            e.preventDefault();
            buscarPelicula();
        });
        $('#table').on('click-cell.bs.table', function (field, value, row, $element) {
            if(value === 'imdbID'){
                buscarInfoPelicula(row)
            }
          })
    }

    function buscarInfoPelicula(imdbID){
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`).then(
            response => response.json()
        ).then(
            json=>dibujarPelicula(json)
            
        );

    }
function dibujarPelicula(data){
    Swal.fire({
        title: `<strong>${data.Title}</strong>`,
        icon: 'info',
        html:
          `<div class="card rounded">
          <div class="card-image">
              <span class="card-notify-badge">${data.Genre}</span>
              <span class="card-notify-year">${data.Year}</span>
              <img class="img-fluid" src="${data.Poster}" alt="Alternate Text" />
          </div>
          <div class="card-image-overlay m-auto">
              <span class="card-detail-badge">Recaudacion:</span>
              <span class="card-detail-badge">${data.BoxOffice}</span>
              <span class="card-detail-badge">Rating: </span>
              <span class="card-detail-badge">${data.imdbRating}</span>
          </div>
          <div class="card-body text-center">
              <div class="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
              </div>
              <a class="ad-btn" href="#">View</a>
          </div>
      </div>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}
    let cargarInformacionInicial = function () {
        cargarProfile()
    }
   function cargarProfile(){

    fetch(`${urlGitFake}profile`).then(
        response => response.json()
    ).then(
        json=>dibujarPerfil(json)
        
    );
   }
  function dibujarPerfil(data){
    Swal.fire({
        title: `<strong>${data.login}</strong>`,
        icon: 'info',
        html:
          `<div class="card rounded">
          <div class="card-image">
              <span class="card-notify-badge">${data.followers}</span>
              <span class="card-notify-year">${data.public_repos}</span>
              <img class="img-fluid" src="${data.avatar_url}" alt="Alternate Text" />
          </div>
          <div class="card-image-overlay m-auto">
              <span class="card-detail-badge">Tipo:</span>
              <span class="card-detail-badge">${data.type}</span>
              <span class="card-detail-badge">Id: </span>
              <span class="card-detail-badge">${data.id}</span>
          </div>
          <div class="card-body text-center">
              <div class="ad-title m-auto">
                  <h5>Honda Accord LX</h5>
              </div>
              <a class="ad-btn" href="#">View</a>
          </div>
      </div>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }
    function cargarTabla(data){
        var $table = $('#table')
        $table.bootstrapTable('load',data)
    }
    function buscarPelicula(){

        let pelicula = $("#searchinput").val();
        var $table = $('#table')
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${pelicula}`).then(
            response => response.json()
        ).then(
            json=>cargarTabla(json.Search)
        );
    }
    return {
        init: function (parametros=null) {
            urOMDb = parametros.urOMDb
            urlGitFake = parametros.urlGitFake
            eventos();
            cargarInformacionInicial();
        }
    }
}();