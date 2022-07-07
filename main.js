noseX = 0;
noseY = 0;

function preload() {
    clownnose= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 360);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(125, 52, 235);
    //stroke(235, 153, 52);
    //circle(noseX, noseY, 20);
    image(clownnose, noseX, noseY, 60, 80);
}

function take_snapshot() {
    save("filter.png")
}

function modelLoaded() {
    console.log("posenet is started")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y-50;
        ;


    }
}