let myRect = document.getElementById("rect"); 
var l = 200;
var t = 200;
var step = 20;

function moveLeft(){
    l-=step; // l = l -5
    myRect.style.setProperty("left" , l +"px");
    myRect.style.setProperty("width" , "250px");
    myRect.style.setProperty("height" , "250px");
    myRect.style.setProperty("background-color" , "red");
}
function moveRight(){
    l+=step; // l = l + 5
    myRect.style.setProperty("left" , l +"px");
    myRect.style.setProperty("background-color" , "green");
}
function moveUp(){
    t-=step; // l = l -5
    myRect.style.setProperty("top" , t +"px");
    myRect.style.setProperty("background-color" , "blue");
}
function moveDown(){
    t+=step; // l = l -5
    myRect.style.setProperty("top" , t +"px");
    myRect.style.setProperty("background-color" , "black");
}