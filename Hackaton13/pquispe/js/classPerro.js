
class Perro {
  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.telefono = '';
    this.pais = '';
    this.fotografia = '';
    this.descripcion = '';
  };
};

Perro.prototype.setNombre = function (addNombre) {
  this.nombre = addNombre;
  return this;
};

Perro.prototype.setApellido = function (addApellido) {
  this.apellido = addApellido;
  return this;
};

Perro.prototype.setCorreo = function (addCorreo) {
  this.correo = addCorreo;
  return this;
};

Perro.prototype.setTelefono = function (addTelefono) {
  this.telefono = addTelefono;
  return this;
};

Perro.prototype.setPais = function (addPais) {
  this.pais = addPais;
  return this;
};

Perro.prototype.setFotografia = function (addFotografia) {
  this.fotografia = addFotografia;
  return this;
};

Perro.prototype.setDescripcion = function (addDescripcion) {
  this.descripcion = addDescripcion;
  return this;
};

Perro.prototype.build = function () {
  return {
    nombre: this.nombre,
    apellido: this.apellido,
    correo: this.correo,
    telefono: this.telefono,
    pais: this.pais,
    fotografia: this.fotografia,
    descripcion: this.descripcion
  };
};
