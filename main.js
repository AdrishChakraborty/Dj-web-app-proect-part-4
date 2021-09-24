song="";
right_wrist_x=0;
left_wrist_x=0;
right_wrist_y=0;
left_wrist_y=0;
function preload() {
    song= loadSound("music.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw () {
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    circle(left_wrist_x,left_wrist_y,20);
    number_left_wrist_y=Number(left_wrist_y);
    removeDecimal=floor(number_left_wrist_y);
    volume=removeDecimal/500;
    document.getElementById("volume").innerHTML="volume="+volume;
    song.setVolume(volume);
}
function play () {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function gotPoses (results) {
    if(results.length>0) 
    {
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rigthWrist.y;
        console.log("right_wrist_x= "+right_wrist_x+"right_wrist_y="+right_wrist_y);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        console.log("left_wrist_x="+left_wrist_x+"left-wrist_y="+left_wrist_y);
    }
        
    
}