//Clase Padre: Animal
class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  get Nombre() {
    return this._nombre;
  }
  get Edad() {
    return this._edad;
  }
  get Img() {
    return this._img;
  }
  set Comentarios(comentarios) {
    this._comentarios = comentarios;
  }
  set Sonido(sonido) {
    this._sonido = sonido;
  }
}

//Clase Hijo: Leon
class Leon extends Animal {
  constructor(nombre, edad, comentarios, sonido, rugido) {
    super(nombre, edad, "../imgs/leon.png", comentarios, sonido);
    this._rugido = rugido;
  }
  get Rugido() {
    return this._rugido;
  }
  set Rugido(rugido) {
    this._rugido = rugido;
  }
}

//Clase Hijo: Lobo
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, aullido) {
    super(nombre, edad, "../imgs/lobo.png", comentarios, sonido);
    this._aullido = aullido;
  }
  get Aullido() {
    return this._aullido;
  }
  set Aullido(aullido) {
    this._aullido = aullido;
  }
}

//Clase Hijo: Oso
class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, grunido) {
    super(nombre, edad, "../imgs/oso.png", comentarios, sonido);
    this._grunido = grunido;
  }
  get Grunido() {
    return this._grunido;
  }
  set Grunido(grunido) {
    this._grunido = grunido;
  }
}

//Clase Hijo: Serpiente
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, sisear) {
    super(nombre, edad, "../imgs/serpiente.png", comentarios, sonido);
    this._sisear = sisear;
  }
  get Sisear() {
    return this._sisear;
  }
  set Sisear(sisear) {
    this._sisear = sisear;
  }
}

//Clase Hijo: Aguila
class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido, chillar) {
    super(nombre, edad, "../imgs/aguila.png", comentarios, sonido);
    this._halar = chillar;
  }
  get Chillar() {
    return this._chillar;
  }
  set Chillar(chillar) {
    this._chillar = chillar;
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
