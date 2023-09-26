/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

//Con funcion constructora

function Libro(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.cargarLibro = cargarLibro;
    this.mostrarLibro = mostrarLibro;
}

function cargarLibro() {
    this.isbn = prompt("Ingrese el ISBN del libro");
    this.titulo = prompt("Ingrese el título del libro");
    this.autor = prompt("Ingrese el nombre el autor");
    this.numPaginas = prompt("Ingrese el número de páginas del libro");
}

function mostrarLibro() {
    alert(`Los atributos del libro son:
    ISBN : ${this.isbn}
    Título : ${this.titulo}
    Autor : ${this.autor}
    Número de páginas : ${this.numPaginas}`);
}

var libro1 = new Libro();
libro1.cargarLibro();

var libro2 = new Libro();
libro2.cargarLibro();

libro1.mostrarLibro();
libro2.mostrarLibro();