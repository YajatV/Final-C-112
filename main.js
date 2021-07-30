Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
    facingMode:"enviorment"
    }
});

camera = document.getElementById("#camera");

Webcam.attach("#camera");

var shutter=new Audio();
shutter.src="shutter.mpeg";

function take_snapshot(){
    Webcam.snap(function (data_uri){
        shutter.play();
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version', ml5.version);

Classifier=ml5.imageClassifier('MobileNet',modelloaded)

function modelloaded(){
    console.log('Model loaded')
}

function Check(){
img=document.getElementById('capture_image');
Classifier.classify(img,gotresult);
}

function gotresult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}