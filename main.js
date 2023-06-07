mustacheX=0;
mustacheY=0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/SxjY6Y1x/m.png');
}

function setup()
{ 
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is intialized")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("Mustache X = " + mustacheX);
        console.log("Mustache Y = " + mustacheY);
    }
}

function draw()
{
        image(video,0,0,300,300);
}

function takeSnap()
{
    save("|-| |_ |_ .png");
}