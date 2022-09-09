function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Fj55a9R24/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        ramdom_number_r = Math.floor(Math.ramdon()*255) + 1;
        ramdom_number_g = Math.floor(Math.ramdon()*255) + 1;
        ramdom_number_b = Math.floor(Math.ramdon()*255) + 1;
        document.getElementById("result_label").innerHTML = 'Escucho -'+result[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precision -'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+ramdom_number_b+")";

    }
}