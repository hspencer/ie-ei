

/*


Demo 1


*/

let cnv; // elemento canvas del html


function setup(){
    cnv = createCanvas(500, 500);
    cnv.parent("p5");
    ellipse(width/2, height/2, width, height);
}


function draw(){
    stroke("red");
    line(width/2, height/2, mouseX, mouseY);
}