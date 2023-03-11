

let mobilenet;
let bird;
let speech;


function preload() {
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
    createCanvas(640, 480);
    bird = createImg('bird.jpg', imageReady);
    bird.hide();
    background(0);
    speech = new p5.Speech();
    
}

function modelReady() {
    console.log('Model is ready!');
    mobilenet.classify(bird, gotResults);
}

function gotResults(error, results) { 
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let confidence = results[0].confidence;
        createP(label);
        createP(confidence);
        speech.speak(`This would be ${label}`);
    }
}

function imageReady() {
    console.log('image is ready!');
    image(bird, 0, 0, width, height); 
}
 