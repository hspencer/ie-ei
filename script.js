// Demo 1

let cnv; // Declarar la variable cnv para almacenar el elemento canvas
let p5Element; // Declarar la variable p5Element para almacenar un elemento HTML

function setup() {
    p5Element = document.getElementById('p5'); // Seleccionar el elemento HTML con el ID "p5"
    let widthValue = p5Element.offsetWidth; // Obtener el ancho del elemento p5Element
    print("El ancho del elemento es: " + widthValue); // Imprimir el ancho del elemento en la consola
    cnv = createCanvas(widthValue, widthValue); // Crear un lienzo con el ancho y alto del elemento p5Element
    cnv.parent("p5"); // Asignar el lienzo al elemento con ID "p5"
    
    ellipse(width / 2, height / 2, width, height); // Dibujar una elipse en el centro del lienzo
}

function draw() {
    stroke("red"); // Establecer el color del trazo a rojo
    line(width / 2, height / 2, mouseX, mouseY); // Dibujar una línea desde el centro del lienzo hasta la posición actual del ratón
}

function windowResized() {
    let widthValue = p5Element.offsetWidth; // Obtener el ancho del elemento p5Element
    resizeCanvas(widthValue, widthValue); // Cambiar el tamaño del lienzo al ancho y alto del elemento p5Element
    stroke(0);
    clear();
    ellipse(width / 2, height / 2, width, height); // Dibujar una elipse en el centro del lienzo
}
