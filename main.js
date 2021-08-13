function preload()
{

}

function setup()
{
canvas=createCanvas(300,250)
canvas.center()
console.log("inside setup function");
video=createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wAl40Lj5R/',modelLoaded);
}

function modelLoaded()
{
    console.log("ModelLoaded");
}
function draw()
{
  //console.log("inside draw function");
  image(video,0,0,300,250);
  classifier.classify(video,gotResult);
}

function gotResult(error,results) {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuray").innerHTML=results[0].confidence.toFixed(3);
    }
}