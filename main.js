x = 0;
y = 0;
draw_circle ="";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition  = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listining please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

 
var content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "The Speech has been recognized as:" + content;
if(content =="circle")
{
    x = Math.floor(Math.random() *900);
    y = Math.floor(Math.random() *600);
    document.getElementById("status").innerHTML = "Standerd drawing circle";
    draw_circle ="set";
}
if(content =="rectangle")
{
    x = Math.floor(Math.random() *900);
    y = Math.floor(Math.random() *600);
    document.getElementById("status").innerHTML = "Standerd drawing rectangle";
    draw_rect ="set";
}
}
function setup(){
    canvas= createCanvas(900, 600);
    video =createCapture(VIDEO);
    video.size(550, 500);

    canvas.createCanvas(550, 500);
    cavas.position(560,150);
    poseNet = ml5.podeNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#069A97');
if(draw_circle =="set")
{
    radius = Math.floor(Math.random() * 100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML = "circle is drawn. ";
    draw_circle= "";
}

if(draw_rect =="set")
{
    recognition(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle is drawn. ";
    draw_rect ="";
}
}

to_number = Number(content);
if(Number.isInteger(to-number))
screen_width = window.innerWidth;
document.getElementById("status").innerHTML + "Apples drawn";

for(var i =1; i<= to_number; i++)
{
    x = Math.floor(Math.random() *700);
    y = Math.floor(Math.random() *400); 
    image(apple, x, y, 50, 50); 
}