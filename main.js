//  https://teachablemachine.withgoogle.com/models/s94QGL0Wo/o

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});


    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/s94QGL0Wo/omodel.json ',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}