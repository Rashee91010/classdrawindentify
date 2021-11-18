function setup(){
    console.log("hello");
    canvas=createCanvas(280,280);
    canvas.center();
    background("yellow");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
        {
            line(pmouseX,pmouseY,mouseX,mouseY);
            
        }
}