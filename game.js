var numCircles=6;
var colors= generateRandomColors(numSquares);
var pickedColor = randomColorG();
var circles= document.querySelectorAll(".circle");
var easyBtn= document.querySelector("#easyButton");
var hardBtn= document.querySelector("#hardButton");
var replay=  document.querySelector("#replay");
var rgb= document.querySelector("#rgb");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numCircles= 3;
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;

    for(var i= 0; i < circles.length; i++){
        if(colors[i]){
            circles[i].styles.backgroundColor = colors[i];
        }
        else{
            circles[i].style.display= "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    numCircles= 6;
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;

    for(var i= 0; i < circles.length; i++){
        circles[i].styles.backgroundColor = colors[i];
        circles[i].style.display= "block";
        
    }
});

replay.addEventListener("click", function(){
    colors= generateRandomColors(numCircles);

    pickedColor = randomColorG();
    rgb.textContent= pickedColor;
    replay.textContent= "Replay";

});

// color=document.getElementById("rgb");
// clicky=document.getElementsByClassName("circle");

// var x= Math.floor(Math.random() * 256);
// var y= Math.floor(Math.random() * 256);
// var z= Math.floor(Math.random() * 256);

// var circle= document.querySelectorAll(".circle");
// circle.addEventListener("click", function(){
//     var rgbColor= "rgb("+ x + ',' + y + ','+ z + ")";
//     color.textContent= "Background Color: " + rgbColor;
//     circle.style.backgroundColor= rgbColor;
//     // alert("clicked");
// })