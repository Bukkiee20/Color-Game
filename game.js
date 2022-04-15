var x= Math.floor(Math.random() * 256);
var y= Math.floor(Math.random() * 256);
var z= Math.floor(Math.random() * 256);

var rgbColor= "rgb("+ x + ',' + y + ','+ z + ")";
document.getElementById("rgb").innerHTML= rgbColor;