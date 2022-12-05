TV_image = "";
status = "";

function preload() {
    TV_image = loadImage('TVTV.jpg');
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(tv, gotResult);
}


function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}



function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
