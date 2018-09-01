function check(){
    let color = document.querySelector("div");
    let red = parseInt(Math.random()*256);
    let blue = parseInt(Math.random()*256);
    let green = parseInt(Math.random()*256);
    color.style.background =  "rgb(" + red + ", " + green + ", " + blue + ")";

}