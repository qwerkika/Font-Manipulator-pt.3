function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    postNet=ml5.postNet(video,modelLoaded);
    postNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("postNet is initilized");
}
function draw()
{
    background("#89DAFF");
    textSize(difference);
    fill("#ffe786");
    text('Hemalsai',50,400);
}
function gotPoses()
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX)
    }
}